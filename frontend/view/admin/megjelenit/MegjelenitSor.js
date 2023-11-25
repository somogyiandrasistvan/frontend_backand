import UrlapView from "../urlap/UrlapView.js";

class MegjelenitSor {
  #adat = {};
  #index;
  #boolean;
  constructor(adat, szuloElem, index, leiro, boolean) {
    this.#boolean = boolean
    this.#adat = adat;
    this.#index = index;
    this.tablaElem = szuloElem;

    this.#sor();
    this.sorElem = this.tablaElem.children("tr:last-child");
    this.keszElem = this.sorElem.children("td").children(".kesz" + this.#index);
    this.torolElem = this.sorElem.children("td").children(".torol");
    this.megseElem = this.sorElem.children("td").children(".megse" + this.#index);
    this.kivalasztElem = this.sorElem.children("td").children(".kivalaszt");
    this.#feher()

    this.keszElem.on("click", () => {
      this.#esemenyTrigger("kesz");
      this.#zold()
      this.sorElem.append("<div class=szerk" + this.#index + ">");
      this.urlapView = new UrlapView($(".szerk" + this.#index), leiro, false);
      this.#esemenyTrigger("id")
    });
    this.megseElem.on("click", () => {
      this.#esemenyTrigger("kesz");
      this.#feher()
      $(".szerk" + this.#index).remove();
    });
    this.torolElem.on("click", () => {
      this.sorElem.remove();
      this.#esemenyTrigger("torles");
    });
    this.kivalasztElem.on("click", () => {
      this.#esemenyTrigger("kivalaszt");
    });
  }

  #sor() {
    let txt = "";

    txt += "<tr>";
    for (const key in this.#adat) {
      if (Object.hasOwnProperty.call(this.#adat, key)) {
        const element = this.#adat[key];
        txt += `<td class=adat>${element}</td>`;
      }
    }
    if (this.#boolean == true) {
      txt += `<td><span class="kesz${this.#index}">✔️</span> <span class="megse${this.#index}">❌</span><span class="torol">🗑</span></td>`;
    }
    if (this.#boolean == false) {
      txt += `<td><span class="kivalaszt">🖐️</span></td>`;
    }
    txt += "</tr>";

    this.tablaElem.append(txt);
  }


  #esemenyTrigger(esemenyNev) {
    if(this.#boolean == true){
      const esemenyem = new CustomEvent(esemenyNev, { detail: this.#adat.id });
      window.dispatchEvent(esemenyem);
    }
    if(this.#boolean == false){
      const esemenyem = new CustomEvent(esemenyNev, { detail: this.#adat });
      window.dispatchEvent(esemenyem);
    }
  }

  #feher() {
    this.sorElem.css("background-color", "white");
    this.megseElem.css("display", "none");
    this.keszElem.css("display", "inline");

  }

  #zold() {
    this.sorElem.css("background-color", "lightgreen");
    this.megseElem.css("display", "inline");
    this.keszElem.css("display", "none");
  }
}
export default MegjelenitSor;