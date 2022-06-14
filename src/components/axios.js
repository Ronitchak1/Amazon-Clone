import axios from "axios";

const instance = axios.create({
  baseURL: "...", //The API (cloud function) Endpoint
});

export default instance;
