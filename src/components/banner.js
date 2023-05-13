// Images

function Banner({thumbnail}) {
 
  return (
    <div>
      <div style={{ position: "relative", zIndex: 1 }}>
        {/**/}
        {/**/}
        <section className="overflow-hidden pt-0">
          <section className="mb-10 overflow-hidden">
            {/* Background image */}
            <div
              className="px-4 py-5 px-md-5 text-center bg-image"
              style={{
                backgroundImage: `url('http://127.0.0.1:8000/media/${thumbnail}')`,
                height: "500px",
                backgroundSize: "cover",
                backgroundPosition: "50% 50%",
              }}
              aria-controls="#picker-editor"
            >
              <div
                className="mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
              >
                <div className="container h-100">
                  <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-10">
                      <div className="text-white pb-5">
                        <h1 className="my-md-5 mb-4 px-5 display-3 fw-bold ls-tight">
                          <span>Go with us</span>
                          <br />
                          <span>on safari&nbsp;</span>
                        </h1>
                        <a
                          className="btn btn-outline-light btn-lg btn-rounded py-3 px-5 mb-2 mb-md-0 me-md-2"
                          href="#!"
                          role="button"
                          aria-controls="#picker-editor"
                        >
                          Sign up
                        </a>
                        <a
                          className="btn btn-link btn-lg btn-rounded py-3 px-5 mb-2 mb-md-0 text-white"
                          style={{ backgroundColor: "transparent" }}
                          href="#!"
                          role="button"
                          aria-controls="#picker-editor"
                        >
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                height: "30px",
                marginTop: "-30px",
                transform: "scale(2)",
                transformOrigin: "top center",
                color: "#fff",
              }}
            >
              <svg viewBox="0 0 2880 48" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M 0 48 L 1437.5 48 L 2880 48 L 2880 0 L 2160 0 C 1453.324 60.118 726.013 4.51 720 0 L 0 0 L 0 48 Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            {/* Background image */}
          </section>
        </section>
        {/**/}
      </div>
    </div>
  );
}

export default Banner;
