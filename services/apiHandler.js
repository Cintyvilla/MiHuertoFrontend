import axios from "axios";

const backendApi = axios.create({
  baseURL: "http://localhost:3000",
  responseType: "stream"
});


backendApi.interceptors.response.use(
  (response) => {
    if(response.headers["content-type"].includes("application/json")){
      response.data = JSON.parse(response.data)
    }
    return response
  },
)

export default backendApi;
