import axios from "axios";

const getWarehouseById = async (id) => {
  const BASE_URL = process.env.REACT_APP_API_URL;
  const API_PORT = process.env.REACT_APP_API_PORT;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_URL = `${BASE_URL}:${API_PORT}/warehouses/${id}${API_KEY ? `?api_key=${API_KEY}`  : ""}`;

  return axios
    .get(API_URL)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.error(err));
};

export default getWarehouseById;
