import axios from "axios";

export const api = axios.create({
  baseURL: 'https://notes-api-ml1k.onrender.com'
});