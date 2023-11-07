import { urlapLeiro } from "./urlapleiro.js"
class UrlapModel {
  #leiro = {};
  constructor() {
    this.#leiro = urlapLeiro;
  }

  /*
  getLeiro(){
    return {...this.#leiro};
  }
  */

  getLeiro() {
    return { ...this.#leiro };
  }

}
export default UrlapModel;