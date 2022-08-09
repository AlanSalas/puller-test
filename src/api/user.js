import API from "api/config";

export const register = async (data) => {
  try {
    const response = await API.post("register", data);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const getUserData = async (id) => {
  try {
    const response = await API.get(`user/${id}`);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const updateUser = async (image, data, id) => {
  try {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("lastName", data.lastName);
    if (image !== null && typeof image === "object") {
      formData.append("image", image, image.name);
    }

    const response = await API.put(`user/${id}`, formData);
    return response;
  } catch (err) {
    return err.response;
  }
};
