//Global Variable
let today = new Date();   //get today
let buyItem_price = [];
let quantiy = [];
let itemtotal = [];
let discount = false;
let count = 0;
let perQuantity;

$(document).ready(function () {

    initial();

    $(".card").click(function () {
        //silde cart
        $(".cart").slideDown(1500);
        // show order button
        $("#order").show();

        let alreadyExist = false;
        let img = $(this).find('img').attr("src");
        let pname = $(this).find('.pname').text();
        let code = "(" + $(this).find('.code').text() + ")";
        let price = $(this).find('.price').text();

        let items = $(".item");
        for (let index = 0; index < items.length; index++) {
            let exist = items[index].childNodes[1].childNodes[2].innerText;
            if (exist == code) {
                alreadyExist = true;
                alert("Item has already in Cart! ")
            }
        }

        if (!alreadyExist) {
            // add price for each item
            buyItem_price.push(Number(price.replace("Ks ", "")));
            // append
            $(".calculateitem").append(
                '<div class="item">' +
                '<img src="' + img + '" alt="" />' +
                '<div class= "itemdetail"> ' +
                '<p id = "pname" > ' + pname + '</p>' +
                '<p id = "code" >' + code + '</p> ' +
                '</div > ' +
                '<input type = "text" value = "1" class= "quantity" /> ' +
                '<div id="' + count + '" class= "delete" > <ion-icon name="trash-outline"></ion-icon></div > ' +
                '</div>'
            )

            count++;
            quantiy.push(1);
            calculateTotal();
        }
    })


    function calculateTotal() {
        let eachItemTotal = 0;
        let discountTotal = 0;
        let deliveryAmount = Number($("#delivery").val());
        let grandTotal = 0;

        for (let index = 0; index < buyItem_price.length; index++) {
            itemtotal[index] = buyItem_price[index] * quantiy[index];
            eachItemTotal += itemtotal[index];
        }

        if (discount) {
            discountTotal = parseInt(eachItemTotal * 0.15); //900
            $("#discountprice").text(eachItemTotal - discountTotal + " Ks");
        }

        grandTotal = (eachItemTotal - discountTotal) + deliveryAmount;
        $("#grand").text(grandTotal + " Ks");
    }

    $(document).on('click', '.delete', function () {
        $(this).parents(".item").remove();
        buyItem_price[this.id] = 0;
        quantiy[this.id] = 0;
        calculateTotal();
        let items = $(".item");
        if (items.length == 0) {
            $("#discountprice").text("");
            $("#grand").text("");
            $(".cart").slideUp(1500);
        }

    })

    $(document).on('focus', '.quantity', function () {
        perQuantity = Number($(this).val());

        console.log(perQuantity);
    })

    $(document).on('blur', '.quantity', function () {
        let quantityItem = Number($(this).val());
        if (quantityItem < 1 || quantityItem > 9) {
            $(this).val(perQuantity);
            alert("Allowed 1 to 9 Item");
        } else {
            let index = $(this).next(".delete")[0].id;
            quantiy[index] = quantityItem;
            calculateTotal();
        }
    })

    $("#delivery").change(function () {
        calculateTotal();
    })


    // this function used for initial state
    function initial() {
        $("#discounttitle").hide();
        $("#discountprice").hide();
        $("#order").hide();
        $("#orderdetail").hide();
        $(".cart").hide();
        // call for discount check
        checkWeekEnd();
    }

    // this function used for check show or hide discount
    function checkWeekEnd() {
        // check for sun sat
        if (today.getDay() == 2 || today.getDay() == 3)
            if (Number(today.getHours()) >= 9 && Number(today.getHours()) <= 19) {
                $("#discounttitle").show();
                $("#discountprice").show();
                discount = true;
            }
    }

})