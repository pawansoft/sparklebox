import React from "react";
import "./middleFooter.scss";

const usefulLink = () => {
    return(
        <div className = "useful-link-container">
            <h3>Useful Links</h3>
                <label className = "links">My Account</label>
                <label className = "links">Cart</label>
                <label className = "links">Art and Craft</label>
                <label className = "links"> teracy</label>
                <label className = "links">Math</label>
                <label className = "links">Science</label>
        </div>
    )
}

export default usefulLink;