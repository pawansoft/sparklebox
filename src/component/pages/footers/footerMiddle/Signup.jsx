import React from "react";
import { TextField } from '@material-ui/core';
import "./middleFooter.scss";

class Signup extends React.Component{
    render(){
        return(
            <div>
                <h2>Sign up and get daily best offers</h2>
                <div className = "signup-textbox">
                    <TextField type="text" variant = 'standard' placeholder = "Enter your E-mail Address "/>
                </div>
            </div>
        )
    }
}

export default Signup