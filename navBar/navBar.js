import { getBox } from './template/getBox';

export  class navBar {
  constructor(selector, items) {
    this.items = items;
    this.$el = document.querySelector(selector);
    this.#render(0, null);
    this.#setup();
  }

  #render(id = 0, isOpen) {
    this.$el.innerHTML = getBox(this.items, id, isOpen);
  };

  #setup() {
    this.clickHandler = this.clickHandler.bind(this);
    this.$el.addEventListener("click", this.clickHandler);
  };

  get isOpen() {
    return this.$childItems.classList.contains("open");
  }

  clickHandler(event) {
    const { type } = event.target.dataset;
    if (type === "arrow") {
      this.$childItems = document.querySelector('[data-type="child-items"]');
      this.#render(event.target.dataset.id, this.isOpen);
      // this.toglle();
    }
  };
//пока что это закоменчино, но это не правильно
  // toglle() {
  //   console.log(this.isOpen)
  //   this.isOpen ? this.close() : this.open();
  // }

  // open() {
  //   this.$childItems.classList.add("open");
  // }

  // close() {
  //   this.$childItems.classList.remove("open");
  // }
}