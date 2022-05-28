$(document).ready(function () {
  $('#addToCart').click(function () {
    $('#itemList').append(`
        <div class="addItem">
            <div class="icon"><ion-icon name="trash-bin-outline" id="trash"></ion-icon></div>
            <img src="./img/bag.png" alt="bag" />
            <p class="price">Price: $<span>100</span></p>
            <p class="quantity">Quantity: ${$('#quantity').val()}</p>
        </div>
    `);
  });

  $('#trash').click(function () {
    console.log('hello');
    // $(this).parents('div.addItem').remove();
  });
});
