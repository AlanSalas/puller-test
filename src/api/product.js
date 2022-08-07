import API from "api/config";

export const getProducts = async () => {
  try {
    const response = await API.get("products");
    return response;
  } catch (err) {
    return err.response;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await API.get(`product/${id}`);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const createProduct = async (image, data) => {
  try {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("category", data.category);

    // if (image) {
    //   formData.append("image", image.file, image.file.name);
    // }

    const response = await API.post("product", formData);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const updateProduct = async (image, data) => {
  try {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("category", data.category);
    // if (typeof image === "object") {
    //   formData.append("image", image.file, image.file.name);
    // }

    const response = await API.put(`product/${data.key}`, formData);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await API.delete(`product/${id}`);
    return response;
  } catch (err) {
    return err.response;
  }
};
