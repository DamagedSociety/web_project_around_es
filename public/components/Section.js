export class Section {
    constructor({ data, renderer }, containerSelector) {
        this.container = document.querySelector(containerSelector);
        this.renderedItems = data;
        this.renderer = renderer;
    }
    renderItems() {
        this.renderedItems.forEach((item) => {
            this.renderer(item);
        });
    }
    addItem(element) {
        this.container.prepend(element);
    }
}
