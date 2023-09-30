import React from "react";
import "./pagenotfound.css";
const PageNotFound = () => {
  return (
    <div class="containers" style={{ minHeight: "80vh" , minWidth:"100%"}}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>
        Return to the <a href="/">homepage</a>.
      </p>
    </div>
  );
};

export default PageNotFound;
