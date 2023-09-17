import { Link, useNavigate, useParams } from "react-router-dom";
import sliderservice from "../../service/SliderService";
import { useEffect, useState } from "react";

function SliderUpdate() {
    const navigate = useNavigate();
    const { id } = useParams("id");

    const [name, setName] = useState("");
    const [link, setLink] = useState("");
    const [position, setPosition] = useState("");
    
    const [sort_order, setSort_order] = useState(0);
    const [status, setStatus] = useState(1);
    const [sliders, setSliders] = useState([]);
    useEffect(function () {
        (async function () {
            await sliderservice.getAll().then(function (result) {
                setSliders(result.data);
            });
        })();
    }, []);
    const [slider, setSlider] = useState([]);
    useEffect(
        function () {
            (async function () {
                await sliderservice.getById(id).then(function (result) {
                    setSlider(result.data);
                });
            })();
            setName(slider.name);
            setLink(slider.link);
            setPosition(slider.position);
           
            setSort_order(slider.sort_order);
            setStatus(slider.status);
        },
        [
            slider.position,
            slider.link,
            slider.name,
        
            slider.sort_order,
            slider.status,
            id,
        ]
    );
    async function sliderStore(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var slider = new FormData();
        slider.append("name", name);
        slider.append("link", link);
        slider.append("position", position);
        
        slider.append("sort_order", sort_order);
        slider.append("status", status);
        if (image.files.length === 0) {
            slider.append("image", "");
        } else {
            slider.append("image", image.files[0]);
        }

        await sliderservice.update(slider, id).then(function (res) {
            alert(res.data.message);
            navigate("../../admin/slider", { replace: true });
        });
    }
    return (
        <section className="mainList">
            <div className="wrapper">
                <div className="card1">
                    <form method="post" onSubmit={sliderStore}>
                        <div className="card-header">
                            <strong className="title1">THÊM DANH MỤC</strong>
                            <div className="button">
                                <Link to="/admin/slider" className="backward">
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
                                    <label htmlFor="link">Từ khóa</label>
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
                                    <label htmlFor="position">Mô tả</label>
                                    <textarea
                                        name="position"
                                        className="input1textarea"
                                        id="name"
                                        value={position}
                                        onChange={(e) => setPosition(e.target.value)}
                                        placeholder="Nhập mô tả..."
                                    />
                                </fieldset>
                            </div>
                            <div className="grid__item large--one-quarter">
                                <fieldset className="input-container">
                                    
                                    <select
                                        
                                        className="input"
                                        
                                        
                                    >
                                        <option disabled>--Chọn danh mục--</option>
                                        <option value="0">Không có cha</option>
                                        {sliders.map((slider, index) => {
                                            return (
                                                <option key={index} value={slider.id}>
                                                    {slider.name}
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
                                        {sliders.map((slider, index) => {
                                            return (
                                                <option key={index} value={slider.sort_order + 1}>
                                                    Sau {slider.name}
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

export default SliderUpdate;