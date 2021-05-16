import React from 'react';
import {Link} from 'react-router-dom';

const Blog = () =>{
    return (
        <>
          <div className="blog">
            <div className="container">
                <div className="section-header">
                    <h2>Latest From Blog</h2>
                </div>
                <div className="owl-carousel blog-carousel">
                    <div className="blog-item">
                        <img src="img/blog-1.jpg" alt="Blog" />
                        <h3>Lorem ipsum dolor</h3>
                        <div className="meta">
                            <i className="fa fa-list-alt"></i>
                            <Link to="">Civil Law</Link>
                            <i className="fa fa-calendar-alt"></i>
                            <p>01-Jan-2045</p>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
                        </p>
                        <Link className="btn" to="">Read More <i className="fa fa-angle-right"></i></Link>
                    </div>
                    <div className="blog-item">
                        <img src="img/blog-2.jpg" alt="Blog" />
                        <h3>Lorem ipsum dolor</h3>
                        <div className="meta">
                            <i className="fa fa-list-alt"></i>
                            <Link to="">Family Law</Link>
                            <i className="fa fa-calendar-alt"></i>
                            <p>01-Jan-2045</p>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
                        </p>
                        <Link className="btn" to="">Read More <i className="fa fa-angle-right"></i></Link>
                    </div>
                    <div className="blog-item">
                        <img src="img/blog-3.jpg" alt="Blog" />
                        <h3>Lorem ipsum dolor</h3>
                        <div className="meta">
                            <i className="fa fa-list-alt"></i>
                            <Link to="">Business Law</Link>
                            <i className="fa fa-calendar-alt"></i>
                            <p>01-Jan-2045</p>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
                        </p>
                        <Link className="btn" to="">Read More <i className="fa fa-angle-right"></i></Link>
                    </div>
                    <div className="blog-item">
                        <img src="img/blog-1.jpg" alt="Blog" />
                        <h3>Lorem ipsum dolor</h3>
                        <div className="meta">
                            <i className="fa fa-list-alt"></i>
                            <Link to="">Education Law</Link>
                            <i className="fa fa-calendar-alt"></i>
                            <p>01-Jan-2045</p>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
                        </p>
                        <Link className="btn" to="">Read More <i className="fa fa-angle-right"></i></Link>
                    </div>
                    <div className="blog-item">
                        <img src="img/blog-2.jpg" alt="Blog" />
                        <h3>Lorem ipsum dolor</h3>
                        <div className="meta">
                            <i className="fa fa-list-alt"></i>
                            <Link to="">Criminal Law</Link>
                            <i className="fa fa-calendar-alt"></i>
                            <p>01-Jan-2045</p>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
                        </p>
                        <Link className="btn" to="">Read More <i className="fa fa-angle-right"></i></Link>
                    </div>
                    <div className="blog-item">
                        <img src="img/blog-3.jpg" alt="Blog" />
                        <h3>Lorem ipsum dolor</h3>
                        <div className="meta">
                            <i className="fa fa-list-alt"></i>
                            <Link to="">Cyber Law</Link>
                            <i className="fa fa-calendar-alt"></i>
                            <p>01-Jan-2045</p>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
                        </p>
                        <Link className="btn" to="">Read More <i className="fa fa-angle-right"></i></Link>
                    </div>
                    <div className="blog-item">
                        <img src="img/blog-1.jpg" alt="Blog" />
                        <h3>Lorem ipsum dolor</h3>
                        <div className="meta">
                            <i className="fa fa-list-alt"></i>
                            <Link to="">Business Law</Link>
                            <i className="fa fa-calendar-alt"></i>
                            <p>01-Jan-2045</p>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
                        </p>
                        <Link className="btn" to="">Read More <i className="fa fa-angle-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Blog;