import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/challenge-20c99/us-central1/api", //The API (cloud function) Endpoint
});

export default instance;
