import { type UserInfoSelectors } from "../types/types";
import { type UserData } from "../types/types";

export class UserInfo {
  private userNameElement: Element;
  private userDescriptionElement: Element;

  constructor({
    userNameSelector,
    userDescriptionSelector,
  }: UserInfoSelectors) {
    this.userNameElement = document.querySelector(
      userNameSelector,
    ) as HTMLElement;
    this.userDescriptionElement = document.querySelector(
      userDescriptionSelector,
    ) as HTMLElement;
  }

  getUserInfo(): UserData {
    return {
      name: this.userNameElement.textContent || "",
      about: this.userDescriptionElement.textContent || "",
    };
  }

  setUser({ name, about }: UserData): void {
    this.userNameElement.textContent = name;
    this.userDescriptionElement.textContent = about;
  }
}
