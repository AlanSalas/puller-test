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

export const updateUser = async (image, data) => {
  try {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("lastName", data.lastName);
    // if (image && typeof avatar === "object") {
    //   formData.append("image", avatar.file, avatar.file.name);
    // }
    const response = await API.put(`user/${data.id}`, formData);
    return response;
  } catch (err) {
    return err.response;
  }
};
