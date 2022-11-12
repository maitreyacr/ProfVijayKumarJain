fetch("../DataFiles/books.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (books) {
    let placeholder = document.querySelector("#data_here");
    let jsTable = "";
    let index=0;
    books = books;
    for (let data of books) {
        jsTable += `
        <tr>
            <td><img src="${data.image}" height="150px" width="120px" alt=""></td>
            <td>${data.name}</td>
            <td>${data.description}</td>
            <td>${data.writer}"</td>
            <td><a href="${data.download}">${data.download}</a></td>
          </tr>
      `;
      index++
    }
    placeholder.innerHTML = jsTable;
  });