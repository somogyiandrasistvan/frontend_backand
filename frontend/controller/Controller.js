import DataService from "../model/DataService.js";
import Megjelenit from "../view/admin/megjelenit/Megjelenit.js";
import UrlapView from "../view/admin/urlap/UrlapView.js";
import UrlapModel from "../model/UrlapModel.js";

class Controller {
  #id;

  constructor() {
    this.dataService = new DataService();
    this.urlapModel = new UrlapModel();

    this.get();
    this.post();
    this.delete();
    this.put();
    this.kivalaszt();
  }

  megjelenit(list, leiro) {
    new Megjelenit(list, $(".lista"), leiro, true);
    new Megjelenit(list, $(".megjelenit"), leiro, false);
    this.urlapView = new UrlapView($(".ujadat"), leiro, true);
  }

  get(){
    this.dataService.getAxiosData(
      "http://localhost:8000/api/tasks",
      this.megjelenit,
      this.urlapModel.getLeiro()
    );
  }

  post() {
    $(window).on("betesz", (event) => {
      console.log("csinál")
      this.dataService.postAxiosData(
        "http://localhost:8000/api/tasks",
        event.detail
      );
    });
  }

  delete() {
    $(window).on("torles", (event) => {
      console.log(event.detail);
      this.dataService.deleteAxiosData(
        "http://localhost:8000/api/tasks",
        event.detail
      );
    });
  }

  put(){
    $(window).on("id", (event) => {
      console.log(event.detail);
      this.#id = event.detail;
    });
    $(window).on("szerkeszt", (event) => {
      console.log(event.detail);
      console.log(this.#id)
      this.dataService.updateAxiosData("http://localhost:8000/api/tasks", this.#id, event.detail);
    });
  }

  kivalaszt(){
    $(window).on("kivalaszt", (event) => {
      console.log(event.detail);
    });
  }
}
export default Controller;
