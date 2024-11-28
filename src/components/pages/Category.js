import React from "react";

import b1 from '../../assets/frame1.png'
import b2 from '../../assets/frame2.png'
import b3 from '../../assets/frame3.png'
import b4 from '../../assets/frame4.png'

const Category = () => {
    return (
        <div>
            <div className="category-text">
                <p>Category</p>
                <p>see all</p>
            </div>
            <div className="category-list">
                <img src={b1} />
                <img src={b2} />
                <img src={b3} />
                <img src={b4} />
            </div>
        </div>
    )

}

export default Category
