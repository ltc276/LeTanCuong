
import { Link, useParams } from "react-router-dom";
import categoryservice from "../../service/CategorySevice";
import { useEffect, useState } from "react";
import { urlImage } from "../../config";
import Moment from 'moment';



function CategoryShow() {
    const { id } = useParams("id");
    const [category, setCategorys] = useState([]);
    useEffect(
        function () {
            (async function () {
                await categoryservice.getById(id).then(function (result) {
                    setCategorys(result.data.data);
                });
            })();
        },
        [id]
    );
    console.log(category);
    return (
        <div className="container-fluid pb-5">
            <div className="col-lg-7 h-auto mb-30"></div>
            <div className="row px-xl-5">
                <div className="col-lg-5 mb-30">
                    <div id="product-carousel" className="carousel slide">
                        <div className="carousel-inner bg-light">
                            <div className="carousel-item active">
                                <img className="w-100 h-100" src={urlImage + 'category/' + category.image} alt="hinh.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 h-auto mb-30">
                    <div className="h-100 bg-light p-30">
                        <h3>Tên: {category.name}</h3>
                        <h3 className="font-weight-semi-bold mb-4">Status: {category.status}</h3>
                        <p className="mb-4">{Moment(category.created_at).format('DD-MM-yyyy hh:mm')}</p>
                        <div className="d-flex mb-3">
                            <strong className="text-dark mr-3">Metakey:</strong>
                            <p className="mb-4">{category.metakey}</p>
                        </div>
                        <div className="d-flex mb-4">
                            <strong className="text-dark mr-3">Metadesc:</strong>
                            <p className="mb-4">{category.metadesc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoryShow;
