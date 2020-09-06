import axios from "axios";
import store from "../redux";
export const get = (api, isAuthorized = true, params = {}, headers = {}) => {
  return new Promise((resolve, reject) => {
    const allHeaders = {
      "Content-type": "application/json",
      ...headers,
    };
    if (isAuthorized) {
      allHeaders.Authorization = store.getState().user.token;
    }
    let url = api + "?";
    for (let param in params) {
      url += `${param}=${params[param]}&`;
    }
    url = url.substr(0, url.length - 1);
    const options = {
      method: "GET",
      headers: allHeaders,
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((res) => {
        if (res.code == 1) {
          resolve(res.data);
        } else {
          reject(res.message);
        }
      })
      .catch((err) => reject(err));
  });
};

export const post = (api, isAuthorized = true, body = {}, headers = {}) => {
  const allHeaders = {
    "Content-type": "application/json",

    ...headers,
  };
  if (isAuthorized) {
    allHeaders.Authorization = store.getState().user.token;
  }
  return new Promise((resolve, reject) => {
    const options = {
      method: "POST",
      headers: allHeaders,
      body: JSON.stringify(body),
    };
    fetch(api, options)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.code == 1) {
          resolve(res.data);
        } else {
          reject(res.message);
        }
      })
      .catch((err) => reject(err));
  });
};
