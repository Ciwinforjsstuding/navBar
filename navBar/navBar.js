import { getBox } from './template/getBox';

export  class navBar {
  constructor(selector, items) {
    this.items = items;
    this.$el = document.querySelector(selector);
    this.#render();
    this.#setup();
  }

  #render(id = 0) {
    this.$el.innerHTML = getBox(this.items, id);
  };

  #setup() {
    this.clickHandler = this.clickHandler.bind(this);
    this.$el.addEventListener("click", this.clickHandler);
  };

  clickHandler(event) {
    const { type } = event.target.dataset;
    if (type === "arrow") {
      this.$childItems = document.querySelector('[data-type="child-items"]');
      console.log("fuck",this.$childItems);
      this.toglle()
      this.#render(event.target.dataset.id);
    }
  };

  get isOpen() {
    console.log(this.$childItems);
    return this.$childItems.classList.contains("nav-bar-child__open");
  }

  toglle() {
    this.isOpen ? this.close() : this.open();
  }

  open() {
    console.log(this.$childItems)
    this.$childItems.classList.add("open");
  }

  close() {
    this.$childItems.classList.remove("open");
  }

}