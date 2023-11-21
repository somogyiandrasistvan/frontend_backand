import DataService from "../model/DataService.js";
import Megjelenit from "../view/admin/megjelenit/Megjelenit.js";
import UrlapView from "../view/admin/urlap/UrlapView.js";
import UrlapModel from "../model/UrlapModel.js";
import PUrlapView from "../view/public/PUrlapView.js";

class Controller {
  #adat;

  constructor() {
    this.dataService = new DataService();
    this.urlapModel = new UrlapModel();

    this.get();
    this.post();
    this.delete();
  }

  megjelenit(list, leiro) {
    new PUrlapView($(".beker"), leiro);
    new Megjelenit(list, $(".lista"), leiro);
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
    $(window).on("szerkeszt", (event) => {
      console.log(event.detail);
    });
  }
}
export default Controller;
