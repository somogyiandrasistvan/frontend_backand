import TextUrlapElem from "./TextUrlapElem.js";
import NumberUrlapElem from "./NumberUrlapElem.js";

class UrlapView {
  #leiro = {};
  #urlapElemLista = [];
  #urlapNumberLista = [];
  #osszesElemValidE = true;
  #urlapAdat = {};
  #boolean
  #adatID
  constructor(szuloElem, leiro, boolean) {
    this.#boolean = boolean
    this.szuloElem = szuloElem;
    this.#leiro = leiro;
    this.szuloElem.append("<form>");
    this.formElem = this.szuloElem.children("form");

    this.#urlapOsszerak();
    this.submitElem = $(".submit");
    this.submitElem.on("click", (event) => {
      event.preventDefault();
      this.#osszesElemValidE = true;
      this.#urlapElemLista.forEach(elem=>{
        this.#osszesElemValidE = this.#osszesElemValidE && elem.valid;
      })
      if(this.#osszesElemValidE){
        this.#urlapElemLista.forEach((elem)=>{
            this.#urlapAdat[elem.key] = elem.value;
        })
        console.log("Valid az űrlap")
      }else{
        console.log("Nem valid az űrlap");
      }
      if(this.#boolean == true){
        this.#esemenyTrigger("betesz");
      }
      if(this.#boolean == false){
        this.#esemenyTrigger("szerkeszt");
      }
    });
  }

  get urlapAdat(){
    return this.#urlapAdat;
  }

  setAdatID(adat){
    this.#adatID = adat
  }

  #urlapOsszerak() {
    for (const key in this.#leiro) {
      switch (this.#leiro[key].tipus) {
        case "text":
          this.#urlapElemLista.push(new TextUrlapElem(key, this.#leiro[key], this.formElem, this.#boolean))
          break;
        case "number":
            this.#urlapElemLista.push(new NumberUrlapElem(key, this.#leiro[key], this.formElem, this.#boolean));
          break;
        default:
      }
    }
    let txt = "<input type='submit' class='submit' value='OK'>";
    this.formElem.append(txt);
  }

  #esemenyTrigger(esemeny){
    const E = new CustomEvent(esemeny, {detail: this.#urlapAdat});
    window.dispatchEvent(E);
  }

}
export default UrlapView;