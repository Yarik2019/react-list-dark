import axios from "axios";
// https://jsonplaceholder.typicode.com/
export const testApi = axios.create({
  baseURL: "https://yarik2019.github.io/conversion/",
});
