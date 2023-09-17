import { Link, useNavigate, useParams } from "react-router-dom";
import menuservice from "../../service/MenuSevice";
import Moment from 'moment';
import { useEffect, useState } from "react";

function MenuUpdate() {
    const navigate = useNavigate();
    const { id } = useParams("id");

    const [name, setName] = useState("");
    const [link, setLink] = useState("");
    const [type, setType] = useState("");
    const [table_id, setTableId] = useState(0);
    const [status, setStatus] = useState(1);
    const [categories, setCategories] = useState([]);
    useEffect(function () {
        (async function () {
            await menuservice.getAll().then(function (result) {
                setCategories(result.data.data);
            });
        })();
    }, []);
    const [menu, setCategory] = useState([]);
    useEffect(
        function () {
            (async function () {
                await menuservice.getById(id).then(function (result) {
                    setCategory(result.data.data);
                });
            })();
            setName(menu.name);
            setLink(menu.link);
            setType(menu.type);
            setTableId(menu.table_id);
            setStatus(menu.status);
        },
        [
            menu.link,
            menu.type,
            menu.name,
            menu.table_id,
            menu.status,
            id,
        ]
    );
    async function categoryStore(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var menu = new FormData();
        menu.append("name", name);
        menu.append("link", link);
        menu.append("type", type);
        menu.append("table_id", table_id);
        menu.append("status", status);
        await menuservice.update(menu, id).then(function (res) {
            alert(res.data.message);
            navigate("../../admin/menu", { replace: true });
        });
    }
    return (
        <section className="mainList">
            <div className="wrapper">
                <div className="card1">
                    <form method="post" onSubmit={categoryStore}>
                        <div className="card-header">
                            <strong className="title1">THÊM DANH MỤC</strong>
                            <div className="button">
                                <Link to="/admin/menu" className="backward">
                                    Go back
                                </Link>
                                <button type="submit" className="save">
                                    Save
                                </button>
                            </div>
                        </div>
                        <div className="form-container grid -bottom-3  ">
                            <div className="grid__item large--three-quarters">
                                <fieldset className="input-container">
                                    <label htmlFor="name">Tên danh mục</label>
                                    <input
                                        name="name"
                                        type="text"
                                        className="input"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Nhập tên danh mục..."
                                    />
                                </fieldset>
                                <fieldset className="input-container">
                                    <label htmlFor="link">Link</label>
                                    <input
                                        name="link"
                                        type="text"
                                        className="input"
                                        id="name"
                                        value={link}
                                        onChange={(e) => setLink(e.target.value)}
                                        placeholder="Nhập từ khóa..."
                                    />
                                </fieldset>
                                <fieldset className="input-container">
                                    <label htmlFor="type">Type</label>
                                    <textarea
                                        name="type"
                                        className="input1textarea"
                                        id="name"
                                        value={type}
                                        onChange={(e) => setType(e.target.value)}
                                        placeholder="Nhập mô tả..."
                                    />
                                </fieldset>
                            </div>
                            <div className="grid__item large--one-quarter">
                                <fieldset className="input-container">
                                    <label htmlFor="table_id">table_id</label>
                                    <select
                                        name="table_id"
                                        className="input"
                                        value={table_id}
                                        onChange={(e) => setTableId(e.target.value)}
                                    >
                                        <option disabled>--Chọn vị trí sắp xếp--</option>
                                        <option value="0">None</option>
                                        <option value="1">Đứng đầu</option>
                                        {categories.map((menu, index) => {
                                            return (
                                                <option key={index} value={menu.sort_order + 1}>
                                                    Sau {menu.name}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </fieldset>
                                <fieldset className="input-container">
                                    <label htmlFor="image">Hình ảnh</label>
                                    <input
                                        name="image"
                                        type="file"
                                        className="input"
                                        id="image"
                                    />
                                </fieldset>
                                <fieldset className="input-container">
                                    <label htmlFor="status">Tình trạng xuất bản</label>
                                    <select
                                        name="status"
                                        className="input"
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                    >
                                        <option disabled>--Chọn tình trạng xuất bản--</option>
                                        <option value="1">Xuất bản</option>
                                        <option value="2">Không xuất bản</option>
                                    </select>
                                </fieldset>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default MenuUpdate;