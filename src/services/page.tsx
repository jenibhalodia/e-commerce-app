import axios from "axios";

const auth = axios.create({
  baseURL: "http://192.168.0.88:3001/api",
});
const client = axios.create({
  baseURL: "http://192.168.0.88:3002/api",
});

export async function registrationAPI(
  firstName: string,
  lastName: string,
  email: string,
  password: string
) {
  try {
    const response = await auth.post("/users/register", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function loginUser(email: string, password: string) {
  try {
    const response = await auth.post("/users/login", {
      email: email,
      password: password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getProduct() {
  try {
    const response = await client.get("/products", {
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("loginToken"),
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getProductId(_id: string) {
  try {
    const response = await client.get(`/products/${_id}`, {
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("loginToken"),
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getCategoryTable() {
  try {
    const response = await client.get("/category", {
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("loginToken"),
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function addCategory(
  categoryName: string,
  description: string,
  code: string,
  status: string
) {
  try {
    const response = await client.post(
      "/category/create-category",
      {
        categoryName: categoryName,
        description: description,
        code: code,
        status: status,
      },
      {
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("loginToken"),
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteCategoryTable(ids: string[]) {
  try {
    const response = await client.post(
      `/category/delete-category`,
      {
        ids: ids,
      },
      {
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("loginToken"),
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function EditCategoryTable(
  categoryName: string,
  description: string,
  code: string,
  status: string,
  id: string
) {
  try {
    const response = await client.put(
      `/category/update-category/${id}`,
      {
        categoryName: categoryName,
        description: description,
        code: code,
        status: status,
      },
      {
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("loginToken"),
        },
      }
    );
    console.log(response)
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
