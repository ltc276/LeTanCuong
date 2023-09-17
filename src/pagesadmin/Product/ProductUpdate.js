import { Link, useNavigate, useParams } from "react-router-dom";
import productservice from "../../service/ProductSevice";
import { useEffect, useState } from "react";

function CategoryUpdate() {
    const navigate = useNavigate();
    const { id } = useParams("id");

    const [name, setName] = useState("");
    const [metakey, setMetakey] = useState("");
    const [metadesc, setMetadesc] = useState("");
    const [category_id, setCategory_id] = useState(0);
    const [price, setPrice] = useState(0);
    const [price_sale, setPrice_sale] = useState(0);
    const [detail, setDetail] = useState("");
    const [qty, setQty] = useState(0);
    const [brand_id, setBrand_id] = useState(0);
    const [status, setStatus] = useState(1);
    const [products, setProducts] = useState([]);
    useEffect(function () {
        (async function () {
            await productservice.getAll().then(function (result) {
                setProducts(result.data.data);
            });
        })();
    }, []);
    const [product, setProduct] = useState([]);
    useEffect(
        function () {
            (async function () {
                await productservice.getById(id).then(function (result) {
                    setProduct(result.data.data);
                });
            })();
            setName(product.name);
            setMetakey(product.metakey);
            setMetadesc(product.metadesc);
            setCategory_id(product.category_id);
            setPrice(product.price);
            setPrice_sale(product.price_sale);
            setDetail(product.detail);
            setQty(product.qty);
            setBrand_id(product.brand_id);
            setStatus(product.status);
        },
        [
            product.metadesc,
            product.metakey,
            product.name,
            product.category_id,
            product.price,
            product.price_sale,
            product.detail,
            product.qty,
            product.brand_id,
            product.status,
            id,
        ]
    );
    async function productStore(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var product = new FormData();
        product.append("name", name);
        product.append("metakey", metakey);
        product.append("metadesc", metadesc);
        product.append("category_id", category_id);
        product.append("price", price);
        product.append("price_sale", price_sale);
        product.append("detail", detail);
        product.append("qty", qty);
        product.append("brand_id", brand_id);
        product.append("status", status);
        if (image.files.length === 0) {
            product.append("image", "");
        } else {
            product.append("image", image.files[0]);
        }

        await productservice.update(product, id).then(function (res) {
            alert(res.data.message);
            navigate("../../admin/product", { replace: true });
        });
    }
    return (
        <section className="mainList">
            <div className="wrapper">
                <div className="card1">
                    <form method="post" onSubmit={productStore}>
                        <div className="card-header">
                            <strong className="title1">THÊM DANH MỤC</strong>
                            <div className="button">
                                <Link to="/admin/product" className="backward">
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
                                    <label htmlFor="price">Giá:</label>
                                    <input
                                        name="price"
                                        type="text"
                                        className="input"
                                        id="name"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        placeholder="Nhập từ khóa..."
                                    />
                                </fieldset>
                                <fieldset className="input-container">
                                    <label htmlFor="price_sale">Giá sale:</label>
                                    <input
                                        name="price_sale"
                                        type="text"
                                        className="input"
                                        id="name"
                                        value={price_sale}
                                        onChange={(e) => setPrice_sale(e.target.value)}
                                        placeholder="Nhập từ khóa..."
                                    />
                                </fieldset>
                                <fieldset className="input-container">
                                    <label htmlFor="detail">Chi tiết</label>
                                    <input
                                        name="detail"
                                        type="text"
                                        className="input"
                                        id="name"
                                        value={detail}
                                        onChange={(e) => setDetail(e.target.value)}
                                        placeholder="Nhập từ khóa..."
                                    />
                                </fieldset>
                                <fieldset className="input-container">
                                    <label htmlFor="qty">Số lượng</label>
                                    <input
                                        name="qty"
                                        type="text"
                                        className="input"
                                        id="name"
                                        value={qty}
                                        onChange={(e) => setQty(e.target.value)}
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
                                    <label htmlFor="category_id">Danh mục cha</label>
                                    <textarea
                                        name="category_id"
                                        className="input1textarea"
                                        id="name"
                                        value={category_id}
                                        onChange={(e) => setCategory_id(e.target.value)}
                                        placeholder="Nhập mô tả..."
                                    />
                                </fieldset>
                                <fieldset className="input-container">
                                    <label htmlFor="brand_id">ID Thương hiệu</label>

                                    <textarea
                                        name="brand_id"
                                        className="input"
                                        value={brand_id}
                                        onChange={(e) => setBrand_id(e.target.value)}
                                    />

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