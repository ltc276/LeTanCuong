import { Link, useNavigate, useParams } from "react-router-dom";
import categoryservice from "../../service/CategorySevice";
import { useEffect, useState } from "react";

function CategoryUpdate() {
    const navigate = useNavigate();
    const { id } = useParams("id");

    const [name, setName] = useState("");
    const [metakey, setMetakey] = useState("");
    const [metadesc, setMetadesc] = useState("");
    const [parent_id, setParent_id] = useState(0);
    const [sort_order, setSort_order] = useState(0);
    const [status, setStatus] = useState(1);
    const [categories, setCategories] = useState([]);
    useEffect(function () {
        (async function () {
            await categoryservice.getAll().then(function (result) {
                setCategories(result.data.data);
            });
        })();
    }, []);
    const [category, setCategory] = useState([]);
    useEffect(
        function () {
            (async function () {
                await categoryservice.getById(id).then(function (result) {
                    setCategory(result.data.data);
                });
            })();
            setName(category.name);
            setMetakey(category.metakey);
            setMetadesc(category.metadesc);
            setParent_id(category.parent_id);
            setSort_order(category.sort_order);
            setStatus(category.status);
        },
        [
            category.metadesc,
            category.metakey,
            category.name,
            category.parent_id,
            category.sort_order,
            category.status,
            id,
        ]
    );
    async function categoryStore(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var category = new FormData();
        category.append("name", name);
        category.append("metakey", metakey);
        category.append("metadesc", metadesc);
        category.append("parent_id", parent_id);
        category.append("sort_order", sort_order);
        category.append("status", status);
        if (image.files.length === 0) {
            category.append("image", "");
        } else {
            category.append("image", image.files[0]);
        }

        await categoryservice.update(category, id).then(function (res) {
            alert(res.data.message);
            navigate("../../admin/category", { replace: true });
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
                                <Link to="/admin/category" className="backward">
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
                                    <label htmlFor="metakey">Từ khóa</label>
                                    <input
                                        name="metakey"
                                        type="text"
                                        className="input"
                                        id="name"
                                        value={metakey}
                                        onChange={(e) => setMetakey(e.target.value)}
                                        placeholder="Nhập từ khóa..."
                                    />
                                </fieldset>
                                <fieldset className="input-container">
                                    <label htmlFor="metadesc">Mô tả</label>
                                    <textarea
                                        name="metadesc"
                                        className="input1textarea"
                                        id="name"
                                        value={metadesc}
                                        onChange={(e) => setMetadesc(e.target.value)}
                                        placeholder="Nhập mô tả..."
                                    />
                                </fieldset>
                            </div>
                            <div className="grid__item large--one-quarter">
                                <fieldset className="input-container">
                                    <label htmlFor="parent_id">Danh mục cha</label>
                                    <select
                                        name="parent_id"
                                        className="input"
                                        value={parent_id}
                                        onChange={(e) => setParent_id(e.target.value)}
                                    >
                                        <option disabled>--Chọn danh mục--</option>
                                        <option value="0">Không có cha</option>
                                        {categories.map((category, index) => {
                                            return (
                                                <option key={index} value={category.id}>
                                                    {category.name}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </fieldset>
                                <fieldset className="input-container">
                                    <label htmlFor="sort_order">Vị trí sắp xếp</label>
                                    <select
                                        name="sort_order"
                                        className="input"
                                        value={sort_order}
                                        onChange={(e) => setSort_order(e.target.value)}
                                    >
                                        <option disabled>--Chọn vị trí sắp xếp--</option>
                                        <option value="0">None</option>
                                        <option value="1">Đứng đầu</option>
                                        {categories.map((category, index) => {
                                            return (
                                                <option key={index} value={category.sort_order + 1}>
                                                    Sau {category.name}
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

export default CategoryUpdate;