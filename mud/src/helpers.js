import axios from 'axios';

const URL = `https://multi-user-dungeon-lambda.herokuapp.com/`
const KEY = 'mud-token';

export const setToken = payload => {
  try {
    const token = JSON.stringify(payload);
    localStorage.setItem(KEY, token);
  } catch {
    return undefined;
  }
};

export const getToken = () => {
  try {
    const token = localStorage.getItem(KEY);
    if (token === null) {
      return undefined;
    }
    return JSON.parse(token);
  } catch {
    return undefined;
  }
};

export const clearLocalStorage = () => {
  localStorage.removeItem(KEY);
  window.location.href = '/';
};

export const axiosWithAuth = () => {
  const token = getToken();
  return axios.create({
    headers: {
      Authorization: `Token ${token.key}`,
    },
    baseURL: URL,
  });
};