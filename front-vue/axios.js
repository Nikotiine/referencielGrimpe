import axios from "axios";
const accessToken = localStorage.getItem("accessToken");
let refreshToken = localStorage.getItem("refreshToken");
axios.defaults.baseURL = "http://localhost:3000/";
axios.defaults.headers.common["authorization"] = `Bearer ${accessToken}`;

axios.interceptors.response.use(
  (response) => {
    console.log("interceptor ok");
    return response;
  },
  async (error) => {
    console.log("erreur token");
    console.log(error);
    const originalRequest = error.config;
    if (
      error.config.url != "refreshToken" &&
      error.response.status === 401 &&
      originalRequest._retry !== true
    ) {
      console.log("erreur refresh");
      originalRequest._retry = true;
      if (refreshToken && refreshToken != "") {
        console.log("err2");
        axios.defaults.headers.common[
          "authorization"
        ] = `Bearer ${refreshToken}`;
        console.log("refresh token");
        await axios
          .post("refreshToken")
          .then((response) => {
            axios.defaults.headers.common[
              "authorization"
            ] = `Bearer ${response.data.accessToken}`;
            originalRequest.headers[
              "authorization"
            ] = `Bearer ${response.data.accessToken}`;
            console.log(response);
          })
          .catch((error) => {
            console.log(error.response.status);
            refreshToken = null;
          });
        return axios(originalRequest);
      }
    }
  }
);
