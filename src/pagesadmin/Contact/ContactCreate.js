import { Link, useNavigate } from "react-router-dom";


import { useState } from "react";
import contactservice from "../../service/ContactSevice";
function ContantCreate() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [phone, setPhone] = useState('');
    const [user_id, setUsertId] = useState(0);
    const [replay_id, setReplayId] = useState(0);
    const [status, setStatus] = useState(1);
    async function contactStore(event) {
        event.preventDefault();
        var contact = new FormData();
        contact.append("name", name);
        contact.append("email", email);
        contact.append("title", title);
        contact.append("content", content);
        contact.append("phone", phone);
        contact.append("user_id", user_id);
        contact.append("replay_id", replay_id);
        contact.append("status", status);
        await contactservice.create(contact).then(function (res) {
            alert(res.data.message);
            navigate("../../admin/contact", { replace: true });
        });
    }
    return (
        <div className="container-fluid">
            <div className="row px-xl-5">
                <div className="col-lg-9 col-md-4 ">
                    <form onSubmit={contactStore} method="post">
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
                                        <Link to="/admin/contact" className="btn-btn-sm btn-info">
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
                                            <label htmlFor="email">EMAIL</label>
                                            <textarea name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control"></textarea>

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="content">Content</label>
                                            <textarea name="content" value={content} onChange={(e) => setContent(e.target.value)} className="form-control"></textarea>

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="title">TITLE</label>
                                            <textarea name="title" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control"></textarea>

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="phone">PHONE</label>
                                            <textarea name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control"></textarea>

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="user_id">user_id</label>
                                            <textarea name="user_id" value={user_id} onChange={(e) => setUsertId(e.target.value)} className="form-control"></textarea>

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="reply_id">reply_id</label>
                                            <textarea name="reply_id" value={replay_id} onChange={(e) => setReplayId(e.target.value)} className="form-control"></textarea>

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="Status">Status</label>
                                            <textarea name="Status" value={status} onChange={(e) => setStatus(e.target.value)} className="form-control"></textarea>

                                        </div>



                                    </div>

                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContantCreate;