class NumberUrlapElem {
  #key = "";
  #leiro = {};
  #value = "";
  #valid = true;
  #boolean;
  constructor(key, leiro, formElem, boolean) {
    this.#boolean = boolean
    this.#key = key;
    this.#leiro = leiro;
    this.formElem = formElem;
    this.#numberElem();

    this.inputElem = $(`#${this.#key+this.#boolean}`);
    this.validElem = this.formElem
      .children("div:last-child")
      .children(".valid");
    this.invalidElem = this.formElem
      .children("div:last-child")
      .children(".invalid");
    this.inputElem.on("change", () => {
      this.#value = this.inputElem.val();
      if (this.#value <= 2023 && this.#value >= 1900) {
        this.#valid = true;
      } else {
        this.#valid = false;
      }
    });
  }

  get value() {
    return this.#value;
  }

  get valid() {
    return this.#valid;
  }

  get key() {
    return this.#key;
  }

  #numberElem() {
    let txt = `
          <div class="mb-3 mt-3">
              <label for="${this.#key}" 
              class="form-label">
              ${this.#leiro.megjelenes}
              </label>
          
              <input type="${this.#leiro.tipus}" class="form-control" 
              id="${this.#key+this.#boolean}" 
              name="${this.#key}"
              placeholder="${this.#leiro.placeholder}"  
              min="${this.#leiro.regex.min}"
              max="${this.#leiro.regex.max}"
              value="${this.#leiro.value}">
          </div>
          `;

    this.formElem.append(txt);
  }
}
export default NumberUrlapElem;
