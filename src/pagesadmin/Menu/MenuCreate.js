import { Link, useNavigate } from "react-router-dom";


import { useState } from "react";
import menuservice from "../../service/MenuSevice"
function MenuCreate() {
    const navigate = useNavigate();
    const [name,setName]=useState('');
    const [link,setLink]=useState('');
    const [type,setType]=useState('');
    const [table_id,setTableId]=useState(0);
    const [status,setStatus]=useState(1);
    async function menuStore(event)
    {
        event.preventDefault();
        const image = document.querySelector("#image");
        var menu = new FormData();
        menu.append("name", name);
        menu.append("link", link);
        menu.append("type", type);
        menu.append("table_id", table_id);
        menu.append("status", status);
        await menuservice.create(menu).then(function (res){
            alert(res.data.message);
            navigate("../../admin/menu", { replace: true });
          });
    }
    return (
        <div className="container-fluid">
            <div className="row px-xl-5">
                <div className="col-lg-9 col-md-4 ">
                    <form onSubmit={menuStore} method="post">
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
                                        <Link to="/admin/menu" className="btn-btn-sm btn-succress btn-light">
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
                                            <label htmlFor="link">Link</label>
                                            <textarea name="link" value={link} onChange={(e) => setLink(e.target.value)} className="form-control"></textarea>

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="type">Type</label>
                                            <textarea name="type" value={type} onChange={(e) => setType(e.target.value)} className="form-control"></textarea>

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
                            <label htmlFor="Table_id">Table_id</label>
                            <select name="Table_id" className="form-control" value={table_id} onChange={(e) => setTableId(e.target.value)}>
                                <option value="0">None</option>

                            </select>

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

export default MenuCreate;