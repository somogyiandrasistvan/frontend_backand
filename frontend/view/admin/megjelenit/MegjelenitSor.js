import UrlapView from "../urlap/UrlapView.js";

class MegjelenitSor {
    #adat = {};
    #index;
    constructor(adat, szuloElem, index, leiro) {
      this.#adat = adat;
      this.#index = index;
      this.tablaElem = szuloElem;
  
      this.#sor();
      this.sorElem = this.tablaElem.children("tr:last-child");
      this.keszElem = this.sorElem.children("td").children(".kesz"+this.#index);
      this.torolElem = this.sorElem.children("td").children(".torol");
      this.megseElem = this.sorElem.children("td").children(".megse"+this.#index);
      if (this.#adat.kesz) {
        this.sorElem.css("background-color", "lightgreen");
        this.megseElem.css("display", "inline");
        this.keszElem.css("display", "none");
      } else {
        this.sorElem.css("background-color", "white");
        this.megseElem.css("display", "none");
        this.keszElem.css("display", "inline");
      }
      this.keszElem.on("click", () => {
        this.#esemenyTrigger("kesz");
        this.sorElem.css("background-color", "lightgreen");
        this.megseElem.css("display", "inline");
        this.keszElem.css("display", "none");
        this.sorElem.append("<div class=szerk"+this.#index+">");
        this.urlapView = new UrlapView($(".szerk"+this.#index), leiro, false);
        this.#esemenyTrigger("id")
      });
      this.megseElem.on("click", () => {
        this.#esemenyTrigger("kesz");
        this.sorElem.css("background-color", "white");
        this.megseElem.css("display", "none");
        this.keszElem.css("display", "inline");
        $(".szerk"+this.#index).remove();
      });
      this.torolElem.on("click", () => {
        this.sorElem.remove();
        this.#esemenyTrigger("torles");
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
      txt += `<td><span class="kesz${this.#index}">✔️</span> <span class="megse${this.#index}">❌</span><span class="torol">🗑</span></td>`;
      txt += "</tr>";
  
      this.tablaElem.append(txt);
    }


    #esemenyTrigger(esemenyNev) {
      const esemenyem = new CustomEvent(esemenyNev, { detail: this.#adat.id });
      window.dispatchEvent(esemenyem);
    }
  }
  export default MegjelenitSor;