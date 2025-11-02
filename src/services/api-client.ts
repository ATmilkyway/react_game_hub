import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "a4aa322797804b44befc7ef427713122",
  },
});
