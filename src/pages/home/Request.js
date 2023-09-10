import React from "react";
import background from "../../assets/images/banners/banner9.jpg";

const Request = () => (
  <section className="padding-bottom">
    <header className="section-heading heading-line">
      <h4 className="title-section text-uppercase">Request for Quotation</h4>
    </header>
    <div className="row">
      <div className="col-md-8">
        <div
          className="card-banner banner-quote overlay-gradient"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <div className="card-img-overlay white">
            <h3 className="card-title">
              Hỗ trợ khách hàng
            </h3>
            <p className="card-text" style={{ maxWidth: 400 }}>
            Các nhân viên hỗ trợ khách hàng nên có kiến thức 
            chuyên sâu về những sản phẩm và dịch vụ do công ty của họ cung cấp. 
            Vai trò của họ cũng có thể bao gồm việc tạo các bài viết trong trung 
            tâm hỗ trợ khách hàng.
            </p>
            <a href="" className="btn btn-primary rounded-pill">
              Xem Ngay
            </a>
          </div>
        </div>
      </div>{" "}
      {/* col // */}
      <div className="col-md-4">
        <div className="card card-body">
          <h4 className="title py-3">One Request, Multiple Quotes</h4>
          <form>
            <div className="form-group">
              <input
                className="form-control"
                name=""
                placeholder="What are you looking for?"
                type="text"
              />
            </div>
            <div className="form-group">
              <div className="input-group">
                <input
                  className="form-control"
                  placeholder="Quantity"
                  name=""
                  type="text"
                />
                <select className="custom-select form-control">
                  <option>Pieces</option>
                  <option>Litres</option>
                  <option>Tons</option>
                  <option>Gramms</option>
                </select>
              </div>
            </div>
            <div className="form-group text-muted">
              <p>Select template type:</p>
              <label className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue="option1"
                />
                <span className="form-check-label">Request price</span>
              </label>
              <label className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue="option2"
                />
                <dspaniv className="form-check-label">Request a sample</dspaniv>
              </label>
            </div>
            <div className="form-group">
              <button className="btn btn-warning">Request for quote</button>
            </div>
          </form>
        </div>
      </div>{" "}
      {/* col // */}
    </div>{" "}
    {/* row // */}
  </section>
);
export default Request;
