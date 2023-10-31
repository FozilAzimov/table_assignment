let btn = document.querySelector('.btn');

btn.addEventListener('click', function () {

  let inp = document.querySelector('.inp');
  let file = inp.files[0];
  let reader = new FileReader();

  reader.onload = function ({ target: { result } }) {

    let data = JSON.parse(result);

    let table = document.querySelector('.table');

    for (let i = 0; i < data.length; i++) {
      let row = table.insertRow(i + 1);
      let id = row.insertCell(0);
      let name = row.insertCell(1);
      let surname = row.insertCell(2);
      let age = row.insertCell(3);

      id.innerHTML = data[i].id;
      name.innerHTML = data[i].name;
      surname.innerHTML = data[i].surname;
      age.innerHTML = data[i].age;
    }
  }
  reader.readAsText(file);
});





