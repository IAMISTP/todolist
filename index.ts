const formBtn = document.querySelector(".form__btn");
const ul = document.querySelector(".section__ul");
let count: number = 0;
formBtn?.addEventListener("click", () => {
  let inputTxt = getValue();
  const newTag = addTag(inputTxt);
  ul?.appendChild(newTag);
  count++;
});

function getValue(): string {
  const inputTag = document.querySelector(".form__input");
  if (inputTag instanceof HTMLInputElement) {
    const result = inputTag.value;
    inputTag.value = "";
    return result;
  } else {
    throw new Error("데이터없음");
  }
}

function addTag(txt: string): HTMLLIElement {
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
