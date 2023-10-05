
import React from "react";
import { useEffect, useState } from "react";
import Moment from 'moment';
import { urlImage } from "../../config";
import categoryservice from "../../service/CategorySevice";
import AddProduct from "./AddProduct";

function AllCategory() {
	const [categorys, setCategorys] = useState([]);
	useEffect(function () {
		(async function () {
			await categoryservice.getAll()
				.then(function (result) {
					setCategorys(result.data.data);
				}
				);
		})();
	}, []);
	return (
		<>
			<section class="section-content padding-y">
				<div class="container">

					<nav class="row">
						{categorys.map(function (category, index) {
							return (
								<div class="col-md-3">
									<div class="card card-category">
										<a href="#" class="img-wrap" style={{ background: "#dee4ff" }}>
											<img src={urlImage + 'category/' + category.image}></img>
										</a>
										<div class="card-body">
											<h4 class="card-title"><a href="#">{category.name}</a></h4>
											<AddProduct/>
										</div>
									</div>
								</div>
							)
						})};
					</nav>


				</div>
			</section>
		</>
	);
}

export default AllCategory;