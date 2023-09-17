
import { Link, useParams } from "react-router-dom";
import topicservice from "../../service/TopicSevice";
import { MdAdd } from "react-icons/md";
import { FaRegEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { urlImage } from "../../config";



function TopicShow() {
    const { id } = useParams("id");
    const [topic, setTopics] = useState([]);
    useEffect(
        function () {
            (async function () {
                await topicservice.getById(id).then(function (result) {
                    setTopics(result.data.data);
                });
            })();
        },
        [id]
    );
    console.log(topic);
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

                                <tr >
                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    <td>{topic.name}</td>
                                    <td>
                                        {topic.slug}
                                    </td>
                                    <td>
                                        {topic.created_at}
                                    </td>
                                    <td>
                                        <Link className="btn btn-sm btn-info me-2" to="/admin/topic/show/1"><FaRegEye /></Link>
                                        <Link className="btn btn-sm btn-info me-2" to="/admin/topic/update/1"><FaEdit /></Link>
                                        <Link className="btn btn-sm btn-danger"><FaTrashAlt /></Link>
                                    </td>
                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default TopicShow;
