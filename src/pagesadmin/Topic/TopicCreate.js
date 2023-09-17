import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import topicservice from "../../service/TopicSevice"
function TopicCreate() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [metakey, setMetakey] = useState('');
    const [metadesc, setMetadesc] = useState('');
    const [parent_id, setParendtId] = useState(0);
    const [status, setStatus] = useState(1);
    async function topicStore(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var topic = new FormData();
        topic.append("name", name);
        topic.append("metakey", metakey);
        topic.append("metadesc", metadesc);
        topic.append("parent_id", parent_id);
        topic.append("status", status);
        await topicservice.create(topic).then(function (res) {
            alert(res.data.message);
            navigate("../../admin/topic", { replace: true });
        });
    }
    return (
        <div className="container-fluid">
            <div className="row px-xl-5">
                <div className="col-lg-9 col-md-4 ">
                    <form onSubmit={topicStore} method="post">
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
                                        <Link to="/admin/topic" className="btn-btn-sm btn-info">
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
                                            <label htmlFor="metakey">Từ khoá</label>
                                            <textarea name="metakey" value={metakey} onChange={(e) => setMetakey(e.target.value)} className="form-control"></textarea>

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="metadesc">Mô tả</label>
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
                        <div className="mb-3 ">
                            <label htmlFor="parent_id">Danh mục cha</label>
                            <select name="parent_id" className="form-control" value={parent_id} onChange={(e) => setParendtId(e.target.value)}>
                                <option value="0">Danh mục cha</option>

                            </select>

                        </div>
                        <div className="mb-3">
                            <label htmlFor="image">Hình đại diện</label>
                            <input type="file" id="image" name="image" className="form-control" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="status">Trạng thái</label>
                            <select name="status" className="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>

                                <option value="1">Xuất bản</option>
                                <option value="2">Chưa xuất bản</option>

                            </select>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopicCreate;