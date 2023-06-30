const formBtn = document.querySelector(".form__btn");

formBtn?.addEventListener("click", () => {
  const inputTxt = getValue();
});

function getValue(): string {
  const inputTag = document.querySelector(".form__input");
  if (inputTag instanceof HTMLInputElement) {
    return inputTag.value;
  } else {
    throw new Error("데이터없음");
  }
}
