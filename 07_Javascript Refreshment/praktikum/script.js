const btnSubmit = document.querySelector("#btn_Submit");
if (
  !isProductNameValid ||
  !isProductPriceValid ||
  !isProductCategoryValid ||
  !isProductImageValid ||
  !isAdditionalDescriptionValid
) {
  btnSubmit.disabled = true;
} else {
  btnSubmit.disabled = false;
}

function isAlphanumeric(str) {
  return /^[a-zA-Z0-9]+$/.test(str);
}

function validateProductName() {
  const product_name_validation = document.getElementById(
    "product_name_validation"
  );
  const product_name = document.querySelector("input[name=product-name]");
  if (isAlphanumeric(!product_name.value)) {
    product_name_validation.innerHTML = "Name must not contain symbols.";
    product_name.classList.add("is-invalid");
    // btnSubmit.disabled = true; // button nya aktif atau ngga
  }
  if (product_name.value.length > 25 && isAlphanumeric(product_name.value)) {
    product_name_validation.innerHTML = "Tidak Boleh Lebih Dari 25 Karakter!";
    product_name.classList.add("is-invalid");
    // btnSubmit.disabled = true;
  } else if (
    product_name.value.length > 10 &&
    isAlphanumeric(product_name.value)
  ) {
    product_name_validation.innerHTML =
      "Product Name must not exceed 25 characters";
    product_name.classList.add("is-invalid");
    product_name.style.borderColor = "yellow";
    product_name.style.backgroundImage = "none";
    // btnSubmit.disabled = true;
  } else if (
    product_name.value.length > 0 &&
    isAlphanumeric(product_name.value)
  ) {
    product_name.classList.add("is-valid");
    product_name.classList.remove("is-invalid");
  } else {
    product_name.classList.add("is-invalid");
  }
}
function validateProductPrice() {
  //   const product_price_validation = document.getElementById(
  // "product_price_validation"
  //   );
  const product_price = document.querySelector("input[name=product_price]");

  if (product_price.value != "") {
    product_price.classList.add("is-valid");
    product_price.classList.remove("is-invalid");
  } else {
    product_price.classList.remove("is-valid");
    product_price.classList.add("is-invalid");
  }
}
function validateProductCategory() {
  const product_category_validation = document.getElementById(
    "product_category_validation"
  );
  const product_category = document.querySelector(
    "select[name=product_category]"
  );
  //
  if (product_category.value === "") {
    product_category.classList.add("is-invalid");
    product_category_validation.innerHTML = "The Product Category field must be filled in!";
  }
}

function validateImageProduct() {
  const product_image = document.getElementById("product_image");
  const image_validation = document.getElementById("image_validation");

  if (!product_image.value) {
    //! artinya ==="" string kosong
    product_image.classList.add("is-invalid");
    image_validation.innerHTML = "The Image Product field must be filled in!!";
  }
}

// function validateProductFresh() {
//   const fresh_validation = document.getElementById("additional_validation");
//   const fresh_description = document.querySelector(
// "input[name=additional_description]"
//   );
//   console.log(fresh_description);
// }

function validateAdditional() {
  const additional_validation = document.getElementById(
    "additional_validation"
  );
  const additional_description = document.querySelector(
    "textarea[name=additional_description]"
  );
  if (additional_description.value.length > 30) {
    additional_validation.innerHTML = "Tidak Boleh Lebih Dari 30 Karakter!";
    additional_description.classList.add("is-invalid");
    // btnSubmit.disabled = true;
  } else if (additional_description.value != "") {
    additional_validation.innerHTML =
      "The Additional Description field must be filled in!";
    additional_description.classList.add("is-valid");
    additional_description.classList.remove("is-invalid");
  } else {
    additional_description.classList.remove("is-valid");
    additional_description.classList.add("is-invalid");
  }
}

function submitForm(event) {
  event.preventDefault();

  const product_name = document.querySelector("input[name=product-name]").value;
  const product_category = document.querySelector(
    "select[name=product_category]"
  ).value;
  const product_image = document.getElementById("product_image").value;
  const additional_description = document.querySelector(
    "textarea[name=additional_description]"
  ).value;
  const product_price = document.querySelector(
    "input[name=product_price]"
  ).value;
  const tableBody = document.querySelector("table tbody");
  const newRow = tableBody.insertRow();

  newRow.insertCell().innerHTML = product_name;
  newRow.insertCell().innerHTML = product_category;
  newRow.insertCell().innerHTML = product_image;
  const options = ['Bran New', 'Second Hand', 'Refurbished'];
  const product_freshness = options[Math.floor(Math.random() * options.length)];
  newRow.insertCell().innerText = product_freshness;
  newRow.insertCell().innerHTML = additional_description;
  newRow.insertCell().innerHTML = "$" + product_price;



  document.querySelector("input[name=product-name]").value = '';
  document.querySelector("select[name=product_category]").selectedIndex = 0;
  document.getElementById("product_image").value = '';
  document.querySelector("textarea[name=additional_description]").value = '';
  document.querySelector("input[name=product_price]").value = '';

  document.querySelector("input[name=product-name]").classList.remove("is-valid")
  document.querySelector("textarea[name=additional_description]").classList.remove("is-valid");
  document.querySelector("input[name=product_price]").classList.remove("is-valid");
}

function checkValidity() {
  const product_name = document.querySelector("input[name=product-name]");
  const product_price = document.querySelector("input[name=product_price]");
  const product_category = document.querySelector("select[name=product_category]");
  const product_image = document.querySelector("input[name=product_image]");
  const additional_description = document.querySelector("textarea[name=additional_description]");

  const isProductNameValid = product_name.checkValidity();
  const isProductPriceValid = product_price.checkValidity();
  const isProductCategoryValid = product_category.checkValidity();
  const isProductImageValid = product_image.checkValidity();
  const isAdditionalDescriptionValid = additional_description.checkValidity();
}