import type { RendererFunction } from "../types/types";

export class Section<T> {
  private container: HTMLElement;
  private renderedItems: T[];
  private renderer: RendererFunction<T>;

  constructor(
    { data, renderer }: { data: T[]; renderer: RendererFunction<T> },
    containerSelector: string,
  ) {
    this.container = document.querySelector(containerSelector) as HTMLElement;
    this.renderedItems = data;
    this.renderer = renderer;
  }

  renderItems(): void {
    this.renderedItems.forEach((item) => {
      this.renderer(item);
    });
  }

  addItem(element: HTMLElement): void {
    this.container.prepend(element);
  }
}
