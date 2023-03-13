import axios from "axios";

export default axios.create({
  baseURL: "https://job4-u-api.vercel.app/",
  headers: {
    "Content-Type": "application/json",
  },
});
