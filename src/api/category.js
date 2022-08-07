import API from "api/config";

export const getCategories = async () => {
  try {
    const response = await API.get("categories");
    return response;
  } catch (err) {
    return err.response;
  }
};

export const createCategory = async (data) => {
  try {
    const response = await API.post("category", data);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const updateCategory = async (data) => {
  try {
    const response = await API.put(`category/${data.key}`, data);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const deleteCategory = async (id) => {
  try {
    const response = await API.delete(`category/${id}`);
    return response;
  } catch (err) {
    return err.response;
  }
};
