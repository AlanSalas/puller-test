import API from "api/config";
import jwtDecode from "jwt-decode";

export const willExpireToken = (token) => {
  const seconds = 60;
  const metaToken = jwtDecode(token);
  const { exp } = metaToken;
  const dateNow = (Date.now() + seconds) / 1000;
  return dateNow > exp;
};

export const activateUser = async (id) => {
  try {
    const response = await API.put(`activation/${id}`);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const sendEmailToActivate = async (id) => {
  try {
    const response = await API.post(`activation-email/${id}`);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const login = async (data) => {
  try {
    const response = await API.post("login", data);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const forgotPassword = async (email) => {
  try {
    const response = await API.post("forgot-password", { email });
    return response;
  } catch (err) {
    return err.response;
  }
};

export const updatePassword = async (id, password) => {
  try {
    const response = await API.put(`update-password/${id}`, { password });
    return response;
  } catch (err) {
    return err.response;
  }
};
