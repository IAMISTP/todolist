const formBtn = document.querySelector(".form__btn");
const ul = document.querySelector(".section__ul");

formBtn?.addEventListener("click", () => {
  let inputTxt = getInputValue();
  if (typeof inputTxt === "string") {
    const item = createItem(inputTxt);
    ul?.appendChild(item);
  }
});

ul?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLElement) {
    const span = event.target.closest("span");
    span?.classList.contains("selected")
      ? span?.classList.remove("selected")
      : span?.classList.add("selected");
  }
});

function getInputValue(): string | undefined {
  const inputTag = document.querySelector(".form__input");
  if (inputTag instanceof HTMLInputElement) {
    if (inputTag.value === "") {
      inputTag.focus();
    } else {
      let result = inputTag.value;
      inputTag.value = "";
      return result;
    }
  }
}
let id: number = 0;

function createItem(text: string): HTMLLIElement {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "section__li");
  itemRow.setAttribute("data-id", id.toString());
  itemRow.innerHTML = `
    <span class="span item__name" data-id=${id}>${text}</span>
    <button class="item__delete">
      <i class="fa-solid fa-trash" data-id=${id}></i>
    </button>
    `;
  id++;
  return itemRow;
}
