import { store } from "../redux";
export const get = (api, isAuthorized = true, params = {}, headers = {}) => {
  return new Promise((resolve, reject) => {
    const allHeaders = {
      "Content-type": "application/json",
      ...headers,
    };
    if (isAuthorized) {
      allHeaders.Authorization = `bearer ${store.getState().user.token}`;
    }
    let url = api + "?";
    for (let param in params) {
      url += `${param}=${params[param]}&`;
    }
    url = url.substr(0, url.length - 1);
    const options = {
      method: "GET",
      headers: allHeaders,
      credentials: "include",
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((res) => {
        if (res.code == 1) {
          resolve([res.data, res.pagination]);
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
    allHeaders.Authorization = `bearer ${store.getState().user.token}`;
  }
  return new Promise((resolve, reject) => {
    const options = {
      method: "POST",
      headers: allHeaders,
      credentials: "include",
      body: JSON.stringify(body),
    };
    fetch(api, options)
      .then((res) => res.json())
      .then((res) => {
        if (res.code == 1) {
          resolve([res.data, res.pagination]);
        } else {
          reject(res.message);
        }
      })
      .catch((err) => reject(err));
  });
};

export const deleteCall = (
  api,
  isAuthorized = true,
  body = {},
  headers = {}
) => {
  const allHeaders = {
    "Content-type": "application/json",

    ...headers,
  };
  if (isAuthorized) {
    allHeaders.Authorization = `bearer ${store.getState().user.token}`;
  }
  return new Promise((resolve, reject) => {
    const options = {
      method: "DELETE",
      headers: allHeaders,
      credentials: "include",
      body: JSON.stringify(body),
    };
    fetch(api, options)
      .then((res) => res.json())
      .then((res) => {
        if (res.code == 1) {
          resolve([res.data, res.pagination]);
        } else {
          reject(res.message);
        }
      })
      .catch((err) => reject(err));
  });
};
