// $(document).ready(function () {
//   var amount = 0;
//   //   $('.cart').hide();
//   $('#discounttitle').hide();

//   let date = new Date().getDay();
//   if (date == 7 || date == 6) {
//     $('#discounttitle').show();
//   }
//   $('.card').click(function () {
//     // $('.cart').slideDown('slow');
//     var eachPrice = +$(this).find('.priceValue').text();
//     amount += +$(this).find('.priceValue').text();
//     if (date == 7 || date == 6) {
//       amount = parseInt(amount - (+amount * 15) / 100);
//     }

//     $('#discountprice').text(`
//         ${amount} kyats
//     `);

//     $('.calculateitem').append(`
//         <div class="item" value="${eachPrice}">
//             <img src="${$(this).find('img').attr('src')}"/>
//             <div class="details">
//                 <p>${$(this).find('.pname').text()}</p>
//                 <p>(${$(this).find('.code').text()})</p>
//             </div>
//             <input type="text" class="quantity" value="1"/>
//             <ion-icon name="trash-outline" class="delete"></ion-icon>
//         </div>
//     `);

//     $('.quantity').keyup(function () {
//       if ($('.quantity').val() > 9) {
//         window.alert('error');
//       } else {
//         eachPrice =
//           +$(this).parents('.item').attr('value') * (+$(this).val() - 1);

//         $('#discountprice').text(`
//         ${amount + eachPrice} kyats
//       `);
//       }
//     });

//     $('.quantity').blur(function () {
//       var inputValue = $('.quantity').val();
//       if (inputValue == '' || inputValue >= 10) {
//         inputValue = 1;
//         $('.quantity').val(inputValue);
//       }
//     });

//     $('.delete').click(function () {
//       $('#discountprice').text(`
//         ${amount - eachPrice} kyats
//       `);
//       $(this).parents('.item').remove();
//     });
//   });
// });

$('document').ready(function () {
  // $('.cart').hide();
  var date = new Date().getDay();
  if (date == 6 || date == 7) {
    $('#discounttitle').show();
  }

  init();
});

function init() {
  var total = 0;
  var click = false;

  if (click == false) {
    $('.card').click(function () {
      var delivery = 0;
      var quantityValue = 0;
      var grandTotal = 0;
      delivery = +$('#delivery').val();
      // $('.cart').slideDown('slow');
      var eachPrice = +$(this).find('.priceValue').text();

      $('.calculateitem').append(`
          <div class="item" value="${eachPrice}">
              <img src="${$(this).find('img').attr('src')}"/>
              <div class="details">
                  <p>${$(this).find('.pname').text()}</p>
                  <p>(${$(this).find('.code').text()})</p>
              </div>
              <input type="text" class="quantity" value="1"/>
              <ion-icon name="trash-outline" class="delete"></ion-icon>
          </div>
      `);

      total += eachPrice;

      $('#delivery').click(function () {
        delivery = +$(this).val();
        grandTotal = total + quantityValue + delivery;

        $('#grand').text(`
          ${grandTotal} kyats
        `);
      });

      $('.quantity').keyup(function () {
        var inputValue = +$(this).val();
        quantityValue =
          +$(this).parents('.item').attr('value') * (inputValue - 1);
        if (inputValue > 9) {
          window.alert('Error');
          inputValue = 1;
          $(this).val(inputValue);
        } else {
          grandTotal = total + delivery + quantityValue;

          $('#grand').text(`
            ${grandTotal} kyats
          `);
        }
      });

      $('.quantity').blur(function () {
        if ($(this).val() < 1 || $(this).val() > 9) {
          $(this).val('1');
          window.alert('error');
        }
      });

      var date = new Date().getDay();
      if (date == 6 || date == 7) {
        $('#discounttitle').show();
        var percentage = (total * 15) / 100;
        total = parseInt(total - percentage);
        $('#discountprice').text(`
        ${total} kyats
        `);
      }
      grandTotal = total;

      $('.delete').click(function () {
        // $('#discountprice').text(`
        //         ${amount - eachPrice} kyats
        //       `);
        $(this).parents('.item').remove();
      });

      $('#grand').text(`
        ${grandTotal + delivery} kyats
      `);
    });

    $('#order').click(function () {
      $('#orderdetail').html(`
        Thank you ${$('#yourname').val()} <br/>
        We received your order! <br/>
        We will Deliver to your place at ${$('#address').val()} <br/>
        Before delivery, we will inform to you Phone: ${$('#phone').val()}
      `);
    });
    click = true;
  } else {
    click = false;
  }
}
