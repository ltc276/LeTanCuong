import React from "react";
import { useEffect, useState } from "react";
import Moment from 'moment';
import productservice from "../../service/ProductSevice";
import { urlImage } from "../../config";

function AddProduct() {
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState([4]);
    useEffect(function () {
        (async function () {
            await productservice.getProductAll(limit, 1)
                .then(function (result) {
                    setProducts(result.data.products);
                }
                );
        })();
    }, [limit]);
    return (


        
            products.map(function (product, index) {
                return (
                    <ul class="list-menu" >
                        <li><a href="" style={{ display: 'inline-block', width: '150px', whiteSpace: 'normal' }}>{product.name}</a></li>
                    </ul>
                )
            }
            )
        


    )
}

export default AddProduct;