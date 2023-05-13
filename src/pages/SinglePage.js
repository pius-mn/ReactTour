import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import Banner from "../components/banner";
import Booking from "../components/Form";
import Faq from "../components/FaqComponent";

function SingleItem() {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // Fetch product data from API using id
    fetch(`http://127.0.0.1:5000/api/${id}`)
      .then((response) => {
        if (response.status === 404) {
          setIsError(true);
        } else {
          return response.json();
        }
      })
      .then((data) => setProductData(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (isError) {
    return <Navigate to="/items" />;
  }

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Banner thumbnail={productData['thumbnail']}/>
      <div style={{ position: "relative" }}>
        {/**/}
        {/**/}
        <section className="overflow-hidden pt-5">
          <section className="mb-10 text-center text-lg-start">
            <div className="px-4 py-5 px-md-5">
              <div className="row gx-lg-5 align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <h2 className="my-5 display-5 fw-bold ls-tight">
                    <span>The best offer</span> <br />
                    <span className="text-primary">for your business</span>
                  </h2>
                  <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                    quibusdam tempora at cupiditate quis eum maiores.
                  </p>
                </div>
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <Booking />
                </div>
              </div>
            </div>
          </section>
        </section>
        {/**/}
      </div>

      <div style={{ position: "relative" }}>
        {/**/}
        {/**/}
        <div
          className="row gx-lg-5 container-fluid pt-5"
          style={{ backgroundColor: "hsl(0, 1%, 96%)" }}
        >
          <section className="overflow-hidden  col-lg-8 mb-7 mb-lg-0">
          <Faq title="Frequently Asked Questions" data={productData['itinerary']} />
          </section>
          {/* card here */}
          <div className="col-lg-4 mb-5 mb-lg-0 card">
            <div style={{ position: "relative" }}>
              {/**/}
              {/**/}
              <section className="pt-5 card-body">
                <section className="mb-10">
                  <h5 className="fw-bold text-center mb-5">
                    <strong>Comments: 3</strong>
                  </h5>
                  {/* Comment */}
                  <div className="row mb-4">
                    <div className="col-2">
                      <img
                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(24).jpg"
                        className="img-fluid shadow-1-strong rounded-5"
                        alt=""
                        aria-controls="#picker-editor"
                      />
                    </div>
                    <div className="col-10">
                      <p className="mb-2">
                        <strong>Marta Dolores</strong>
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Distinctio est ab iure inventore dolorum consectetur?
                        Molestiae aperiam atque quasi consequatur aut?
                        Repellendus alias dolor ad nam, soluta distinctio quis
                        accusantium!
                      </p>
                    </div>
                  </div>
                  {/* Comment */}
                  <div className="row mb-4">
                    <div className="col-2">
                      <img
                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(25).jpg"
                        className="img-fluid shadow-1-strong rounded-5"
                        alt=""
                        aria-controls="#picker-editor"
                      />
                    </div>
                    <div className="col-10">
                      <p className="mb-2">
                        <strong>Valeria Groove</strong>
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Distinctio est ab iure inventore dolorum consectetur?
                        Molestiae aperiam atque quasi consequatur aut?
                        Repellendus alias dolor ad nam, soluta distinctio quis
                        accusantium!
                      </p>
                    </div>
                  </div>
                  {/* Comment */}
                  <div className="row mb-4">
                    <div className="col-2">
                      <img
                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg"
                        className="img-fluid shadow-1-strong rounded-5"
                        alt=""
                        aria-controls="#picker-editor"
                      />
                    </div>
                    <div className="col-10">
                      <p className="mb-2">
                        <strong>Antonia Velez</strong>
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Distinctio est ab iure inventore dolorum consectetur?
                        Molestiae aperiam atque quasi consequatur aut?
                        Repellendus alias dolor ad nam, soluta distinctio quis
                        accusantium!
                      </p>
                    </div>
                  </div>
                </section>
              </section>
              {/**/}
            </div>
          </div>
        </div>
        {/**/}
      </div>
    </div>
  );
}

export default SingleItem;
