// import React from 'react'
import React, {useEffect, useState} from "react";
import Review from './Component/Review'
import axios from "axios";
import Spiner from "../Component/Spinner";
export default function ProductDetail(){
    const[product, setProduct] = useState({});
    const[loader, setLoader] = useState(true);
    const product_slug = window.product_slug;
    useEffect(()=>{
        axios.get("/api/product/" + product_slug).then(({data}) => {
            setProduct(data.data);
            setLoader(false);
        });
    }, []);
    return (
       <div>
        {loader && <Spiner />}
        {!loader && (
            <main className="main-wrapper" id="root">
                <div className="axil-single-product-area axil-section-gap pb--0 bg-color-white">
                    <div className="single-product-thumb mb--40">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-5 mb--40">
                            <div className="single-product-content">
                            <div className="inner">
                                <h2 className="product-title">{product.name}</h2>
                                <div>
                                    <small className="text-muted">Brand:</small>
                                    <small>{product.brand.name}</small>
                                    <small className="text-muted">Category:</small>
                                    <small className="">{product.category.name}</small>
                                </div>
                                <span className="text-dark">
                                    <strike>{product.discount_price}Ks</strike>
                                </span>
                                <span className="price-amount text-danger">{product.sale_price}Ks</span>
                                <div className="product-rating">
                                <div className="star-rating">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                </div>
                                <div className="review-link">
                                    <a href="#">(<span>2</span> customer reviews)</a>
                                </div>
                                </div>
                                <ul className="product-meta">
                                <li>
                                    <i className="fal fa-check" />Instock: {product.total_quantity}</li>
                                </ul>
                                <p className="description" dangerouslySetInnerHTML={{ __html:product.description, }}></p>
                                <div className="product-variations-wrapper">
                                {/* Start Product Variation  */}
                                <div className="product-variation">
                                    <h6 className="title"> Available Colors:</h6>
                                    <div className="color-variant-wrapper">
                                    <ul className="color-variant">

                                        {
                                            product.color.map(d => (
                                            <li className="text-dark" key={d.id}>
                                                {d.name}
                                                </li>
                                            ))
                                        }

                                    </ul>
                                    </div>
                                </div>
                                {/* End Product Variation  */}
                                {/* Start Product Variation  */}
                                <div className="product-variation product-size-variation">
                                    <h6 className="title">Size:</h6>
                                    <ul className="range-variant">
                                    <li>xs</li>
                                    <li>s</li>
                                    <li>m</li>
                                    <li>l</li>
                                    <li>xl</li>
                                    </ul>
                                </div>
                                {/* End Product Variation  */}
                                </div>
                                {/* Start Product Action Wrapper  */}
                                <div className="product-action-wrapper d-flex-center">
                                {/* Start Quentity Action  */}
                                <div className="pro-qty"><input type="text" defaultValue={1} /></div>
                                {/* End Quentity Action  */}
                                {/* Start Product Action  */}
                                <ul className="product-action d-flex-center mb--0">
                                    <li className="add-to-cart"><a href="cart.html" className="axil-btn btn-bg-primary">Add to Cart</a></li>
                                    <li className="wishlist"><a href="wishlist.html" className="axil-btn wishlist-btn"><i className="far fa-heart" /></a></li>
                                </ul>
                                {/* End Product Action  */}
                                </div>
                                {/* End Product Action Wrapper  */}
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-7 mb--40">
                            <div className="row">
                            <div className="col-lg-10 order-lg-2">
                                <div className="single-product-thumbnail-wrap zoom-gallery">
                                <div className="single-product-thumbnail product-large-thumbnail-3 axil-product">
                                    <div className="thumbnail">
                                    <a href="assets/images/product/product-big-01.png" className="popup-zoom">
                                        <img src="assets/images/product/product-big-01.png" alt="Product Images" />
                                    </a>
                                    </div>
                                    <div className="thumbnail">
                                    <a href="assets/images/product/product-big-02.png" className="popup-zoom">
                                        <img src="assets/images/product/product-big-02.png" alt="Product Images" />
                                    </a>
                                    </div>
                                    <div className="thumbnail">
                                    <a href="assets/images/product/product-big-03.png" className="popup-zoom">
                                        <img src="assets/images/product/product-big-03.png" alt="Product Images" />
                                    </a>
                                    </div>
                                    <div className="thumbnail">
                                    <a href="assets/images/product/product-big-02.png" className="popup-zoom">
                                        <img src="assets/images/product/product-big-02.png" alt="Product Images" />
                                    </a>
                                    </div>
                                </div>
                                <div className="label-block">
                                    <div className="product-badget">20% OFF</div>
                                </div>
                                <div className="product-quick-view position-view">
                                    <a href="assets/images/product/product-big-01.png" className="popup-zoom">
                                    <i className="far fa-search-plus" />
                                    </a>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-2 order-lg-1">
                                <div className="product-small-thumb-3 small-thumb-wrapper">
                                <div className="small-thumb-img">
                                    <img src="assets/images/product/product-thumb/thumb-08.png" alt="thumb image" />
                                </div>
                                <div className="small-thumb-img">
                                    <img src="assets/images/product/product-thumb/thumb-07.png" alt="thumb image" />
                                </div>
                                <div className="small-thumb-img">
                                    <img src="assets/images/product/product-thumb/thumb-09.png" alt="thumb image" />
                                </div>
                                <div className="small-thumb-img">
                                    <img src="assets/images/product/product-thumb/thumb-07.png" alt="thumb image" />
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                   <Review review={product.review}/>
                </div>
            </main>
        )}

       </div>
    )
}
