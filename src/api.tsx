import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getAllProduct = async (
  // username: string,
  // password: string,
  callback?: (data: any) => void
) => {
  try {
    const response = await axios.get(`${baseUrl}/products`);

    if (response.status === 200) {
      if (typeof callback === "function") {
        callback(response.data);
      }

      return response.status;
    }
    console.log(response);
  } catch (error) {
    alert("fetch eror");
  }
};

export const getDetailProduct = async (
  id: string,
  callback?: (data: any) => void
) => {
  try {
    const response = await axios.get(`${baseUrl}/products/${id}`);

    if (response.status === 200) {
      if (typeof callback === "function") {
        callback(response.data);
      }

      return response;
    }
    console.log(response, "data detail product di api");
  } catch (error) {
    alert("fetch eror");
  }
};

export const getCategory = async (
  // username: string,
  // password: string,
  callback?: (data: any) => void
) => {
  try {
    const response = await axios.get(`${baseUrl}/products/categories`);

    if (response.status === 200) {
      if (typeof callback === "function") {
        callback(response.data);
      }

      return response.status;
    }
    console.log(response);
  } catch (error) {
    alert("fetch eror");
  }
};

export const getInCategory = async (
  category: string,
  callback?: (data: any) => void
) => {
  try {
    const response = await axios.get(
      `${baseUrl}/products/category/${category}`
    );

    if (response.status === 200) {
      if (typeof callback === "function") {
        callback(response.data);
      }

      return response;
    }
  } catch (error) {
    alert("fetch eror");
  }
};
