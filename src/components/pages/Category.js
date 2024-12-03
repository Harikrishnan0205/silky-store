import React, { useState } from "react";

import b1 from '../../assets/frame1.png'
import b2 from '../../assets/frame2.png'
import b3 from '../../assets/frame3.png'
import b4 from '../../assets/frame4.png'
import CatgoryList from "./CategoryList";

const Category = () => {

    const [displaydata,ondisplaydata] = useState(null);

    function ongetvalue(event){
        console.log(event.target.alt);
        ondisplaydata(event.target.alt);
        
    }

    return (
        
        <div>
            <div className="category-text">
                <p>Category</p>
                <p>see all</p>
            </div>
            <div className="category-list">
                <div onClick={(event) => ongetvalue(event)}>
                 <img src={b1} alt="Kurti"/>
                </div>
                <div onClick={(event) => ongetvalue(event)}>
                  <img src={b2} alt="gown" />
                </div>
                <div onClick={(event) => ongetvalue(event)}>
                  <img src={b3} alt="saree"/>
                </div>
                <div onClick={(event) => ongetvalue(event)}>
                  <img src={b4} alt="Short Kurti"/>
                </div>
               
            </div>
            <CatgoryList displaydata={displaydata}/>
        </div>
    )

}

export default Category
