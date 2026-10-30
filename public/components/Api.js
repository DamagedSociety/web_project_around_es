var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Api {
    constructor(baseUrl, key, customHeaders = {}) {
        this.baseUrl = baseUrl;
        this.key = key;
        this.headers = Object.assign({ authorization: this.key, "Content-Type": "application/json" }, customHeaders);
    }
    request(endpoint, options) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(`${this.baseUrl}/${endpoint}`, Object.assign({ headers: this.headers }, options));
                if (res.ok) {
                    return yield res.json();
                }
                else {
                    throw new Error(`¡Ups! ${res.statusText}`);
                }
            }
            catch (err) {
                console.log(err);
                throw err;
            }
        });
    }
    getUser() {
        return this.request("users/me");
    }
    getCards() {
        return this.request("cards");
    }
    patchUser(data) {
        return this.request("users/me", {
            method: "PATCH",
            body: JSON.stringify(data),
        });
    }
    addCard(data) {
        return this.request("cards", {
            method: "POST",
            body: JSON.stringify(data),
        });
    }
    deleteCard(cardId) {
        return this.request(`cards/${cardId}`, {
            method: "DELETE",
        });
    }
    addLike(cardId) {
        return this.request(`cards/${cardId}/likes`, {
            method: "PUT",
        });
    }
    removeLike(cardId) {
        return this.request(`cards/${cardId}/likes`, {
            method: "DELETE",
        });
    }
    updateAvatar(avatar) {
        return this.request("users/me/avatar", {
            method: "PATCH",
            body: JSON.stringify({ avatar }),
        });
    }
}
