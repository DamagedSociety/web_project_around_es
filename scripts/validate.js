function showInputError(formElement, element, errorMessage) {
  const errorElement = formElement.querySelector(`.${element.id}-input-error`);
  element.classList.add("form__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
}

function hideInputError(formElement, element) {
  const errorElement = formElement.querySelector(`.${element.id}-input-error`);
  element.classList.remove("form__input_type_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
}

function checkInputValidity(formElement, input) {
  if (!input.validity.valid) {
    showInputError(formElement, input, input.validationMessage);
  } else {
    hideInputError(formElement, input);
  }
}

function hasInvalidInput(inputList) {
  return inputList.some((input) => !input.validity.valid);
}

function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
  } else {
    buttonElement.disabled = false;
  }
}

function setEventListeners(formElement) {
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
  const submitButton = formElement.querySelector(".popup__button");
  toggleButtonState(inputList, submitButton);

  inputList.forEach((input) => {
    input.addEventListener("input", function () {
      checkInputValidity(formElement, input);
      toggleButtonState(inputList, submitButton);
    });
  });
}

function enableValidation() {
  const formList = Array.from(document.querySelectorAll(".popup__form"));
  formList.forEach((formElement) => {
    setEventListeners(formElement);
  });
}

function resetValidation(formElement) {
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
  const submitButton = formElement.querySelector(".popup__button");
  inputList.forEach((input) => hideInputError(formElement, input));
  submitButton.disabled = true;
}

export { enableValidation, resetValidation };
