import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import { FaRegEye,FaEdit,FaTrashAlt} from "react-icons/fa";
import menuservice from "../../service/MenuSevice";
import { useEffect,useState } from "react";
import Moment from 'moment';
import { urlImage } from "../../config";
function MenuList() {
    
    const [menus, setMenus] = useState([]);
    const [status_delete, setStatus_delete] = useState([]);
    useEffect(function () {
        (async function () {
            await menuservice.getAll()
                .then(function (result) {
                    setMenus(result.data.data);
                }
                );
        })();
    }, [status_delete]);
    function menuDelete($id) {
        menuservice.remove($id)
            .then(function (res) {
                console.log(res.data.data);
                setStatus_delete(res.data.data.id);
                alert(res.data.message);
            });
    }
    return (
 
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">Thương hiệu</strong>

                    </div>
                    <div className="col-6 text-end">

                        <Link className="btn btn-sm btn-success" to="/admin/menu/create"><MdAdd />Thêm</Link>

                    </div>
                    <div className="card-body">
                        <table className="table table-striped table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Tên menu</th>
                                    <th>Link</th>
                                    <th>Kiểu</th>
                                    <th>Chức năng</th>
                                    <th>ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {menus.map(function (menu, index) {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                <input type="checkbox" />
                                            </td>
                                            <td>{menu.name}</td>
                                            <td>
                                            {menu.link}
                                            </td>
                                            <td>
                                            {menu.type}
                                            </td>
                                            <td>
                                            {Moment(menu.created_at).format('DD-MM-yyyy hh:mm')}
                                            </td>
                                            <td>
                                                <Link className="btn btn-sm btn-info me-2" to={'/admin/menu/show/'+menu.id}><FaRegEye /></Link>
                                                <Link className="btn btn-sm btn-info me-2" to={'/admin/menu/update/'+menu.id}><FaEdit /></Link>
                                                <button className="btn btn-sm btn-danger" onClick={() => menuDelete(menu.id)}><FaTrashAlt /></button>
                                            </td>
                                        </tr>

                                    )
                                })};
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

        </div>
    );
}




export default MenuList;