$(document).ready(function () {
  $('.cart').hide();
  $('.card').click(function () {
    $('.cart').slideDown('slow');
    $('.calculateitem').append(`
        <div class="item">
            <img src="${$(this).find('img').attr('src')}"/>
            <div class="details">
                <p>${$(this).find('.pname').text()}</p>
                <p>(${$(this).find('.code').text()})</p>
            </div>
            <input type="text" class="quantity" />
            <ion-icon name="trash-outline" class="delete"></ion-icon>
        </div>
    `);
  });
  $('.delete').click(function () {
    // $(this).parent('item').remove();
    console.log('hay');
  });
});
