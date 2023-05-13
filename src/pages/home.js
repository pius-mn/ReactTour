// Images
import React, { useState, useEffect } from "react";
import Products from "../components/ProductCards";
import Banner from "../components/banner";
import Booking from "../components/Form";
import StatComponent from "../components/Stats";
import Slider from "../components/carousel";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  const carouselData = data.slice(0, 3);
  const recommendedData = data.slice(3, 7);
  const productData = data.slice(7, 10);

  return (
    <div>
      <Slider data={carouselData} />

      <div style={{ position: "relative" }}>
        <section className="overflow-hidden pt-5">
          <section className="mb-10 text-center text-lg-start">
            <div
              className="px-4 py-5 px-md-5"
              style={{ backgroundColor: "hsl(0, 0%, 96%)" }}
            >
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
      </div>

      <div style={{ position: "relative" }}>
        <section className="container-fluid pt-5">
          <section className="mb-10 text-center text-lg-start">
            <h2 className="fw-bold mb-5 text-center" data-aos="fade-up">
              Top Destinations
            </h2>
            <div className="row gx-lg-5">
              <Products data={productData} type="item" />
            </div>
          </section>
        </section>
      </div>
      <div style={{ position: "relative" }}>
        <section className="container-fluid pt-5">
          <section className="mb-10 text-center text-lg-start">
            <h2 className="fw-bold mb-5 text-center" data-aos="fade-up">
              Recommended Destinations
            </h2>

            <Products data={recommendedData} type="item" />
          </section>
        </section>
      </div>

      <div style={{ position: "relative" }}>
        <section className="container pt-5">
          <section className="mb-10">
            <h2 className="fw-bold mb-5 text-center">Why is safari great?</h2>
            <div className="row gx-lg-5 mb-5 align-items-center">
              <div className="col-md-6 mb-4 mb-md-0">
                <img
                  src="https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw5NjI0M3wwfDF8c2VhcmNofDZ8fGxpb258ZW58MHx8fHwxNjQ1NjA2NjIz&ixlib=rb-1.2.1&q=80&w=1080"
                  className="w-100 shadow-4-strong rounded-4 mb-4"
                  alt=""
                  aria-controls="#picker-editor"
                />
              </div>
              <div className="col-md-6 mb-4 mb-md-0">
                <h3 className="fw-bold">Adventure</h3>
                <div className="mb-2 text-danger small">
                  <i
                    className="fas fa-users me-2"
                    aria-controls="#picker-editor"
                  />
                  <span>People</span>
                </div>
                <p className="text-muted">
                  Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                  placerat vulputate. Ut vulputate est non quam dignissim
                  elementum. Donec a ullamcorper diam.
                </p>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  quae nulla saepe rerum aspernatur odio amet perferendis
                  tempora mollitia? Ratione unde magni omnis quaerat blanditiis
                  cumque dolore placeat rem dignissimos?
                </p>
                <a
                  className="btn btn-primary"
                  href="#!"
                  role="button"
                  aria-controls="#picker-editor"
                >
                  Read more
                </a>
              </div>
            </div>
            <div className="row gx-lg-5 mb-5 flex-lg-row-reverse align-items-center">
              <div className="col-md-6 mb-4 mb-md-0">
                <img
                  src="https://images.unsplash.com/photo-1516426122078-c23e76319801?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw5NjI0M3wwfDF8c2VhcmNofDF8fHNhZmFyaXxlbnwwfHx8fDE2NDU2MDY0NTc&ixlib=rb-1.2.1&q=80&w=1080"
                  className="w-100 shadow-4-strong rounded-4 mb-4"
                  alt=""
                  aria-controls="#picker-editor"
                />
              </div>
              <div className="col-md-6 mb-4 mb-md-0">
                <h3 className="fw-bold">You will experience an adventure</h3>
                <div className="mb-2 text-primary small">
                  <i
                    className="fas fa-users me-2"
                    aria-controls="#picker-editor"
                  />
                  <span>Adventure</span>
                </div>
                <p className="text-muted">
                  Duis sagittis, turpis in ullamcorper venenatis, ligula nibh
                  porta dui, sit amet rutrum enim massa in ante. Curabitur in
                  justo at lorem laoreet ultricies. Nunc ligula felis, sagittis
                  eget nisi vitae, sodales vestibulum purus. Vestibulum nibh
                  ipsum, rhoncus vel sagittis nec, placerat vel justo. Duis
                  faucibus sapien eget tortor finibus, a eleifend lectus dictum.
                  Cras tempor convallis magna id rhoncus. Suspendisse potenti.
                  Nam mattis faucibus imperdiet. Proin tempor lorem at neque
                  tempus aliquet. Phasellus at ex volutpat, varius arcu id,
                  aliquam lectus. Vestibulum mattis felis quis ex pharetra
                  luctus. Etiam luctus sagittis massa, sed iaculis est vehicula
                  ut.
                </p>
                <a
                  className="btn btn-primary"
                  href="#!"
                  role="button"
                  aria-controls="#picker-editor"
                >
                  Read more
                </a>
              </div>
            </div>
            <div className="row gx-lg-5 mb-5 align-items-center">
              <div className="col-md-6 mb-4 mb-md-0">
                <img
                  src="https://images.unsplash.com/photo-1553775927-a071d5a6a39a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw5NjI0M3wwfDF8c2VhcmNofDR8fGFmcmljYXxlbnwwfHx8fDE2NDU2MDY2NjU&ixlib=rb-1.2.1&q=80&w=1080"
                  className="w-100 shadow-4-strong rounded-4 mb-4"
                  alt=""
                  aria-controls="#picker-editor"
                />
              </div>
              <div className="col-md-6 mb-4 mb-md-0">
                <h3 className="fw-bold">You will meet the locals</h3>
                <div className="mb-2 text-warning small">
                  <i
                    className="fas fa-users me-2"
                    aria-controls="#picker-editor"
                  />
                  <span>People</span>
                </div>
                <p className="text-muted">
                  Sed sollicitudin purus sed nulla dignissim ullamcorper. Aenean
                  tincidunt vulputate libero, nec imperdiet sapien pulvinar id.
                  Nullam scelerisque odio vel lacus faucibus, tincidunt feugiat
                  augue ornare. Proin ac dui vel lectus eleifend vestibulum et
                  lobortis risus. Nullam in commodo sapien. Curabitur ut erat
                  congue sem finibus eleifend egestas eu metus. Sed ut dolor id
                  magna rutrum ultrices ut eget libero. Duis vel porttitor odio.
                  Ut pulvinar sed turpis ornare tincidunt. Donec luctus, mi
                  euismod dignissim malesuada, lacus lorem commodo leo,
                  tristique blandit ante mi id metus. Integer et vehicula leo,
                  vitae interdum lectus. Praesent nulla purus, commodo at
                  euismod nec, blandit ultrices erat. Aliquam eros ipsum,
                  interdum et mattis vitae, faucibus vitae justo. Nulla
                  condimentum hendrerit leo, in feugiat ipsum condimentum ac.
                  Maecenas sed blandit dolor.
                </p>
                <a
                  className="btn btn-primary"
                  href="#!"
                  role="button"
                  aria-controls="#picker-editor"
                >
                  Read more
                </a>
              </div>
            </div>
          </section>
        </section>
      </div>
      <StatComponent />
      <div style={{ position: "relative" }}>
        <section className="container pt-5">
          <section className="mb-10 text-center">
            <h2 className="fw-bold mb-5">Photographer</h2>
            {/* Carousel wrapper */}
            <div
              id="carouselExampleControls"
              className="carousel slide carousel-dark carousel-fade"
              data-mdb-ride="carousel"
            >
              <div className="carousel-inner px-5 px-md-0">
                <div className="carousel-item active">
                  <img
                    className="rounded-circle shadow-1-strong mb-4"
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                    alt="avatar"
                    style={{ width: "150px", height: "150px" }}
                    aria-controls="#picker-editor"
                  />
                  <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                      <h5 className="mb-3">Maria Kate</h5>
                      <p>Photographer</p>
                      <p className="text-muted">
                        <i className="fas fa-quote-left pe-2" />
                        <span>
                          In ac turpis justo. Vivamus auctor quam vitae odio
                          feugiat pulvinar. Sed semper ligula sed lorem
                          tincidunt dignissim. Nam sed cursus lectus. Proin non
                          rutrum magna. Proin gravida, justo et imperdiet
                          tristique, turpis nisi viverra est, nec posuere ex
                          arcu sit amet erat. Sed a dictum sem. Duis pretium
                          condimentum nulla.
                        </span>
                      </p>
                    </div>
                  </div>
                  <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                    <li>
                      <i className="fas fa-star fa-sm" />
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm" />
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm" />
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm" />
                    </li>
                    <li>
                      <i className="far fa-star fa-sm" />
                    </li>
                  </ul>
                </div>
                <div className="carousel-item">
                  <img
                    className="rounded-circle shadow-1-strong mb-4"
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg"
                    alt="avatar"
                    style={{ width: "150px", height: "150px" }}
                    aria-controls="#picker-editor"
                  />
                  <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                      <h5 className="mb-3">John Doe</h5>
                      <p>Web Developer</p>
                      <p className="text-muted">
                        <i className="fas fa-quote-left pe-2" />
                        <span>
                          Maecenas auctor, quam eget tincidunt pretium, felis
                          diam semper turpis, sed scelerisque diam libero
                          facilisis libero. Quisque vitae semper metus. Aliquam
                          eu dui aliquam, faucibus metus quis, elementum nunc. .
                        </span>
                      </p>
                    </div>
                  </div>
                  <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                    <li>
                      <i className="fas fa-star fa-sm" />
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm" />
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm" />
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm" />
                    </li>
                    <li>
                      <i className="far fa-star fa-sm" />
                    </li>
                  </ul>
                </div>
                <div className="carousel-item">
                  <img
                    className="rounded-circle shadow-1-strong mb-4"
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                    alt="avatar"
                    style={{ width: "150px", height: "150px" }}
                    aria-controls="#picker-editor"
                  />
                  <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                      <h5 className="mb-3">Anna Deynah</h5>
                      <p>UX Designer</p>
                      <p className="text-muted">
                        <i className="fas fa-quote-left pe-2" />
                        <span>
                          Duis sagittis, turpis in ullamcorper venenatis, ligula
                          nibh porta dui, sit amet rutrum enim massa in ante.
                          Curabitur in justo at lorem laoreet ultricies. Nunc
                          ligula felis, sagittis eget nisi vitae.
                        </span>
                      </p>
                    </div>
                  </div>
                  <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                    <li>
                      <i className="fas fa-star fa-sm" />
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm" />
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm" />
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm" />
                    </li>
                    <li>
                      <i className="far fa-star fa-sm" />
                    </li>
                  </ul>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-mdb-target="#carouselExampleControls"
                data-mdb-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-mdb-target="#carouselExampleControls"
                data-mdb-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            {/* Carousel wrapper */}
          </section>
        </section>
      </div>
    </div>
  );
}

export default Home;
