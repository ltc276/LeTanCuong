import React from "react";
const Lightnovel = () => (
  <section className="padding-bottom">
    <header className="section-heading heading-line">
      <h4 className="title-section text-uppercase">Light Novel</h4>
    </header>
    <div className="card card-home-category">
      <div className="row no-gutters">
        <div className="col-md-3">
          <div className="home-category-banner bg-light-orange">
            <h5 className="title">Light novel</h5>
            <p>
            Hay còn được gọi là tiểu thuyết ngắn, là một dòng tiểu thuyết có nguồn gốc từ Nhật Bản.
            "Light" trong "light novel" nghĩa là ngắn, nhẹ về số lượng từ ngữ.{" "}
            </p>
            <a href="/product-detail/1" className="btn btn-outline-primary rounded-pill">
              Xem Ngay
            </a>
            {/*<img
              src={require("../../assets/images/items/14.jpg")}
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
                    Cuộc hôn nhân hạnh phúc của tôi
                  </h6>
                  <img
                    className="img-sm float-right"
                    src={require("../../assets/images/items/16.jpg")}
                  />
                  <p className="text-muted">
                    <i className="fa fa-map-marker-alt" /> Akumi Agitogi
                  </p>
                </div>
              </a>
            </li>
            <li className="col-6 col-lg-3 col-md-4">
              <a href="/product-detail/1" className="item">
                <div className="card-body">
                  <h6 className="title">
                    5cm/s
                  </h6>
                  <img
                    className="img-sm float-right"
                    src={require("../../assets/images/items/17.jpg")}
                  />
                  <p className="text-muted">
                    <i className="fa fa-map-marker-alt" /> Shinkai Makoto
                  </p>
                </div>
              </a>
            </li>
            <li className="col-6 col-lg-3 col-md-4">
              <a href="/product-detail/1" className="item">
                <div className="card-body">
                  <h6 className="title">
                  Ảo ảnh và tro tàn
                  </h6>
                  <img
                    className="img-sm float-right"
                    src={require("../../assets/images/items/18.jpg")}
                  />
                  <p className="text-muted">
                    <i className="fa fa-map-marker-alt" /> Jyumonji Ao

                  </p>
                </div>
              </a>
            </li>
            <li className="col-6 col-lg-3 col-md-4">
              <a href="/product-detail/1" className="item">
                <div className="card-body">
                  <h6 className="title">
                    Date a live
                  </h6>
                  <img
                    className="img-sm float-right"
                    src={require("../../assets/images/items/19.jpg")}
                  />
                  <p className="text-muted">
                    <i className="fa fa-map-marker-alt" /> Kōshi Tachibana
                  </p>
                </div>
              </a>
            </li>
            <li className="col-6 col-lg-3 col-md-4">
              <a href="/product-detail/1" className="item">
                <div className="card-body">
                  <h6 className="title">
                    Thiên sứ nhà bên
                  </h6>
                  <img
                    className="img-sm float-right"
                    src={require("../../assets/images/items/20.jpg")}
                  />
                  <p className="text-muted">
                    <i className="fa fa-map-marker-alt" /> Saekisan
                  </p>
                </div>
              </a>
            </li>
            <li className="col-6 col-lg-3 col-md-4">
              <a href="/product-detail/1" className="item">
                <div className="card-body">
                  <h6 className="title">
                    Hoàng tử thiên tài
                  </h6>
                  <img
                    className="img-sm float-right"
                    src={require("../../assets/images/items/21.jpg")}
                  />
                  <p className="text-muted">
                    <i className="fa fa-map-marker-alt" /> Toba Toru
                  </p>
                </div>
              </a>
            </li>
            <li className="col-6 col-lg-3 col-md-4">
              <a href="/product-detail/1" className="item">
                <div className="card-body">
                  <h6 className="title">
                  Sword Art Online
                  </h6>
                  <img
                    className="img-sm float-right"
                    src={require("../../assets/images/items/22.jpg")}
                  />
                  <p className="text-muted">
                    <i className="fa fa-map-marker-alt" /> Kawahara Reki
                  </p>
                </div>
              </a>
            </li>
            <li className="col-6 col-lg-3 col-md-4">
              <a href="/product-detail/1" className="item">
                <div className="card-body">
                  <h6 className="title">
                  Re:Zero
                  </h6>
                  <img
                    className="img-sm float-right"
                    src={require("../../assets/images/items/23.jpg")}
                  />
                  <p className="text-muted">
                    <i className="fa fa-map-marker-alt" /> Tappei Nagatsuki
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
export default Lightnovel;
