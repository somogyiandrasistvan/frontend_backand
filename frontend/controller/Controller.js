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
  }

  megjelenit(list, leiro) {
    new Megjelenit(list, $(".lista"), leiro, 0);
    new Megjelenit(list, $(".megjelenit"), leiro, 1);
    this.urlapView = new UrlapView($(".ujadat"), leiro, true);
  }

  get(){
    this.dataService.getAxiosData(
      "http://localhost:8000/api/tasks",
      this.megjelenit,
      this.urlapModel.getLeiro()
    );
    this.dataService.getAxiosData(
      "http://localhost:8000/api/selects",
      this.kivalasztMegjelenit,
      this.urlapModel.getLeiro()
    );
  }

  post() {
    $(window).on("betesz", (event) => {
      this.dataService.postAxiosData(
        "http://localhost:8000/api/tasks",
        event.detail
      );
    });

    $(window).on("kivalaszt", (event) => {
      this.dataService.postAxiosData(
        "http://localhost:8000/api/selects",
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

    $(window).on("Ptorles", (event) => {
      console.log(event.detail);
      this.dataService.deleteAxiosData(
        "http://localhost:8000/api/selects",
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


  kivalasztMegjelenit(list, leiro){
    console.log(list)
    new Megjelenit(list, $(".kivalasztott"), leiro, 2)

  }
}
export default Controller;
