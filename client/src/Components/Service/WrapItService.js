import axios from "axios";
export default class WrapItService {
  constructor() {
    this.base_url = "http://localhost:6200/";
  }

  all(callback) {
    axios
      .get(this.base_url)
      .then((res) => {
        console.log(res);
        callback(res.data);
      })
      .catch((err) => {
        console.log(err);
        callback(null);
      });
  }

  get(id, callback) {
    axios
      .get(`${this.base_url}${id}`)
      .then((res) => {
        callback(res.data);
      })
      .catch((err) => {
        console.log(err);
        callback(null);
      });
  }

  post(targetUrl, callback) {
    axios
      .post(`${this.base_url}`, { targetUrl })
      .then((res) => {
        callback(res);
      })
      .catch((err) => {
        console.log(err);
        callback();
      });
  }
}
