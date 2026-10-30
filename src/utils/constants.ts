import type { FormValidatorConfig, UserInfoSelectors } from "../types/types.js";
export const defaultFormConfig: FormValidatorConfig = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};

export const cardContainer = ".cards__list";
export const cardTemplate = "#card-template";
export const editProfileModal = "#edit-popup";
export const newCardModal = "#new-card-popup";
export const imgModal = "#image-popup";
export const confirmationModal = "#confirm-popup";
export const userInfoConfig: UserInfoSelectors = {
  userNameSelector: ".profile__title",
  userDescriptionSelector: ".profile__description",
  userAvatarSelector: ".profile__image",
};
