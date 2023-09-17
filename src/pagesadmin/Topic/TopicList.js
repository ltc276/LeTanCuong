import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import { FaRegEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import topicservice from "../../service/TopicSevice";
import { useEffect,useState } from "react";
import Moment from 'moment';
import { urlImage } from "../../config";

function TopicList() {
    const [topics, setTopics] = useState([]);
    const [status_delete, setStatus_delete] = useState([]);
    useEffect(function () {
        (async function () {
            await topicservice.getAll()
                .then(function (result) {
                    setTopics(result.data.data);
                }
                );
        })();
    }, [status_delete]);
    function topicDelete($id) {
        topicservice.remove($id)
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

                        <Link className="btn btn-sm btn-success" to="/admin/topic/create"><MdAdd />Thêm</Link>

                    </div>
                    <div className="card-body">
                        <table className="table table-striped table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Hình</th>
                                    <th>Tên thương hiệu</th>
                                    <th>Slug</th>
                                    <th>Ngày tạo</th>
                                    <th>Chức năng</th>
                                    <th>ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {topics.map(function (topic, index) {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                <input type="checkbox" />
                                            </td>
                                            <td>
                                                <img src={urlImage+'topic/'+topic.image} alt="hinh.png" className="img-fluid" width="50px" height="50px"/>
                                            </td>
                                            <td>{topic.name}</td>
                                            <td>
                                            {topic.slug}
                                            </td>
                                            <td>
                                            {Moment(topic.created_at).format('DD-MM-yyyy hh:mm')}
                                            </td>
                                            <td>
                                                <Link className="btn btn-sm btn-info me-2" to={'/admin/topic/show/'+topic.id}><FaRegEye /></Link>
                                                <Link className="btn btn-sm btn-info me-2" to={'/admin/topic/update/'+topic.id}><FaEdit /></Link>
                                                <button className="btn btn-sm btn-danger" onClick={() => topicDelete(topic.id)}><FaTrashAlt /></button>
                                            </td>
                                            <td>
                                            {topic.id}
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

export default TopicList;