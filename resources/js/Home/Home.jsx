import axios from "axios";
// import { set } from "lodash";
import React, { useEffect, useState } from "react";
import Spinner from "../Component/Spinner";


export default function Home() {
    const [category, setCategory] = useState([]);
    const [productByCategory, setProductByCategory] = useState([]);
    const [loader, setLoader] = useState(true);
    const [featureProduct, setFeatureProduct] = useState([]);

    const fetchProduct = () => {
        axios.get("/api/home").then((d)=> {
        //   console.log(d.data);
            const {category, featureProduct, productByCategory} = d.data.data;
            // console.log(category);
            setCategory(category);
            setProductByCategory(productByCategory);
            setFeatureProduct(featureProduct);
            setLoader(false);
        });
    };
    useEffect(()=>{
        fetchProduct();
    }, [])
    return (
        <React.Fragment>
            {loader && <Spinner />}
            {
            !loader &&
            <React.Fragment>
        <main className="main-wrapper">


  <div className="container mt-5">
    <div className="axil-categorie-area bg-color-white d-flex justify-content-center gap-5">
        {/* loop category*/}

        {category.map((d) => (
                      <div className="categorie-product w-100" key={d.slug}>
                        <a href={`/product?category=${d.slug}`} className="text-dark d-flex gap-4">
                          <div>
                            <h6 className="cat-title">{d.name}</h6>
                            <div className="text-center">
                                {/* <p className="fs-2">Category One</p> */}
                                <small className="text-center">{d.product_count} items</small>
                            </div>
                          </div>
                          <div>
                            <img src={ d.image_url } width={100} height={100} alt=""/>
                          </div>
                        </a>
                      </div>
                    ))}
    </div>
  </div>
  {/* End Categorie Area  */}
  {/* Start Expolre Product Area  */}
  <div className="axil-product-area bg-color-white axil-section-gap">
    <div className="container">
      <div className="section-title-wrapper">
        <span className="title-highlighter highlighter-primary"> <i className="far fa-shopping-basket" /> Our Products</span>
        <h2 className="title">Explore our Products</h2>
      </div>
      <div className="explore-product-activation slick-layout-wrapper slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide">
        <div className="slick-single-layout">
          <div className="row row--15">
            <div className="col-md-3">

              {featureProduct.map((d) => (
                <a href={`/product/${d.slug}`} key={d.slug}>
                  <div className="border bg-warning p-5 text-center rounded">
                    <img src={d.image_url} width={100} alt="" />
                    <div className="mt-5">
                          <h4 className="text-center mt-4 text-white">{d.name}</h4>
                          <span className="text badge badge-white">{d.sale_price}</span>
                          <span className="text badge badge-danger">
                            <strike>{d.discount_price}ks</strike>
                          </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="col-md-9">
            <div className="row" >
            {
                  productByCategory.map(d => (
                <div className="col-12 col-sm-12 col-lg-12" key={d.slug}>
                  <div className="row mb-5">
                    <div className="col-12">
                      <div className="d-flex justify-content-between align-items-center">
                          <b className="fs-1">{d.name}</b>
                          <a href={`product?category=${d.slug}`} className="text-dark btn btn-warning">View All</a>
                      </div>
                    </div>
                  </div>
                    <div className="row">


                {
                  d.product.map(d => (
                  <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30 text-center" key={d.slug}>
                    <div className="axil-product product-style-one">
                      <div className="thumbnail">
                        <a href={`/product/${d.slug}`}>
                          <img className="main-img" src={d.image_url} alt="Product Images" />
                        </a>
                        <div className="product-hover-action">
                          <ul className="cart-action">
                            <li className="quickview"><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i className="far fa-eye" /></a></li>
                            <li className="select-option">
                              <a href="single-product.html">
                                Add to Cart
                              </a>
                            </li>
                            <li className="wishlist"><a href="wishlist.html"><i className="far fa-heart" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="inner">
                          <div className="product-rating">
                            <span className="icon">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </span>
                          </div>
                          <h5 className="title"><a href="">{d.name}</a></h5>
                          <div className="product-price-variant">
                            <span className="price current-price">{d.sale_price}ks</span>
                            <span className="price old-price">{d.discount_price}ks </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  ))
                }
                 </div>
                </div>
                ))
              }

              </div>

            </div>

          </div>
        </div>
        {/* End .slick-single-layout */}
        {/* <div className="slick-single-layout">
          <div className="row row--15">
            <div className="col-lg-3"></div>
            <div className="col-lg-9">
              <div className="row">
              <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
              <div className="axil-product product-style-one">
                <div className="thumbnail">
                  <a href="single-product.html">
                    <img src="assets/images/product/electric/product-01.png" alt="Product Images" />
                  </a>
                  <div className="label-block label-right">
                    <div className="product-badget">20% Off</div>
                  </div>
                  <div className="product-hover-action">
                    <ul className="cart-action">
                      <li className="quickview"><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i className="far fa-eye" /></a></li>
                      <li className="select-option"><a href="single-product.html">Select Option</a></li>
                      <li className="wishlist"><a href="wishlist.html"><i className="far fa-heart" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="product-content">
                  <div className="inner">
                    <h5 className="title"><a href="single-product.html">Yantiti Leather &amp; Canvas Bags</a></h5>
                    <div className="product-price-variant">
                      <span className="price current-price">$29.99</span>
                      <span className="price old-price">$49.99</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              </div>
            </div>


            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
              <div className="axil-product product-style-one">
                <div className="thumbnail">
                  <a href="single-product.html">
                    <img src="assets/images/product/electric/product-02.png" alt="Product Images" />
                  </a>
                  <div className="product-hover-action">
                    <ul className="cart-action">
                      <li className="quickview"><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i className="far fa-eye" /></a></li>
                      <li className="select-option"><a href="single-product.html">Select Option</a></li>
                      <li className="wishlist"><a href="wishlist.html"><i className="far fa-heart" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="product-content">
                  <div className="inner">
                    <h5 className="title"><a href="single-product.html">3D™ wireless headset</a></h5>
                    <div className="product-price-variant">
                      <span className="price current-price">$29.99</span>
                      <span className="price old-price">$49.99</span>
                    </div>
                    <div className="color-variant-wrapper">
                      <ul className="color-variant">
                        <li className="color-extra-01 active"><span><span className="color" /></span>
                        </li>
                        <li className="color-extra-02"><span><span className="color" /></span>
                        </li>
                        <li className="color-extra-03"><span><span className="color" /></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
              <div className="axil-product product-style-one">
                <div className="thumbnail">
                  <a href="single-product.html">
                    <img src="assets/images/product/electric/product-03.png" alt="Product Images" />
                  </a>
                  <div className="label-block label-right">
                    <div className="product-badget">20% Off</div>
                  </div>
                  <div className="product-hover-action">
                    <ul className="cart-action">
                      <li className="quickview"><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i className="far fa-eye" /></a></li>
                      <li className="select-option"><a href="single-product.html">Select Option</a></li>
                      <li className="wishlist"><a href="wishlist.html"><i className="far fa-heart" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="product-content">
                  <div className="inner">
                    <h5 className="title"><a href="single-product.html">3D™ wireless headset</a></h5>
                    <div className="product-price-variant">
                      <span className="price current-price">$29.99</span>
                      <span className="price old-price">$49.99</span>
                    </div>
                    <div className="color-variant-wrapper">
                      <ul className="color-variant">
                        <li className="color-extra-01 active"><span><span className="color" /></span>
                        </li>
                        <li className="color-extra-02"><span><span className="color" /></span>
                        </li>
                        <li className="color-extra-03"><span><span className="color" /></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
              <div className="axil-product product-style-one">
                <div className="thumbnail">
                  <a href="single-product.html">
                    <img src="assets/images/product/electric/product-04.png" alt="Product Images" />
                  </a>
                  <div className="product-hover-action">
                    <ul className="cart-action">
                      <li className="quickview"><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i className="far fa-eye" /></a></li>
                      <li className="select-option"><a href="single-product.html">Select Option</a></li>
                      <li className="wishlist"><a href="wishlist.html"><i className="far fa-heart" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="product-content">
                  <div className="inner">
                    <h5 className="title"><a href="single-product.html">3D™ wireless headset</a></h5>
                    <div className="product-price-variant">
                      <span className="price current-price">$29.99</span>
                      <span className="price old-price">$49.99</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
              <div className="axil-product product-style-one">
                <div className="thumbnail">
                  <a href="single-product.html">
                    <img src="assets/images/product/electric/product-05.png" alt="Product Images" />
                  </a>
                  <div className="label-block label-right">
                    <div className="product-badget">20% Off</div>
                  </div>
                  <div className="product-hover-action">
                    <ul className="cart-action">
                      <li className="quickview"><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i className="far fa-eye" /></a></li>
                      <li className="select-option"><a href="single-product.html">Select Option</a></li>
                      <li className="wishlist"><a href="wishlist.html"><i className="far fa-heart" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="product-content">
                  <div className="inner">
                    <h5 className="title"><a href="single-product.html">3D™ wireless headset</a></h5>
                    <div className="product-price-variant">
                      <span className="price current-price">$29.99</span>
                      <span className="price old-price">$49.99</span>
                    </div>
                    <div className="color-variant-wrapper">
                      <ul className="color-variant">
                        <li className="color-extra-01 active"><span><span className="color" /></span>
                        </li>
                        <li className="color-extra-02"><span><span className="color" /></span>
                        </li>
                        <li className="color-extra-03"><span><span className="color" /></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
              <div className="axil-product product-style-one">
                <div className="thumbnail">
                  <a href="single-product.html">
                    <img src="assets/images/product/electric/product-06.png" alt="Product Images" />
                  </a>
                  <div className="label-block label-right">
                    <div className="product-badget">20% Off</div>
                  </div>
                  <div className="product-hover-action">
                    <ul className="cart-action">
                      <li className="quickview"><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i className="far fa-eye" /></a></li>
                      <li className="select-option"><a href="single-product.html">Select Option</a></li>
                      <li className="wishlist"><a href="wishlist.html"><i className="far fa-heart" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="product-content">
                  <div className="inner">
                    <h5 className="title"><a href="single-product.html">3D™ wireless headset</a></h5>
                    <div className="product-price-variant">
                      <span className="price current-price">$29.99</span>
                      <span className="price old-price">$49.99</span>
                    </div>
                    <div className="color-variant-wrapper">
                      <ul className="color-variant">
                        <li className="color-extra-01 active"><span><span className="color" /></span>
                        </li>
                        <li className="color-extra-02"><span><span className="color" /></span>
                        </li>
                        <li className="color-extra-03"><span><span className="color" /></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
              <div className="axil-product product-style-one">
                <div className="thumbnail">
                  <a href="single-product.html">
                    <img src="assets/images/product/electric/product-07.png" alt="Product Images" />
                  </a>
                  <div className="label-block label-right">
                    <div className="product-badget">20% Off</div>
                  </div>
                  <div className="product-hover-action">
                    <ul className="cart-action">
                      <li className="quickview"><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i className="far fa-eye" /></a></li>
                      <li className="select-option"><a href="single-product.html">Select Option</a></li>
                      <li className="wishlist"><a href="wishlist.html"><i className="far fa-heart" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="product-content">
                  <div className="inner">
                    <h5 className="title"><a href="single-product.html">3D™ wireless headset</a></h5>
                    <div className="product-price-variant">
                      <span className="price current-price">$29.99</span>
                      <span className="price old-price">$49.99</span>
                    </div>
                    <div className="color-variant-wrapper">
                      <ul className="color-variant">
                        <li className="color-extra-01 active"><span><span className="color" /></span>
                        </li>
                        <li className="color-extra-02"><span><span className="color" /></span>
                        </li>
                        <li className="color-extra-03"><span><span className="color" /></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
              <div className="axil-product product-style-one">
                <div className="thumbnail">
                  <a href="single-product.html">
                    <img src="assets/images/product/electric/product-08.png" alt="Product Images" />
                  </a>
                  <div className="label-block label-right">
                    <div className="product-badget">20% Off</div>
                  </div>
                  <div className="product-hover-action">
                    <ul className="cart-action">
                      <li className="quickview"><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i className="far fa-eye" /></a></li>
                      <li className="select-option"><a href="single-product.html">Select Option</a></li>
                      <li className="wishlist"><a href="wishlist.html"><i className="far fa-heart" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="product-content">
                  <div className="inner">
                    <h5 className="title"><a href="single-product.html">3D™ wireless headset</a></h5>
                    <div className="product-price-variant">
                      <span className="price current-price">$29.99</span>
                      <span className="price old-price">$49.99</span>
                    </div>
                    <div className="color-variant-wrapper">
                      <ul className="color-variant">
                        <li className="color-extra-01 active"><span><span className="color" /></span>
                        </li>
                        <li className="color-extra-02"><span><span className="color" /></span>
                        </li>
                        <li className="color-extra-03"><span><span className="color" /></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div> */}
        {/* End .slick-single-layout */}
      </div>
      <div className="row">
        <div className="col-lg-12 text-center mt--20 mt_sm--0">
          <a href="shop.html" className="axil-btn btn-bg-lighter btn-load-more">View All Products</a>
        </div>
      </div>
    </div>
  </div>
  {/* End Expolre Product Area  */}
        </main>
            </React.Fragment>
            }

</React.Fragment>
    )
}
