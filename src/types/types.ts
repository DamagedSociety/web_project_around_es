export interface CardData {
  name: string;
  link: string;
}

export interface FormValidatorConfig {
  inputSelector: string;
  submitButtonSelector: string;
  inactiveButtonClass: string;
  inputErrorClass: string;
  errorClass: string;
}

export interface FormValues {
  [key: string]: string;
}

export type RendererFunction<T> = (item: T) => void;

export interface UserInfoSelectors {
  userNameSelector: string;
  userDescriptionSelector: string;
}

export interface UserData {
  name: string;
  about: string;
}
