import DataService from "../model/DataService.js";
import Megjelenit from "../view/megjelenit/Megjelenit.js";
import UrlapView from "../view/urlap/UrlapView.js";
import UrlapModel from "../model/UrlapModel.js";

class Controller {
  #adat;
  constructor() {
    this.dataService = new DataService();
    this.urlapModel = new UrlapModel();
    this.dataService.getAxiosData(
      "http://localhost:8000/api/tasks",
      this.megjelenit,
      this.urlapModel.getLeiro()
    );

    $(window).on("betesz", (event) => {
      this.dataService.postAxiosData(
        "http://localhost:8000/api/tasks",
        event.detail
      );
    });

    $(window).on("torles", (event) => {
      console.log(event.detail);
      this.dataService.deleteAxiosData(
        "http://localhost:8000/api/tasks",
        event.detail
      );
    });
  }

  megjelenit(list, leiro) {
    new Megjelenit(list, $(".lista"), leiro);
    this.urlapView = new UrlapView($(".ujadat"), leiro);
  }
}
export default Controller;
