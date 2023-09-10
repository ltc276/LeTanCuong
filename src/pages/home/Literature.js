import React from "react";

const Literature = () => (
  <section className="padding-bottom">
    <header className="section-heading heading-line">
      <h4 className="title-section text-uppercase">Sách Văn Học</h4>
    </header>
    <div className="card card-home-category">
      <div className="row no-gutters">
        <div className="col-md-3">
          <div className="home-category-banner bg-light-orange">
            <h5 className="title">Best trending</h5>
            <p>
              Sách văn học là một dạng văn bản dưới hình thức nghệ thuật, có giá trị nghệ thuật hoặc trí tuệ,
              thường sẽ có những cách thức triển khai ngôn ngữ khác với cách sử dụng thông thường.{" "}
            </p>
            <a href="/product-detail/1" className="btn btn-outline-primary rounded-pill">
              Xem ngay
            </a>
            {/*<img
              src={require("../../assets/images/items/1.jpg")}
              className="img-bg"
            />*/}
          </div>
        </div>{" "}
        {/* col.// */}
        <div className="col-md-9">
          <ul className="row no-gutters bordered-cols">
            <li className="col-6 col-lg-3 col-md-4">
              <a href="/product-detail/1" className="item">
                <div className="card-body">
                  <h6 className="title">
                    Sherlock Homles
                  </h6>
                  <img
                    className="img-sm float-right"
                    src={require("../../assets/images/items/1.jpg")}
                  />
                  <p className="text-muted">
                    <i className="fa fa-map-marker-alt" /> Arthur Conan Doyle
                  </p>
                </div>
              </a>
            </li>
            <li className="col-6 col-lg-3 col-md-4">
              <a href="/product-detail/1" className="item">
                <div className="card-body">
                  <h6 className="title">
                    Nhà giả kim
                  </h6>
                  <img
                    className="img-sm float-right"
                    src={require("../../assets/images/items/2.jpg")}
                  />
                  <p className="text-muted">
                    <i className="fa fa-map-marker-alt" /> Paulo Coelho
                  </p>
                </div>
              </a>
            </li>
            <li className="col-6 col-lg-3 col-md-4">
              <a href="/product-detail/1" className="item">
                <div className="card-body">
                  <h6 className="title">Tam thể</h6>
                  <img
                    className="img-sm float-right"
                    src={require("../../assets/images/items/3.jpg")}
                  />
                  <p className="text-muted">
                    <i className="fa fa-map-marker-alt" /> Lưu Từ Hân
                  </p>
                </div>
              </a>
            </li>
            <li className="col-6 col-lg-3 col-md-4">
              <a href="/product-detail/1" className="item">
                <div className="card-body">
                  <h6 className="title">
                    Harry Potter
                  </h6>
                  <img
                    className="img-sm float-right"
                    src={require("../../assets/images/items/4.jpg")}
                  />
                  <p className="text-muted">
                    <i className="fa fa-map-marker-alt" /> J. K. Rowling
                  </p>
                </div>
              </a>
            </li>
            <li className="col-6 col-lg-3 col-md-4">
              <a href="/product-detail/1" className="item">
                <div className="card-body">
                  <h6 className="title">
                    Sư im lặng của bầy cừu
                  </h6>
                  <img
                    className="img-sm float-right"
                    src={require("../../assets/images/items/5.jpg")}
                  />
                  <p className="text-muted">
                    <i className="fa fa-map-marker-alt" /> Thomas Harris
                  </p>
                </div>
              </a>
            </li>
            <li className="col-6 col-lg-3 col-md-4">
              <a href="/product-detail/1" className="item">
                <div className="card-body">
                  <h6 className="title">
                    Bố già
                  </h6>
                  <img
                    className="img-sm float-right"
                    src={require("../../assets/images/items/6.jpg")}
                  />
                  <p className="text-muted">
                    <i className="fa fa-map-marker-alt" /> Mario Puzo
                  </p>
                </div>
              </a>
            </li>
            <li className="col-6 col-lg-3 col-md-4">
              <a href="/product-detail/1" className="item">
                <div className="card-body">
                  <h6 className="title">
                    Rừng Nauy{" "}
                  </h6>
                  <img
                    className="img-sm float-right"
                    src={require("../../assets/images/items/7.jpg")}
                  />
                  <p className="text-muted">
                    <i className="fa fa-map-marker-alt" /> Murakami Haruki
                  </p>
                </div>
              </a>
            </li>
            <li className="col-6 col-lg-3 col-md-4">
              <a href="/product-detail/1" className="item">
                <div className="card-body">
                  <h6 className="title">
                    Giết con chim nhại{" "}
                  </h6>
                  <img
                    className="img-sm float-right"
                    src={require("../../assets/images/items/13.jpg")}
                  />
                  <p className="text-muted">
                    <i className="fa fa-map-marker-alt" /> Harper Lee
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>{" "}
        {/* col.// */}
      </div>{" "}
      {/* row.// */}
    </div>{" "}
    {/* card.// */}
  </section>
);
export default Literature;
