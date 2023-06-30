"use strict";
const formBtn = document.querySelector(".form__btn");
const ul = document.querySelector(".section__ul");
let count = 0;
formBtn === null || formBtn === void 0 ? void 0 : formBtn.addEventListener("click", () => {
    let inputTxt = getValue();
    const newTag = addTag(inputTxt);
    ul === null || ul === void 0 ? void 0 : ul.appendChild(newTag);
    count++;
});
function getValue() {
    const inputTag = document.querySelector(".form__input");
    if (inputTag instanceof HTMLInputElement) {
        const result = inputTag.value;
        inputTag.value = "";
        return result;
    }
    else {
        throw new Error("데이터없음");
    }
}
function addTag(txt) {
    const li = document.createElement("li");
    li.className = `section__li li_${count}`;
    li.innerHTML = `
  <span class="span span_${count}">${txt}</span>
  <input type="checkbox" class="checkbox_${count}" />
  <button class="button_${count}"><i class="fa-solid fa-trash"></i></button>
</li>
  `;
    return li;
}
