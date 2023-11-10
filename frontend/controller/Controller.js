import DataService from "../model/DataService.js";
import Megjelenit from "../view/megjelenit/Megjelenit.js";
import UrlapView from "../view/urlap/UrlapView.js";
import UrlapModel from "../model/UrlapModel.js";

class Controller {
  constructor() {
    this.dataService = new DataService();
    this.urlapModel = new UrlapModel();
    this.dataService.getAxiosData(
      "http://localhost:8000/api/tasks",
      this.megjelenit,
      this.urlapModel.getLeiro()
    );

    $(window).on("click", (event) => {
      if (typeof event.detail !== "number") {
        this.dataService.postAxiosData(
          "http://localhost:8000/api/tasks",
          event.detail
        );
      }
    });
  }

  megjelenit(list, leiro) {
    new Megjelenit(list, $(".lista"), leiro);
    this.urlapView = new UrlapView($(".ujadat"), leiro);
  }
}
export default Controller;
