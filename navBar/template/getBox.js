export const getBox = (items, id = 0, isOpen) => {

  let open = isOpen === null || isOpen === true ? "" : "open"; //это костыль ты должен исправить это 

  const childItems = items.filter(elem => elem.parentId == id).map(element => {
    return `
      <div class="nav-bar-wrapper-child-items">
        <div class="nav-bar__child-item" data-type="child-item>
          <div class="nav-bar__icon" data-type="icon">
          <span class="nav-bar__text" data-type="item-text">
            ${element.text}
          </span>
        </div>
      </div>
    `;
  })
  

  const itemsNavBar = items.filter(elem => !elem.parentId).map(item => {
    return `
      <div class="nav-bar-wrapper">
        <div class="nav-bar__item" data-type="item">
          <div class="nav-bar__icon" data-type="icon">
            <i class="fas fa-align-justify" data-type="icon"></i>
          </div>
          <span class="nav-bar__text" data-type="item-text">
            ${item.text}
          </span>
          <div class="nav-bar__arro">
            <i class="fas fa-angle-right" data-id="${item.id}" data-type="arrow" ></i>
          </div>
        </div>
      </div>
      `;
  });

  if (id !== 0) {
    let titleChildItems = items.find(elem => elem.id == id);

    childItems.unshift(`
      <div class="nav-bar__child-title-item" data-type="child-title-item">
        <div class="nav-bar__icon" data-type="icon">
          <i class="far fa-sort-amount-up-alt"></i>
        </div>
        <span class="nav-bar__text" data-type="item-text">
          ${titleChildItems.text}
        </span>
      </div>
    `);

  itemsNavBar.push(`<div class="nav-bar-child ${open}" data-type="child-items">
      ${childItems.join("")}
    </div>`);
    return itemsNavBar.join("");
  } else {
    itemsNavBar.push(`<div class="nav-bar-child ${open}" data-type="child-items">
      </div>`);
  return itemsNavBar.join("");
  }
}