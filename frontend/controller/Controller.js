import DataService from "../model/DataService.js";
import Megjelenit from "../view/megjelenit/Megjelenit.js";
import UrlapView from "../view/urlap/UrlapView.js";
import UrlapModel from "../model/UrlapModel.js";

class Controller {
  constructor() {
    this.dataService = new DataService();
    this.urlapModel = new UrlapModel();
    //new UrlapView($(".ujadat"), this.urlapModel.getLeiro());
    this.dataService.getAxiosData(
      "http://localhost:8000/api/tasks",
      this.megjelenit, this.urlapModel.getLeiro()
    );
    this.dataService.postAxiosData("http://localhost:8000/api/tasks", {
      nev: "Jenő",
      szul: 1666,
    });
  }

  megjelenit(list, leiro) {
    new UrlapView($(".ujadat"), leiro);
    new Megjelenit(list, $(".lista"), leiro);
  }
}
export default Controller;
