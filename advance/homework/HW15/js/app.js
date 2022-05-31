$(document).ready(function () {
  $('#addToCart').click(function () {
    $('#itemList').append(`
        <div class="addItem">
          <div class="icon"><ion-icon name="trash-bin-outline" class="trash"></ion-icon></div>
          <h1>${$('#name').val()}</h1>
          <img src="./img/bag.png" alt="bag" />
          <p class="price">Price: $<span>${$('#price').val()}</span></p>
          <p class="quantity">Quantity: ${$('#quantity').val()}</p>
        </div>
    `);
    $('.trash').click(function () {
      $(this).parents('.addItem').remove();
    });
  });
});
