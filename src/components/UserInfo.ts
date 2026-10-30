import type { UserInfoSelectors, ApiUserInfo } from "../types/types.js";

export class UserInfo {
  private userNameElement: Element;
  private userDescriptionElement: Element;
  private userAvatarElement: HTMLImageElement;

  constructor(selectors: UserInfoSelectors & { userAvatarSelector: string }) {
    this.userNameElement = document.querySelector(
      selectors.userNameSelector,
    ) as HTMLElement;
    this.userDescriptionElement = document.querySelector(
      selectors.userDescriptionSelector,
    ) as HTMLElement;
    this.userAvatarElement = document.querySelector(
      selectors.userAvatarSelector,
    ) as HTMLImageElement;
  }

  getUserInfo(): { name: string; about: string } {
    return {
      name: this.userNameElement.textContent || "",
      about: this.userDescriptionElement.textContent || "",
    };
  }

  setUser(data: Partial<ApiUserInfo>): void {
    if (data.name && this.userNameElement) {
      this.userNameElement.textContent = data.name;
    }
    if (data.about && this.userDescriptionElement) {
      this.userDescriptionElement.textContent = data.about;
    }
    if (data.avatar && this.userAvatarElement) {
      this.userAvatarElement.src = data.avatar;
    }
  }
}
