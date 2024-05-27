import axios, { AxiosInstance } from "axios";

export default class HttpService {
  public client: AxiosInstance;
  
  constructor() {
    this.client = axios.create({
      baseURL: "http://chucknorris.io",
    });
  }
}
