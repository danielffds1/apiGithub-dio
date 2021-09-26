import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/",
});
// Toda vez que chamarmos o api ela terá o caminho da url acima
export default api;
