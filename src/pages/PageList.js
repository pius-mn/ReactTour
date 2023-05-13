// Images
import React, { useState, useEffect } from "react";
import Banner from "../components/banner";
import Products from "../components/ProductCards";


function Items() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);
  

  
  const productData = data.slice(7, 10);
  const firstItemId =  data[0];


  
  return (
    
    <div>
     {/* <Banner thumbnail={firstItemId}/> */}
      
     
     <div  style={{ position: "relative" }}>
        <section  className="container-fluid pt-5" >
          <section className="mb-10 text-center text-lg-start">
            <h2 className="fw-bold mb-5 text-center" data-aos="fade-up">
             Top Tours
            </h2>
            <div className="row gx-lg-5">
            <Products data={productData} />

            </div>
          </section>
        </section>
      </div>
     
      
    </div>
  );
}

export default Items;
