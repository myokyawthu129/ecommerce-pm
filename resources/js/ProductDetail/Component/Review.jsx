import React from "react";
import StarRatings from "react-star-ratings";
const Review = ({review}) => {
    return (
        <div>
             <div className="woocommerce-tabs wc-tabs-wrapper bg-vista-white">
                    <div className="container">
                        <div className="reviews-wrapper">
                        {/* <h4 className="mb--60">Reviews</h4> */}
                        <div className="row">
                            <div className="col-lg-6 mb--40">
                            {/* Start Comment Respond  */}
                            {
                                window.auth && (
                                    <div className="comment-respond pro-des-commend-respond mt--0">
                                    <h5 className="title mb--30">Add a Review</h5>
                                    <p>Your email address will not be published. Required fields are marked *</p>
                                    <div className="rating-wrapper d-flex-center mb--40">
                                    Your Rating <span className="require">*</span>
                                    <div className="reating-inner ml--20">
                                        <StarRatings
                                            starHoverColor="#ffca0f"
                                            changeRating={(rateCount)=>alert(rateCount)}
                                            numberOfStars={5}
                                            name="rating"
                                        />
                                    </div>
                                    </div>
                                    <form action="#">
                                    <div className="row">
                                        <div className="col-12">
                                        <div className="form-group">
                                            <label>Other Notes (optional)</label>
                                            <textarea name="message" placeholder="Your Comment" defaultValue={""} />
                                        </div>
                                        </div>
                                        <div className="col-lg-12">
                                        <div className="form-submit">
                                            <button type="submit" id="submit" className="axil-btn btn-bg-primary w-auto">Send Message</button>
                                        </div>
                                        </div>
                                    </div>
                                    </form>
                                </div>
                                )
                            }

                            {/* End Comment Respond  */}
                            </div>
                            <div className="col-lg-6 mb--40">
                            <div className="axil-comment-area pro-desc-commnet-area">
                                <h5 className="title">01 Review for this product</h5>
                                <ul className="comment-list">
                                    {review.map(d => (

                                        <li className="comment" key={d.id}>
                                        <div className="comment-body">
                                        <div className="single-comment">
                                            <div className="comment-img">
                                            <img src="" alt="Author Images" />
                                            </div>
                                            <div className="comment-inner">
                                            <h6 className="commenter">
                                                <a className="hover-flip-item-wrapper" href="#">
                                                <span className="hover-flip-item">
                                                    <span data-text="Cameron Williamson">{d.user.name}</span>
                                                </span>
                                                </a>
                                                <span className="commenter-rating ratiing-four-star">
                                                <StarRatings
                                                    rating={d.rating}
                                                    starRatedColor="#ffca0f"
                                                    starDimension="30px"
                                                    numberOfStars={5}
                                                    name="rating"
                                                />
                                                </span>
                                            </h6>
                                            <div className="comment-text">
                                                <p>{d.review}</p>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        </li>

                                    ))}


                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
        </div>
    );
};


export default Review;
