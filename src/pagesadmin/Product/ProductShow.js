import { Link, useParams } from "react-router-dom";
import categoryservice from "../../service/CategorySevice";
import { MdAdd } from "react-icons/md";
import { FaRegEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { urlImage } from "../../config";
import productservice from "../../service/ProductSevice";



function ProductShow() {
    const { id } = useParams("id");
    const [product, setProducts] = useState([]);
    useEffect(
        function () {
            (async function () {
                await productservice.getById(id).then(function (result) {
                    setProducts(result.data.data);
                });
            })();
        },
        [id]
    );
    console.log(product);
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">Thương hiệu</strong>

                    </div>
                    <div className="col-6 text-end">

                        <Link className="btn btn-sm btn-success" to="/admin/product/create"><MdAdd />Thêm</Link>

                    </div>
                    <div className="card-body">
                        <table className="table table-striped table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Hình</th>
                                    <th>Tên thương hiệu</th>
                                    <th>Slug</th>
                                    <th>Chi tiết</th>
                                    <th>Giá</th>
                                    <th>Giá sale</th>
                                    <th>Category_id</th>
                                    <th>Chức năng</th>
                                    <th>ID</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr >
                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    <td>
                                        <img src={urlImage + 'product/' + product.image} alt="hinh.png" className="img-fluid" width="50px" height="50px" />
                                    </td>
                                    <td>{product.name}</td>
                                    <td>
                                        {product.slug}
                                    </td>
                                    <td>
                                        {product.detail}
                                    </td>
                                    <td>
                                        {product.price}
                                    </td>
                                    <td>
                                        {product.price_sale}
                                    </td>
                                    <td>
                                        {product.category_id}
                                    </td>
                                    <td>
                                        <Link className="btn btn-sm btn-info me-2" to={'/admin/product/show/' + product.id}><FaRegEye /></Link>
                                        <Link className="btn btn-sm btn-info me-2" to={'/admin/product/update/' + product.id}><FaEdit /></Link>
                                    </td>
                                    <td>
                                        {product.id}
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

export default ProductShow;