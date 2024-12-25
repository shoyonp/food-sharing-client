import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { UserSignOut } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log("error caught in interceptor", error);

        if (error.status === 401 || error.satus === 403) {
          UserSignOut()
            .then(() => {
              console.log("user logged out");
              navigate("/login");
            })
            .catch((error) => console.log(error));
        }
        return Promise.reject(error);
      }
    );
  }, [navigate, UserSignOut]);

  return axiosInstance;
};

export default useAxiosSecure;
