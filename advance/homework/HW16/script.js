// $('document').ready(function () {
//   $('.cart').hide();
//   $('#discounttitle').hide();

//   init();
// });

// function init() {
//   var total = 0;

//   $('.card').click(function () {
//     var delivery = 0;
//     var quantityValue = 0;
//     var grandTotal = 0;
//     delivery = +$('#delivery').val();
//     $('.cart').slideDown('slow');
//     var eachPrice = +$(this).find('.priceValue').text();

//     $('.calculateitem').append(`
//           <div class="item" value="${eachPrice}">
//               <img src="${$(this).find('img').attr('src')}"/>
//               <div class="details">
//                   <p>${$(this).find('.pname').text()}</p>
//                   <p>(${$(this).find('.code').text()})</p>
//               </div>
//               <input type="text" class="quantity" value="1"/>
//               <ion-icon name="trash-outline" class="delete"></ion-icon>
//           </div>
//       `);

//     total += eachPrice;

//     $('#delivery').click(function () {
//       delivery = +$(this).val();
//       grandTotal = total + quantityValue + delivery;

//       $('#grand').text(`
//           ${grandTotal} kyats
//         `);
//     });

//     $('.quantity').keyup(function () {
//       var inputValue = +$(this).val();
//       quantityValue =
//         +$(this).parents('.item').attr('value') * (inputValue - 1);
//       if (inputValue > 9) {
//         window.alert('Error');
//         inputValue = 1;
//         $(this).val(inputValue);
//       } else {
//         grandTotal = total + delivery + quantityValue;

//         $('#grand').text(`
//             ${grandTotal} kyats
//           `);
//       }
//     });

//     $('.quantity').blur(function () {
//       if ($(this).val() < 1 || $(this).val() > 9) {
//         $(this).val('1');
//         window.alert('error');
//       }
//     });

//     var date = new Date().getDay();
//     if (date == 6 || date == 0) {
//       $('#discounttitle').show();
//       var percentage = (total * 15) / 100;
//       total = parseInt(total - percentage);
//       $('#discountprice').text(`
//         ${total} kyats
//         `);
//     }
//     grandTotal = total;

//     $('.delete').click(function () {
//       // $('#grand').text(`
//       //         ${grandTotal - eachPrice} kyats
//       // `);
//       $(this).parents('.item').remove();
//     });

//     $('#grand').text(`
//         ${grandTotal + delivery} kyats
//       `);
//   });

//   $('#order').click(function () {
//     $('#orderdetail').html(`
//         Thank you ${$('#yourname').val()} <br/>
//         We received your order! <br/>
//         We will Deliver to your place at ${$('#address').val()} <br/>
//         Before delivery, we will inform to you Phone: ${$('#phone').val()}
//       `);
//   });
// }

// Global Variables
let today = new Date();
let buyItem_price = [];
let quantity = [];
let itemtotal = [];
let discount = false;
let count = 0;
let perQuantity;
let totalprice = 0;

$(document).ready(function () {
  initial();

  $('.card').click(function () {
    // slide down to cart
    $('.cart').slideDown(1500);

    // show Order button
    $('#order').show();

    // check already add or not
    let alreadyExist = false;
    let img = $(this).find('img').attr('src');
    let pname = $(this).find('.pname').text();
    let code = $(this).find('.code').text();
    let price = $(this).find('.price').text();

    let items = $('.item');
    for (let index = 0; index < items.length; index++) {
      let exist = items[index].childNodes[1].childNodes[1].innerText;

      if (exist == code) {
        alreadyExist = true;
        alert('Item has already in cart!');
      }
    }

    if (!alreadyExist) {
      // add price for each item
      buyItem_price.push(Number(price.replace('Ks ', '')));

      totalprice = +buyItem_price.reduce((a, b) => a + b, 0);
      // console.log(totalprice);

      if (discount) {
        let percentage = Math.floor((totalprice / 100) * 15);

        totalprice -= percentage;

        $('#discountprice').text(`${totalprice} kyats`);
      }

      $('.calculateitem').append(
        '<div class="item" value="' +
          price +
          '">' +
          '<img src="' +
          img +
          '" alt=""/>' +
          '<div class="itemdetail">' +
          '<p id="pname">' +
          pname +
          '</p>' +
          '<p id="code">' +
          code +
          '</p>' +
          '</div>' +
          '<input type="text" value="1" class="quantity"/>' +
          '<div id="' +
          count +
          '" class="delete"><ion-icon name="trash-outline"></ion-icon></div>' +
          '</div>'
      );
    }

    $('.quantity').keyup(function () {
      let itemQuantity = +$(this).val();
      let itemValue = +$(this)
        .parents('.item')
        .attr('value')
        .replace('Ks ', '');
      if (itemQuantity > 9) {
        window.alert('Error');
        $(this).val('1');
      } else {
        let quantityResult = itemValue * itemQuantity - itemValue;
        let grand = +$('#grand').text().replace(' kyats', '');
        // console.log(grand + quantityResult);
        $('#grand').text(`
          ${grand + quantityResult} kyats
        `);
      }
    });

    $('.quantity').blur(function () {
      if ($(this).val() <= 0 || $(this).val() > 9) {
        $(this).val('1');
        let itemValue = +$(this)
          .parents('.item')
          .attr('value')
          .replace('Ks ', '');
        let grand = +$('#grand').text().replace(' kyats', '');
        $('#grand').text(`
          ${grand + itemValue} kyats
        `);
      }
    });

    $('.delete').click(function () {
      let itemQuantity = +$(this).siblings('.quantity').val();
      let itemValue = +$(this)
        .parents('.item')
        .attr('value')
        .replace('Ks ', '');
      let grand = +$('#grand').text().replace(' kyats', '');
      // console.log(grand + quantityResult);
      $('#grand').text(`
          ${grand - itemValue * itemQuantity} kyats
        `);
      $(this).parents('.item').remove();
    });

    $('#grand').text(`${totalprice + 3000} kyats`);
  });

  $('#delivery').click(function () {
    let delivery = +$(this).val();
    $('#grand').text(`${totalprice + delivery} kyats`);
  });

  $('#order').click(function () {
    $('#orderdetail').html(`
      Thank you ${$('#yourname').val()} <br/>
      We received your order! <br/>
      We will Deliver to your place at ${$('#address').val()} <br/>
      Before delivery, we will inform to you Phone: ${$('#phone').val()}
    `);
  });
});

// this function is used for initial states
function initial() {
  $('#discounttitle').hide();
  $('#discountprice').hide();
  $('#order').hide();
  $('#orderdetails').hide();
  $('.cart').hide();

  // call weekend or not function
  checkWeekend();
}

function checkWeekend() {
  // get today date
  // sunday : 0 , Sat : 6
  if (today.getDay() == 0 || today.getDay() == 6) {
    // check time between 9AM and 6PM
    if (today.getHours() >= 9 && today.getHours() <= 18) {
      $('#discounttitle').show();
      $('#discountprice').show();

      // set discount flag to true
      discount = true;
    }
  }
}
