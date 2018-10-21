import axios from "axios";
import store from "../store/index";
const env = process.env.NODE_ENV;
let baseURL = env == "development" ? "/api" : "";
// const qs = require('querystring')
// export default class Axios {
//                  static instance = axios.create({
//                    baseURL,
//                    timeout: 15000,
//                    headers: {
//                      'Content-Type': 'multipart/form-data'
//                    }
//                  });

//                  static get(url, data, config) {
//                    return new Promise((resolve, reject) => {
//                      this.instance
//                        .get(url, { params: data }, config)
//                        .then(res => {
//                          resolve(res.data);
//                        })
//                        .catch(err => {
//                          reject(err);
//                        });
//                    });
//                  }

//                  static fetch(url, data, config, method) {
//                    return new Promise((resolve, reject) => {
//                      let token = localStorage.getItem("token");
//                      // let config = {};
//                      if (token) {
//                        config = { headers: { token: token } };
//                      }
//                      instance[method](url, data, config)
//                        .then(res => {
//                          resolve(res.data);
//                        })
//                        .catch(err => {
//                          reject(err);
//                        });
//                    });
//                  }

//                  static post(url, data, config) {
//                    return fetch(url, data, config, "post");
//                  }
//                }
const instance = axios.create({
  baseURL,
  timeout: 15000
});

// const qs = require("querystring");
// instance.interceptors.request.use(
//   function(config) {
//     if (window.sessionStorage.vuex) {
//       let token = JSON.parse(window.sessionStorage.vuex).token
//       config.headers.token = token
//     }
//     if (config.method == "post") {
//       config.data = qs.stringify(config.data);
//       config.headers["Content-Type"] = "application/x-www-form-urlencoded";
//     }
//     return config;
//   },
//   function(error) {
//     return Promise.reject(error);
//   }
// );

const xhr = {
  get(url, data, config) {
    return new Promise((resolve, reject) => {
      let token = store.state.token;
      // console.log("get", token);
      if (token) {
        config = { headers: { token: token } };
      }
      // console.log('config',config);
      instance.get(url, { params: data }, config).then(res => {
        resolve(res.data);
      });
    });
  },
  post(url, data, config) {
    return new Promise((resolve, reject) => {
      let token = store.state.token;
      //                      // let config = {};
      // console.log("token", token);
      if (token) {
        config = { headers: { token: token } };
      }
      instance
        .post(url, data, config)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};
export const $axios = xhr;
