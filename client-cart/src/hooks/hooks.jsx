import axios from "axios";
import { useMutation, useQuery } from "react-query";

// const getRegisterData = () => {
//   return axios.get("http://localhost:8080/api/v1/auth/register");
// };

// export const useGetRegisterData = () => {
//   return useQuery("register", getRegisterData);
// };

export const registerData = (data) => {
  return axios.post("http://localhost:8080/register", data);
};

export const useRegisterData = () => {
  return useMutation(registerData);
};

const loginData = (data) => {
  return axios.post("http://localhost:8080/login", data);
};

export const useLoginData = () => {
  return useMutation(loginData);
};

const getCategory = () => {
  return axios.get("http://localhost:8080/getCategory");
};

export const useGetCategory = () => {
  return useQuery("Category", getCategory);
};

const getProducts = (data) => {
  // console.log(data);
  return axios.get(`http://localhost:8080/products/${data}`);
};

export const useGetProducts = (data) => {
  return useQuery("Product", () => getProducts(data));
};

const findRandProd = () => {
  return axios.get("http://localhost:8080/products");
};

export const useFindRandProd = () => {
  return useQuery("Products", findRandProd);
};

const updateCart = (data) => {
  console.log(data);
  return axios.post("http://localhost:8080/updateCart", data);
};
export const useUpdateCart = () => {
  return useMutation(updateCart);
};

const sendResetemail = (data) => {
  console.log(data);
  return axios.post("http://localhost:8080/sendmail", data);
};
export const useSendResetemail = () => {
  return useMutation(sendResetemail);
};

const addProduct = (data) => {
  return axios.post("http://localhost:8080/findCategoryAndAdd", data);
};
export const useAppProduct = () => {
  return useMutation(addProduct);
};

const addCategory = (data) => {
  return axios.post("http://localhost:8080/addCategory", data);
};
export const useAddCategory = () => {
  return useMutation(addCategory);
};
