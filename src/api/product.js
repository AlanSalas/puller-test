import API from "api/config";

export const getProducts = async (query, category) => {
  try {
    const response = await API.get(`products?search=${query}&category=${category}`);
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

export const createProduct = async (image, data, category) => {
  try {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("category", category);
    if (image !== null && typeof image === "object") {
      formData.append("image", image, image.name);
    }

    const response = await API.post("product", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response;
  } catch (err) {
    return err.response;
  }
};

export const updateProduct = async (image, data, category, id) => {
  try {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("category", category);
    if (image !== null && typeof image === "object") {
      formData.append("image", image, image.name);
    }

    const response = await API.put(`product/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
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
