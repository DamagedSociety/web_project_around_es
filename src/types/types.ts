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
  userAvatarSelector: string;
}

export interface ApiCard {
  _id: string;
  name: string;
  link: string;
  owner: string;
  createdAt: string;
  isLiked: boolean;
}

export interface ApiUserInfo {
  name: string;
  about: string;
  avatar: string;
  _id: string;
}
