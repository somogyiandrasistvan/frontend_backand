class DataService {
  getAxiosData(url, callback, leiro) {
    axios
      .get(url)
      .then(function (response) {
        //handle success
        console.log("response", response);
        console.log("data", response.data);
        console.log("státusz", response.request.status);
        console.log("text", response.statusText);
        callback(response.data, leiro);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
        console.log("finally");
      });
  }

  postAxiosData(url, data) {
    axios
      .post(url, data)
      .then((response) => {
        console.log("RESP", response);
      })
      .catch((error) => {
        console.log("hiba", error);
      });
  }

  deleteAxiosData(url, id){
    console.log(`${url}/${id}`);
    axios
      .delete(`${url}/${id}`)
      .then((response) => {
        console.log("RESP", response);
      })
      .catch((error) => {
        console.log("hiba", error);
      })
  }
}

export default DataService;
