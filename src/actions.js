function handleSearchSubmit(event) {
  event.preventDefault();
  let searchFormInput = document.querySelector("#search-form-input");
  let cityVariable = document.querySelector("#city");
  cityVariable.innerHTML = searchFormInput.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
