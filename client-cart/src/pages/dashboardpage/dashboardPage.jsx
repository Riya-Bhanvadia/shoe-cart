import React from "react";

const DashboardPage = (props) => {
  const { getData, search, submitHandler } = props;
  console.log(getData);
  return (
    <>
      {getData
        .filter((i) => (search === "" ? i : i.category.includes(search)))
        .map((item) => {
          return (
            <section
              
              key={item._id}
              onClick={() => submitHandler(item._id)}
            >
              <div className="blur-text" id="container">
              <img className="image" src={item.imgUrl} alt="Product 1" />
              <div className="content"><h2>{item.category}</h2></div></div>
            </section>
          );
        })}
    </>
  );
};

export default DashboardPage;
