import type { ApiCard, ApiUserInfo } from "../types/types.js";

export class Api {
  private baseUrl: string;
  private headers: Record<string, string>;
  private key: string;

  constructor(
    baseUrl: string,
    key: string,
    customHeaders: Record<string, string> = {},
  ) {
    this.baseUrl = baseUrl;
    this.key = key;
    this.headers = {
      authorization: this.key,
      "Content-Type": "application/json",
      ...customHeaders,
    };
  }

  private async request<T>(
    endpoint: string,
    options?: RequestInit,
  ): Promise<T> {
    try {
      const res = await fetch(`${this.baseUrl}/${endpoint}`, {
        headers: this.headers,
        ...options,
      });

      if (res.ok) {
        return await res.json();
      } else {
        throw new Error(`¡Ups! ${res.statusText}`);
      }
    } catch (err: unknown) {
      console.log(err);
      throw err;
    }
  }

  public getUser(): Promise<ApiUserInfo> {
    return this.request<ApiUserInfo>("users/me");
  }

  public getCards(): Promise<ApiCard[]> {
    return this.request<ApiCard[]>("cards");
  }

  public patchUser(data: {
    name: string;
    about: string;
  }): Promise<ApiUserInfo> {
    return this.request<ApiUserInfo>("users/me", {
      method: "PATCH",
      body: JSON.stringify(data),
    });
  }

  public addCard(data: { name: string; link: string }): Promise<ApiCard> {
    return this.request<ApiCard>("cards", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  public deleteCard(cardId: string): Promise<{ message: string }> {
    return this.request<{ message: string }>(`cards/${cardId}`, {
      method: "DELETE",
    });
  }

  public addLike(cardId: string): Promise<ApiCard> {
    return this.request<ApiCard>(`cards/${cardId}/likes`, {
      method: "PUT",
    });
  }

  public removeLike(cardId: string): Promise<ApiCard> {
    return this.request<ApiCard>(`cards/${cardId}/likes`, {
      method: "DELETE",
    });
  }

  public updateAvatar(avatar: string): Promise<ApiUserInfo> {
    return this.request<ApiUserInfo>("users/me/avatar", {
      method: "PATCH",
      body: JSON.stringify({ avatar }),
    });
  }
}
