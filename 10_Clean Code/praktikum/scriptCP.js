const btnSubmit = document.querySelector("#btn_Submit");
let rowIndex = 1;

// Fungsi untuk memeriksa karakter alfanumerik 
function isAlphanumeric(str) {
  return /^[a-zA-Z0-9]+$/.test(str);
}

function toggleValidation(element, valid) {
  element.classList.toggle("is-invalid", !valid);
  element.classList.toggle("is-valid", valid);
}

// Validasi Product Name 
function validateProductName() {
  const product_nameValidation = document.getElementById("productNameValidation");
  const productName = document.querySelector("input[name=productName]");
  const productNameValid = isAlphanumeric(productName.value);

  if (!productNameValid) {
    product_nameValidation.innerHTML = "Name must not contain symbols.";
  } else if (productName.value.length > 25) {
    product_nameValidation.innerHTML = "Tidak Boleh Lebih Dari 25 Karakter!";
  } else if (productName.value.length > 10) {
    product_nameValidation.innerHTML = "Product Name must not exceed 25 characters";
  } else if (productName.value.length > 0) {
    product_nameValidation.innerHTML = "";
  }

  toggleValidation(productName, productNameValid);
}

// Validasi Product Price 
function validateProductPrice() {
  const productPriceValidation = document.getElementById("productPriceValidation");
  const productPrice = document.querySelector("input[name=productPrice]");
  const productPriceValid = productPrice.value !== "";

  toggleValidation(productPrice, productPriceValid);
}

// Validasi Product Category 
function validateProductCategory() {
  const productCategoryValidation = document.getElementById("productCategoryValidation");
  const productCategory = document.querySelector("select[name=productCategory]");
  const productCategoryValid = productCategory.value !== "";

  if (!productCategoryValid) {
    productCategoryValidation.innerHTML = "The Product Category field must be filled in!";
  } else {
    productCategoryValidation.innerHTML = "";
  }

  toggleValidation(productCategory, productCategoryValid);
}

// Validasi Image Product
function validateImageProduct() {
  const productImage = document.getElementById("productImage");
  const imageValidation = document.getElementById("imageValidation");
  const productImageValid = productImage.value !== "";

  if (!productImageValid) {
    imageValidation.innerHTML = "The Image Product field must be filled in!";
  } else {
    imageValidation.innerHTML = "";
  }

  toggleValidation(productImage, productImageValid);
}

// Validasi Additional 
function validateAdditional() {
  const additionalValidation = document.getElementById("additionalValidation");
  const additionalDescription = document.querySelector("textarea[name=additionalDescription]");
  const additionalDescriptionValid = additionalDescription.value.length <= 30;

  if (!additionalDescriptionValid) {
    additionalValidation.innerHTML = "Tidak Boleh Lebih Dari 30 Karakter!";
  } else {
    additionalValidation.innerHTML = "";
  }

  toggleValidation(additionalDescription, additionalDescriptionValid);
}

// Memeriksa validasi setiap fungsi yang dipanggil 
function submitForm(event) {
  event.preventDefault();

  validateProductName();
  validateProductCategory();
  validateImageProduct();
  validateAdditional();
  validateProductPrice();

  const formValid = document.querySelectorAll('.is-invalid').length === 0;

  if (!formValid) {
    return;
  }

  // Memasukan setiap input ke dalam tabel 
  const productName = document.querySelector("input[name=productName]").value;
  const productCategory = document.querySelector("select[name=productCategory]").value;
  const productImage = document.getElementById("productImage").value;
  const additionalDescription = document.querySelector("textarea[name=additionalDescription]").value;
  const productPrice = document.querySelector("input[name=productPrice]").value;
  const tableBody = document.querySelector("table tbody");
  const newRow = tableBody.insertRow();

  const indexCell = newRow.insertCell();
  indexCell.innerText = rowIndex;
  rowIndex++;

  newRow.insertCell().innerHTML = productName;
  newRow.insertCell().innerHTML = productCategory;
  newRow.insertCell().innerHTML = productImage;
  const options = ['Brand New', 'Second Hand', 'Refurbished'];
  const productFreshness = options[Math.floor(Math.random() * options.length)];
  newRow.insertCell().innerText = productFreshness;
  newRow.insertCell().innerHTML = additionalDescription;
  newRow.insertCell().innerHTML = "$" + productPrice;

  const formInputs = document.querySelectorAll("#formPendaftaran input, #formPendaftaran select, #formPendaftaran textarea");
  formInputs.forEach(input => {
    input.classList.remove("is-valid");
  });

  // Mengosongkan form setelah submit
  document.querySelector("input[name=productName]").value = '';
  document.querySelector("select[name=productCategory]").selectedIndex = 0;
  document.getElementById("productImage").value = '';
  document.querySelector("textarea[name=additionalDescription]").value = '';
  document.querySelector("input[name=productPrice]").value = '';

  document.querySelector("input[name=productName]").classList.remove("is-valid")
  document.querySelector("textarea[name=additionalDescription]").classList.remove("is-valid");
  document.querySelector("input[name=productPrice]").classList.remove("is-valid");

  // Button Search 
  document.querySelector("#btnSearch").addEventListener("click", function () {
    const searchInput = document.querySelector("#searchInput").value;
    const table = document.querySelector("table");
    const rows = table.rows;

    let found = false;

    for (let i = 1; i < rows.length; i++) {
      const productName = rows[i].cells[0].textContent;

      if (productName.toLowerCase() === searchInput.toLowerCase()) {
        alert(`Product found: ${productName}`);
        found = true;
        break;
      }
    }

    if (!found) {
      alert("Product not found.");
    }
  });

  // Button Delete 
  document.querySelector("#btnDelete").addEventListener("click"), function () {
    const table = document.querySelector("table");
    const rows = table.rows;


    if (rows.length > 1) {
      table.deleteRow(rows.length - 1);
      alert("Data terakhir telah dihapus.");
    } else {
      alert("Tidak ada data yang dapat dihapus.");
    }

  }
}
