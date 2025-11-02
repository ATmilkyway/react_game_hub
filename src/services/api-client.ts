import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  params: {
    // the key has changed :)
    key: import.meta.env.VITE_API_KEY,
  },
});
