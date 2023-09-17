import { Link, useNavigate, useParams } from "react-router-dom";
import brandservice from "../../service/BrandSevice";
import Moment from 'moment';
import { useEffect, useState } from "react";

function BrandUpdate() {
    const navigate = useNavigate();
    const { id } = useParams("id");

    const [name, setName] = useState("");
    const [metakey, setMetakey] = useState("");
    const [metadesc, setMetadesc] = useState("");
    const [sort_order, setSort_order] = useState(0);
    const [status, setStatus] = useState(1);
    const [categories, setCategories] = useState([]);
    useEffect(function () {
        (async function () {
            await brandservice.getAll().then(function (result) {
                setCategories(result.data.data);
            });
        })();
    }, []);
    const [brand, setCategory] = useState([]);
    useEffect(
        function () {
            (async function () {
                await brandservice.getById(id).then(function (result) {
                    setCategory(result.data.data);
                });
            })();
            setName(brand.name);
            setMetakey(brand.metakey);
            setMetadesc(brand.metadesc);
            setSort_order(brand.sort_order);
            setStatus(brand.status);
        },
        [
            brand.metadesc,
            brand.metakey,
            brand.name,
            brand.sort_order,
            brand.status,
            id,
        ]
    );
    async function categoryStore(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var brand = new FormData();
        brand.append("name", name);
        brand.append("metakey", metakey);
        brand.append("metadesc", metadesc);
        brand.append("sort_order", sort_order);
        brand.append("status", status);
        if (image.files.length === 0) {
            brand.append("image", "");
        } else {
            brand.append("image", image.files[0]);
        }

        await brandservice.update(brand, id).then(function (res) {
            alert(res.data.message);
            navigate("../../admin/brand", { replace: true });
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
                                <Link to="/admin/brand" className="backward">
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
                                        {categories.map((brand, index) => {
                                            return (
                                                <option key={index} value={brand.sort_order + 1}>
                                                    Sau {brand.name}
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
    );}

export default BrandUpdate;