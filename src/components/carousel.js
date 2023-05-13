import React from 'react';

function Slider({ data }) {
  
  return (
    <>
      {/* Carousel wrapper */}
      <div id="introCarousel" className="carousel slide carousel-fade shadow-2-strong" data-mdb-ride="carousel">
        {/* Indicators */}
        <ol className="carousel-indicators">
          {data.map((item, index) => (
            <li key={index} data-mdb-target="#introCarousel" data-mdb-slide-to={index} className={index === 0 ? "active" : " "} />
          ))}
        </ol>
        {/* Inner */}
        <div className="carousel-inner">
          {data.map((item, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`} style={{backgroundImage: `url(http://127.0.0.1:8000/media/${item.thumbnail})`}}>
              <div className="mask" style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
                <div className="d-flex justify-content-center align-items-center h-100">
                  <div className="text-white text-center">
                    <h1 className="mb-3">{item.title}</h1>
                    <h5 className="mb-4">{item.subtitle}</h5>
                    <a className="btn btn-outline-light btn-lg m-2" href="#!" role="button" rel="nofollow noreferrer" target="_blank">button</a>
                    <a className="btn btn-outline-light btn-lg m-2" href="#!" target="_blank" role="button" rel="noreferrer">button</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Inner */}
        {/* Controls */}
        <a className="carousel-control-prev" href="#introCarousel" role="button" data-mdb-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#introCarousel" role="button" data-mdb-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
      {/* Carousel wrapper */}
    </>
  );
}

export default Slider;
