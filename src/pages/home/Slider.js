import React from "react";

const Slider = () => (
  <section className="section-main padding-y">
    <main className="card">
      <div className="card-body">
        <div className="row">
          <aside className="col-lg col-md-3 flex-lg-grow-0">
            <nav className="nav-home-aside">
              <h6 className="title-category">
                MY MARKETS <i className="d-md-none icon fa fa-chevron-down" />
              </h6>
              <ul className="menu-category">
                <li>
                  <a href="/product-detail/1">Fashion and clothes</a>
                </li>
                <li>
                  <a href="/product-detail/1">Automobile and motors</a>
                </li>
                <li>
                  <a href="/product-detail/1">Gardening and agriculture</a>
                </li>
                <li>
                  <a href="/product-detail/1">Electronics and tech</a>
                </li>
                <li>
                  <a href="/product-detail/1">Packaginf and printing</a>
                </li>
                <li>
                  <a href="/product-detail/1">Home and kitchen</a>
                </li>
                <li>
                  <a href="/product-detail/1">Digital goods</a>
                </li>
                <li className="has-submenu">
                  <a href="/product-detail/1">More items</a>
                  <ul className="submenu">
                    <li>
                      <a href="/product-detail/1">Submenu name</a>
                    </li>
                    <li>
                      <a href="/product-detail/1">Great submenu</a>
                    </li>
                    <li>
                      <a href="/product-detail/1">Another menu</a>
                    </li>
                    <li>
                      <a href="/product-detail/1">Some others</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </aside>
          {/* col.// */}
          <div className="col-md-9 col-xl-7 col-lg-7">
            {/* ================== COMPONENT SLIDER  BOOTSTRAP  ==================  */}
            <div
              id="carousel1_indicator"
              className="slider-home-banner carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="/product-detail/1carousel1_indicator"
                  data-slide-to={0}
                  className="active"
                />
                <li data-target="/product-detail/1carousel1_indicator" data-slide-to={1} />
                <li data-target="/product-detail/1carousel1_indicator" data-slide-to={2} />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={require("../../assets/images/banners/slide1.jpg")}
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../../assets/images/banners/slide2.jpg")}
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../../assets/images/banners/slide3.jpg")}
                    alt="Third slide"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="/product-detail/1carousel1_indicator"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="/product-detail/1carousel1_indicator"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
            </div>
            {/* ==================  COMPONENT SLIDER BOOTSTRAP end.// ==================  .// */}
          </div>
          {/* col.// */}
          <div className="col-md d-none d-lg-block flex-grow-1">
            <aside className="special-home-right">
              <h6 className="bg-blue text-center text-white mb-0 p-2">
                Popular category
              </h6>
              <div className="card-banner border-bottom">
                <div className="py-3" style={{ width: "80%" }}>
                  <h6 className="card-title">Men clothing</h6>
                  <a href="/product-detail/1" className="btn btn-secondary btn-sm">
                    Source now
                  </a>
                </div>
                <img
                  src={require("../../assets/images/items/1.jpg")}
                  height={80}
                  className="img-bg"
                  alt=""
                />
              </div>
              <div className="card-banner border-bottom">
                <div className="py-3" style={{ width: "80%" }}>
                  <h6 className="card-title">Winter clothing </h6>
                  <a href="/product-detail/1" className="btn btn-secondary btn-sm">
                    Source now
                  </a>
                </div>
                <img
                  src={require("../../assets/images/items/2.jpg")}
                  height={80}
                  className="img-bg"
                  alt=""
                />
              </div>
              <div className="card-banner border-bottom">
                <div className="py-3" style={{ width: "80%" }}>
                  <h6 className="card-title">Home inventory</h6>
                  <a href="/product-detail/1" className="btn btn-secondary btn-sm">
                    Source now
                  </a>
                </div>
                <img
                  src={require("../../assets/images/items/6.jpg")}
                  height={80}
                  className="img-bg"
                  alt=""
                />
              </div>
            </aside>
          </div>
          {/* col.// */}
        </div>
        {/* row.// */}
      </div>
      {/* card-body.// */}
    </main>
    {/* card.// */}
  </section>
);
export default Slider;
