document.addEventListener("DOMContentLoaded", function () {

  const createAccountForm = document.querySelector("form");

  createAccountForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const gender = document.getElementById("gender").value;
    const address = document.getElementById("address1").value;
    const address2 = document.getElementById("address2").value;
    const nationality = document.getElementById("nasionallity").value;
    const languages = document.querySelectorAll('language');
    const selectedLanguages = Array.from(languages).map((lang) => lang.value).join(", ");

    const table = document.querySelector("table tbody");

    const newRow = table.insertRow();
    const cells = [firstName, lastName, username, email, gender, address, address2, nationality, selectedLanguages];

    cells.forEach((value, index) => {
      const cell = newRow.insertCell(index);
      cell.textContent = value;
    });

    cells.forEach((value, index) => {
      const cell = newRow.insertCell(index);
      cell.textContent = value;

      if (index === cells.length - 1) {
        const searchButton = document.createElement("button");
        searchButton.textContent = "Search";
        searchButton.className = "btnSearch";
        cell.appendChild(searchButton);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "btnDelete";
        cell.appendChild(deleteButton);

        searchButton.addEventListener("click", function () {
          alert("Search button clicked for: " + firstName);
        });

        deleteButton.addEventListener("click", function () {
          newRow.remove();
        });
      }
    });

  });
});
