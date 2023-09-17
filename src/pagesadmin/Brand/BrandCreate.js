import { Link, useNavigate } from "react-router-dom";


import { useState } from "react";
import brandservice from "../../service/BrandSevice"
function BrandCreate() {
    const navigate = useNavigate();
    const [name,setName]=useState('');
    const [metakey,setMetakey]=useState('');
    const [metadesc,setMetadesc]=useState('');
    const [sort_order,setSortOrder]=useState(0);
    const [status,setStatus]=useState(1);
    async function brandStore(event)
    {
        event.preventDefault();
        const image = document.querySelector("#image");
        var brand = new FormData();
        brand.append("name", name);
        brand.append("metakey", metakey);
        brand.append("metadesc", metadesc);
        brand.append("sort_order", sort_order);
        brand.append("status", status);
        brand.append("image", image.files[0]);
        await brandservice.create(brand).then(function (res){
            alert(res.data.message);
            navigate("../../admin/brand", { replace: true });
          });
    }
    return (
        <div className="container-fluid">
            <div className="row px-xl-5">
                <div className="col-lg-9 col-md-4 ">
                    <form onSubmit={brandStore} method="post">
                        <div className="card bg-dark">
                            <div className="card-header">
                                <div className="row">
                                    <div className="col-md-6">
                                        <strong>
                                            Thêm danh mục
                                        </strong>

                                    </div>
                                    <div className="col-md-6 text-end">
                                        <button className="btn btn-sm  btn-succress me-2 bg-light" type="submit">
                                            Lưu

                                        </button>
                                        <Link to="/admin/brand" className="btn-btn-sm btn-succress btn-light">
                                            Về danh sách
                                        </Link>
                                    </div>

                                </div>

                            </div>
                            <div className="card-body">
                                <div className="row" >
                                    <div className="col-md-9">
                                        <div className="mb-3">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="metakey">Metakey</label>
                                            <textarea name="metakey" value={metakey} onChange={(e) => setMetakey(e.target.value)} className="form-control"></textarea>

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="metadesc">Metadesc</label>
                                            <textarea name="metadesc" value={metadesc} onChange={(e) => setMetadesc(e.target.value)} className="form-control"></textarea>

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
                            <label htmlFor="sort_order">Sort_order</label>
                            <select name="ort_order" className="form-control" value={sort_order} onChange={(e) => setSortOrder(e.target.value)}>
                                <option value="0">None</option>

                            </select>

                        </div>
                        <div className="mb-3">
                            <label htmlFor="image">Image</label>
                            <input type="file" id="image" name="image" className="form-control" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="status">Status</label>
                            <select name="status" className="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>

                                <option value="1">Xuất bản 1</option>
                                <option value="2">Không xuất bản 2</option>

                            </select>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrandCreate;