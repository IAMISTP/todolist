"use strict";
const formBtn = document.querySelector(".form__btn");
formBtn === null || formBtn === void 0 ? void 0 : formBtn.addEventListener("click", () => {
    const ul = document.querySelector(".section__ul");
    let inputTxt = getInputValue();
    if (typeof inputTxt === "string") {
        const item = createItem(inputTxt);
        ul === null || ul === void 0 ? void 0 : ul.appendChild(item);
    }
});
function getInputValue() {
    const inputTag = document.querySelector(".form__input");
    if (inputTag instanceof HTMLInputElement) {
        if (inputTag.value === "") {
            inputTag.focus();
        }
        else {
            return inputTag.value;
        }
    }
}
let id = 0;
function createItem(text) {
    const itemRow = document.createElement("li");
    itemRow.setAttribute("class", "section__li");
    itemRow.setAttribute("data-id", id.toString());
    itemRow.innerHTML = `
  <div class="item" data-id=${id}>
    <span class="item__name">${text}</span>
    <button class="item__delete">
      <i class="fa-solid fa-trash" data-id=${id}></i>
    </button>
  </div>
  <div class="item__divider"></div>
    `;
    id++;
    return itemRow;
}
