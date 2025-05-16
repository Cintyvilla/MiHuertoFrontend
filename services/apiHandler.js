import axios from "axios";

const backendApi = axios.create({
  baseURL: "https://mihuertobackend.onrender.com",
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
