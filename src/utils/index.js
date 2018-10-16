import axios from "axios";
const env = process.env.NODE_ENV;
let baseURL = env == "development" ? "/api" : "";
export default class Axios {
  static instance = axios.create({
    baseURL,
    timeout: 15000
  });
  static get(url, data, config) {
    return new Promise((resolve, reject) => {
      this.instance
        .get(
          url,
          {
            params: data
          },
          config
        )
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  static fetch(url, data, config, method) {
    return new Promise((resolve, reject) => {
      instance[method](url, data, config)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
  post(url, data, config) {
    return fetch(url, data, config, "post");
  }
}
