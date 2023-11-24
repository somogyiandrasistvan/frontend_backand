class TextUrlapElem {
    #key = "";
    #leiro = {};
    #value = "";
    #valid = true;
    #boolean
    constructor(key, leiro, formElem, boolean) {
      this.#boolean = boolean
      console.log(this.#boolean)
      this.#key = key;
      this.#leiro = leiro;
      this.formElem = formElem;
      this.#textElem();
  
      this.inputElem = $(`#${this.#key+this.#boolean}`);
      this.validElem = this.formElem
        .children("div:last-child")
        .children(".valid");
      this.invalidElem = this.formElem
        .children("div:last-child")
        .children(".invalid"); //más megoldás: this.invalidElem = $(".invalid:last")
      this.inputElem.on("keyup", () => {
        console.log(this.inputElem);
        this.#value = this.inputElem.val();
        let reg = this.#leiro.regex;
        let regObj = new RegExp(reg);
  
        if (regObj.test(this.#value)) {
          this.#valid = true;
          this.validElem.removeClass("elrejt");
          this.invalidElem.addClass("elrejt");
        } else {
          this.#valid = false;
          this.invalidElem.removeClass("elrejt");
          this.validElem.addClass("elrejt");
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
  
    #textElem() {
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
              patter="${this.#leiro.regex}"
              value="${this.#leiro.value}">
              
              <div class="valid elrejt">OK</div>
              <div class="invalid elrejt">${this.#leiro.validalas}</div>
          </div>
          `;
  
      this.formElem.append(txt);
    }
  }
  
  export default TextUrlapElem;