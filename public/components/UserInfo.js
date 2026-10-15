import {} from "../types/types";
import {} from "../types/types";
export class UserInfo {
    constructor({ userNameSelector, userDescriptionSelector, }) {
        this.userNameElement = document.querySelector(userNameSelector);
        this.userDescriptionElement = document.querySelector(userDescriptionSelector);
    }
    getUserInfo() {
        return {
            name: this.userNameElement.textContent || "",
            about: this.userDescriptionElement.textContent || "",
        };
    }
    setUser({ name, about }) {
        this.userNameElement.textContent = name;
        this.userDescriptionElement.textContent = about;
    }
}
