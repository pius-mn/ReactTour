function Booking() {
  return (
    <div>
      <div className="card">
        <div className="card-body py-5 px-md-5">
          <form>
            {/* 2 column grid layout with text inputs */}
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    required
                  />
                  <label
                    className="form-label"
                    htmlFor="name"
                    style={{ marginLeft: 0 }}
                  >
                    Name
                  </label>
                  <div className="form-notch">
                    <div className="form-notch-leading" style={{ width: 9 }} />
                    <div
                      className="form-notch-middle"
                      style={{ width: "88.8px" }}
                    />
                    <div className="form-notch-trailing" />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="form-outline mb-4">
                  <input
                    type="tel"
                    id="phone"
                    className="form-control"
                    required
                  />
                  <label
                    className="form-label"
                    htmlFor="phone"
                    style={{ marginLeft: 0 }}
                    placeholder="+0 000000000"
                  >
                  Phone
                  </label>
                  <div className="form-notch">
                    <div className="form-notch-leading" style={{ width: 9 }} />
                    <div
                      className="form-notch-middle"
                      style={{ width: "88.8px" }}
                    />
                    <div className="form-notch-trailing" />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control"
                    required
                  />
                  <label
                    className="form-label"
                    htmlFor="form3Example3"
                    style={{ marginLeft: 0 }}
                  >
                    Email address
                  </label>
                  <div className="form-notch">
                    <div className="form-notch-leading" style={{ width: 9 }} />
                    <div
                      className="form-notch-middle"
                      style={{ width: "88.8px" }}
                    />
                    <div className="form-notch-trailing" />
                  </div>
                </div>
           {/* 2 column grid layout with text inputs */}
           <div className="row mb-4">
              <div className="col">
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="country"
                    className="form-control"
                    required
                  />
                  <label
                    className="form-label"
                    htmlFor="country"
                    style={{ marginLeft: 0 }}
                  >
                    Country
                  </label>
                  <div className="form-notch">
                    <div className="form-notch-leading" style={{ width: 9 }} />
                    <div
                      className="form-notch-middle"
                      style={{ width: "88.8px" }}
                    />
                    <div className="form-notch-trailing" />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="form-outline mb-4">
                  <input
                    type="date"
                    id="check_in_date"
                    className="form-control active"
                    required
                  />
                  <label
                    className="form-label"
                    htmlFor="check_in_date"
                    style={{ marginLeft: 0 }}
                  >
                    Check in Date
                  </label>
                  <div className="form-notch">
                    <div className="form-notch-leading" style={{ width: 9 }} />
                    <div
                      className="form-notch-middle"
                      style={{ width: "88.8px" }}
                    />
                    <div className="form-notch-trailing" />
                  </div>
                </div>
              </div>
            </div>
            {/* 2 column grid layout with text inputs */}
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline mb-4">
                  <input
                    type="number"
                    id="Adults"
                    className="form-control"
                    required
                  />
                  <label
                    className="form-label"
                    htmlFor="Adults"
                    style={{ marginLeft: 0 }}
                  >
                    Adult(s)
                  </label>
                  <div className="form-notch">
                    <div className="form-notch-leading" style={{ width: 9 }} />
                    <div
                      className="form-notch-middle"
                      style={{ width: "88.8px" }}
                    />
                    <div className="form-notch-trailing" />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="form-outline mb-4">
                  <input
                    type="number"
                    id="children"
                    className="form-control"
                    required
                  />
                  <label
                    className="form-label"
                    htmlFor="children"
                    style={{ marginLeft: 0 }}
                  >
                    Children
                  </label>
                  <div className="form-notch">
                    <div className="form-notch-leading" style={{ width: 9 }} />
                    <div
                      className="form-notch-middle"
                      style={{ width: "88.8px" }}
                    />
                    <div className="form-notch-trailing" />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-outline mb-4">
              <textarea
                
                id="requirements"
                className="form-control"
                autocompleted=""
              ></textarea>
              <label
                className="form-label"
                htmlFor="requirements"
                style={{ marginLeft: 0 }}
              >
                Requirements
              </label>
              <div className="form-notch">
                <div className="form-notch-leading" style={{ width: 9 }} />
                <div
                  className="form-notch-middle"
                  style={{ width: "64.8px" }}
                />
                <div className="form-notch-trailing" />
              </div>
            </div>
           
            {/* Submit button */}
            <button
              type="submit"
              className="btn btn-primary btn-block mb-4"
              aria-controls="#picker-editor"
            >
              Request a Quote
            </button>
           
          </form>
        </div>
      </div>
    </div>
  );
}

export default Booking;
