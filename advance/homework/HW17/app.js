$(document).ready(function () {
  $('.block').hide();
  init();

  $('input').keyup(function () {
    $('.conText').text(
      parseInt(Number($(this).val())) * parseInt(Number($('#ccode').val())) +
        ' ' +
        $('#ccode option:selected').text()
    );
  });
});

async function init() {
  await fetch(
    'https://v6.exchangerate-api.com/v6/31497d5a0c8d3eb34ca1b419/latest/USD'
  )
    .then((res) => res.json())
    .then((data) => {
      for (const key in data.conversion_rates) {
        $('#ccode').append(`
                <option value=${data.conversion_rates[key]}>
                    ${key}
                </option>
            `);
      }
    })
    .catch((err) => console.log(err));

  $('.block').show();
  $('#load').hide();
}
