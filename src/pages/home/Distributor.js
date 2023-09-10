import React from "react";
const Distributor = () => (
  <section className="padding-bottom">
    <header className="section-heading heading-line">
      <h4 className="title-section text-uppercase">Nhà phân phối</h4>
    </header>
    <div className="row">
      <div className="col-md-3 col-sm-6">
        <article className="card card-post">
          <img
            src={require("../../assets/images/posts/1.jpg")}
            className="card-img-top"
          />
          <div className="card-body">
            <h6 className="title">Oxford University Press</h6>
            <p className="small text-uppercase text-muted">Đơn vị phân phối sách danh giá nhất thế giới</p>
          </div>
        </article>{" "}
        {/* card.// */}
      </div>{" "}
      {/* col.// */}
      <div className="col-md-3 col-sm-6">
        <article className="card card-post">
          <img
            src={require("../../assets/images/posts/2.jpg")}
            className="card-img-top"
          />
          <div className="card-body">
            <h6 className="title">Nhà xuất bản Kim đồng</h6>
            <p className="small text-uppercase text-muted">Đơn vị phân phối sách lớn nhất việt nam</p>
          </div>
        </article>{" "}
        {/* card.// */}
      </div>{" "}
      {/* col.// */}
      <div className="col-md-3 col-sm-6">
        <article className="card card-post">
          <img
            src={require("../../assets/images/posts/3.jpg")}
            className="card-img-top"
          />
          <div className="card-body">
            <h6 className="title">RELX Group</h6>
            <p className="small text-uppercase text-muted">Đơn vị phân phối sách có trụ sở ở Mỹ</p>
          </div>
        </article>{" "}
        {/* card.// */}
      </div>{" "}
      {/* col.// */}
      <div className="col-md-3 col-sm-6">
        <article className="card card-post">
          <img
            src={require("../../assets/images/posts/4.jpg")}
            className="card-img-top"
          />
          <div className="card-body">
            <h6 className="title">Pearson</h6>
            <p className="small text-uppercase text-muted">Đơn vị phân phối sách có trụ sở ở Anh</p>
          </div>
        </article>{" "}
        {/* card.// */}
      </div>{" "}
      {/* col.// */}
    </div>{" "}
    {/* row.// */}
  </section>
);
export default Distributor;
