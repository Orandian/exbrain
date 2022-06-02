$(document).ready(function () {
  var amount = 0;
  //   $('.cart').hide();
  $('#discounttitle').hide();

  let date = new Date().getDay();
  if (date == 0 || date == 7) {
    $('#discounttitle').show();
  }
  $('.card').click(function () {
    // $('.cart').slideDown('slow');
    amount += +$(this).find('.priceValue').text();
    if (date == 0 || date == 7) {
      amount = parseInt(amount - (+amount * 15) / 100);
    }
    $('.quantity').keyup(function () {
      // return (amount = +$('.priceValue').text() * +$(this).val());
      amount = +$(this).parents('.item').attr('value') * +$(this).val();
    });
    $('#discountprice').text(`
        ${amount} kyats
    `);

    $('.calculateitem').append(`
        <div class="item" value="${$(this).find('.priceValue').text()}">
            <img src="${$(this).find('img').attr('src')}"/>
            <div class="details">
                <p>${$(this).find('.pname').text()}</p>
                <p>(${$(this).find('.code').text()})</p>
            </div>
            <input type="text" class="quantity" />
            <ion-icon name="trash-outline" class="delete"></ion-icon>
        </div>
    `);

    $('.delete').click(function () {
      $(this).parents('.item').remove();
    });
  });
});
