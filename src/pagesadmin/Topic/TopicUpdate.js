import { Link, useNavigate, useParams } from "react-router-dom";
import topicservice from "../../service/TopicSevice";
import { useEffect, useState } from "react";

function TopicUpdate() {
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
            await topicservice.getAll().then(function (result) {
                setCategories(result.data.data);
            });
        })();
    }, []);
    const [topic, setTopic] = useState([]);
    useEffect(
        function () {
            (async function () {
                await topicservice.getById(id).then(function (result) {
                    setTopic(result.data.data);
                });
            })();
            setName(topic.name);
            setMetakey(topic.metakey);
            setMetadesc(topic.metadesc);
            setParent_id(topic.parent_id);
            setSort_order(topic.sort_order);
            setStatus(topic.status);
        },
        [
            topic.metadesc,
            topic.metakey,
            topic.name,
            topic.parent_id,
            topic.sort_order,
            topic.status,
            id,
        ]
    );
    async function topicStore(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var topic = new FormData();
        topic.append("name", name);
        topic.append("metakey", metakey);
        topic.append("metadesc", metadesc);
        topic.append("parent_id", parent_id);
        topic.append("sort_order", sort_order);
        topic.append("status", status);
        if (image.files.length === 0) {
            topic.append("image", "");
        } else {
            topic.append("image", image.files[0]);
        }

        await topicservice.update(topic, id).then(function (res) {
            alert(res.data.message);
            navigate("../../admin/topic", { replace: true });
        });
    }
    return (
        <section className="mainList">
        <div className="wrapper">
            <div className="container">
                <form method="post" onSubmit={topicStore}>
                    <div className="card">
                        <div className="card-header" style={{ backgroundColor: "#FFCCFF", padding: 10 }}>
                            <div className="row" >
                                <div className="col-md-10">
                                    <strong className="title1">THÊM DANH MỤC</strong>
                                </div>
                                <div className="col-md-2 text-end" style={{ fontWeight: "bold", padding: 10 }}>
                                    <div className="button">
                                        <Link to="/admin/category" className="backward">
                                            Go back
                                        </Link>
                                        <button type="submit" className="save">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row" >
                                <div className="col-md-12" >
                                    <div className="mb-3" style={{ fontWeight: "bold" }}>
                                        <label htmlFor="name">Tên thương hiệu (Name)</label>
                                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />

                                    </div>
                                    <div className="mb-3" style={{ fontWeight: "bold" }}>
                                        <label htmlFor="metakey">Từ khoá (Metakey)</label>
                                        <textarea name="metakey" value={metakey} onChange={(e) => setMetakey(e.target.value)} className="form-control"></textarea>

                                    </div>
                                    <div className="mb-3" style={{ fontWeight: "bold" }}>
                                        <label htmlFor="metadesc">Khoá tìm kiếm (Metadesc)</label>
                                        <textarea name="metadesc" value={metadesc} onChange={(e) => setMetadesc(e.target.value)} className="form-control"></textarea>

                                    </div>

                                    <div className="mb-3" style={{ fontWeight: "bold" }}>
                                        <label htmlFor="sort_order">Sort_order</label>
                                        <select name="sort_order" className="form-control" value={sort_order} onChange={(e) => setSort_order(e.target.value)}>
                                            <option value="0">None</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                            <option value="4">Four</option>

                                        </select>

                                    </div>
                                    <div className="mb-3" style={{ fontWeight: "bold" }}>
                                        <label htmlFor="image">Ảnh (Image)</label>
                                        <input type="file" id="image" name="image" className="form-control" />

                                    </div>
                                    <div className="mb-3" style={{ fontWeight: "bold" }}>
                                        <label htmlFor="parent_id">Parent_id</label>
                                        <select name="parent_id" className="form-control" value={parent_id} onChange={(e) => setParent_id(e.target.value)}>

                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>

                                        </select>

                                    </div>
                                    <div className="mb-3" style={{ fontWeight: "bold" }}>
                                        <label htmlFor="status">Tình trạng (Status)</label>
                                        <select name="status" className="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>

                                            <option value="1">Xuất bản 1</option>
                                            <option value="2">Không xuất bản 2</option>

                                        </select>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
    );
}

export default TopicUpdate;