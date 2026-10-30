export class UserInfo {
    constructor(selectors) {
        this.userNameElement = document.querySelector(selectors.userNameSelector);
        this.userDescriptionElement = document.querySelector(selectors.userDescriptionSelector);
        this.userAvatarElement = document.querySelector(selectors.userAvatarSelector);
    }
    getUserInfo() {
        return {
            name: this.userNameElement.textContent || "",
            about: this.userDescriptionElement.textContent || "",
        };
    }
    setUser(data) {
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
