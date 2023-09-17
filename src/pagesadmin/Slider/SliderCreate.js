import { Link, useNavigate } from "react-router-dom";


import { useState } from "react";
import sliderservice from "../../service/SliderService";
function SliderCreate() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [position, setPosition] = useState('');
    const [sort_order, setSortOrder] = useState(0);
    const [status, setStatus] = useState(1);
    /*------------------------------------------------*/
    async function sliderStore(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var slider = new FormData();
        slider.append("name", name);
        slider.append("link", link);
        slider.append("position", position);
        slider.append("sort_order", sort_order);
        slider.append("status", status);
    }
    /*------------------------------------------------*/
    return (
        <div className="container-fluid">
            <div className="row px-xl-5">
                <div className="col-lg-9 col-md-4 ">
                    <form onSubmit={sliderStore} method="post">
                        <div className="card bg-dark">
                            <div className="card-header">
                                <div className="row">
                                    <div className="col-md-6">
                                        <strong>
                                            Thêm danh mục
                                        </strong>

                                    </div>
                                    <div className="col-md-6 text-end">
                                        <button className="btn btn-sm  btn-succress me-2 bg-info" type="submit">
                                            Lưu

                                        </button>
                                        <Link to="/admin/slider" className="btn-btn-sm btn-info">
                                            Về danh sách
                                        </Link>
                                    </div>

                                </div>

                            </div>
                            <div className="card-body">
                                <div className="row" >
                                    <div className="col-md-9">
                                        <div className="mb-3">
                                            <label htmlFor="name">Tên danh mục</label>
                                            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="link">Từ khoá</label>
                                            <textarea name="link" value={link} onChange={(e) => setLink(e.target.value)} className="form-control"></textarea>

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="position">Mô tả</label>
                                            <textarea name="position" value={position} onChange={(e) => setPosition(e.target.value)} className="form-control"></textarea>

                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </form>
                </div>
                <div className="col-lg-3 col-md-4">
                    <div className="col-md-12 bg-dark">
                        <div className="mb-3">
                            <label htmlFor="sort_order">Sắp xếp</label>
                            <select name="ort_order" className="form-control" value={sort_order} onChange={(e) => setSortOrder(e.target.value)}>
                                <option value="0">None</option>

                            </select>

                        </div>
                        <div className="mb-3">
                            <label htmlFor="status">Trạng thái</label>
                            <select name="status" className="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>

                                <option value="1">Xuất bản 1</option>
                                <option value="2">Chưa xuất bản 2</option>

                            </select>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SliderCreate;