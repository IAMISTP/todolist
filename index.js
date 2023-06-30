"use strict";
const formBtn = document.querySelector(".form__btn");
formBtn === null || formBtn === void 0 ? void 0 : formBtn.addEventListener("click", () => {
    const inputTxt = getValue();
});
function getValue() {
    const inputTag = document.querySelector(".form__input");
    if (inputTag instanceof HTMLInputElement) {
        return inputTag.value;
    }
    else {
        throw new Error("데이터없음");
    }
}
