fetch("data.json").then(res => res.json()).then(res => {

  let table = document.querySelector('.table');

  for (let i = 0; i < res.length; i++) {
    let row = table.insertRow(i + 1);
    let id = row.insertCell(0);
    let name = row.insertCell(1);
    let surname = row.insertCell(2);
    let age = row.insertCell(3);

    id.innerHTML = res[i].id;
    name.innerHTML = res[i].name;
    surname.innerHTML = res[i].surname;
    age.innerHTML = res[i].age;
  }

});


