import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetCategory } from "../../hooks/hooks";
import SearchProduct from "../search/searchProduct";
import DashboardPage from "../../pages/dashboardpage/dashboardPage";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const submitHandler = (id) => {
    console.log(id);
    navigate("/productsByCat", { state: { id } });
  };
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);
  const { isLoading, data } = useGetCategory();
  if (isLoading) {
    return <div>Loading</div>;
  }
  console.log(data.data.data);

  return (
    <div className="main" style={{ minHeight: "80vh" }}>
      <SearchProduct changeHandler={setSearch} product={data.data.data}/>
     <DashboardPage getData={data.data.data} search={search} submitHandler={submitHandler}/>
    </div>
  );
};

export default Dashboard;
