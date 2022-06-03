$(document).ready(function () {
  $('#continent').change(function () {
    let selected = $(this).val();
    $('#country').empty();
    fetch(
      `https://app.sportdataapi.com/api/v1/soccer/countries?apikey=b64fb860-e1aa-11ec-aa6a-a1ea5928dfed&continent=${selected}`
    )
      .then((res) => res.json())
      .then((data) => {
        for (const key in data.data) {
          $('#country').append(`
                <option value=${data.data[key].country_id}>${data.data[key].name}</option>
            `);
        }
      })
      .catch((err) => console.log(err));
  });

  $('#search').click(function () {
    let country = $('#country').val();
    let maxAge = $('#maxAge').val();
    let minAge = $('#minAge').val();

    fetch(
      `https://app.sportdataapi.com/api/v1/soccer/players?apikey=b64fb860-e1aa-11ec-aa6a-a1ea5928dfed&country_id=${country}&max_age=${maxAge}&min_age=${minAge}`
    )
      .then((res) => res.json())
      .then((data) => {
        let count = 1;
        $('.newRow').remove();
        for (const key in data.data) {
          $('#detail').append(`
            <tr class="newRow">
                <td>${count++}</td>
                <td>${data.data[key].firstname} ${data.data[key].lastname}</td>
                <td>${data.data[key].age}</td>
                <td>${data.data[key].birthday}</td>
                <td>${data.data[key].height}</td>
                <td>${data.data[key].weight}</td>
            </tr>
        `);
        }
      })
      .catch((err) => console.log(err));
  });
});
