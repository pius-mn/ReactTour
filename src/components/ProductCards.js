import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Products(props) {
  const { data, type } = props;

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="row gx-lg-5">
      {data.map((item, index) => (
        <div key={index} className="col-lg-4 mb-4 mb-lg-0" data-aos="zoom-in">
          <div>
            <Link to={`/${type}/${item.id}`}>
              <div className="bg-image hover-overlay ripple shadow-1-strong rounded-4 mb-4" data-mdb-ripple-color="light">
                <img src={`http://127.0.0.1:8000/media/${item.thumbnail}`} alt="Thumbnail" className="w-100" loading="lazy" />
              </div>
              <h5 className="fw-bold">{item.title}</h5>
              <div className="mb-3 text-danger small">
                <i className="fas fa-fire me-2" />
                <span>{type === "item" ? "Photo" : "Blog"} {item.id}</span>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
