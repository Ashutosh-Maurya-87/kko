import React from 'react';

const NewsLetter = () =>{
    return(
        <>
        <div className="newsletter">
            <div className="container">
                <div className="section-header">
                    <h2>Subscribe Our Newsletter</h2>
                </div>
                <div className="form">
                    <input className="form-control" placeholder="Email here" />
                    <button className="btn">Submit</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default NewsLetter;