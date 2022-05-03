import "./Configuration.css";
import { useState, useEffect } from "react";


const Configuration = ({ configuration }) => {

    return (
        <div className="configuration-cnt">
            <div className="configuration">
                <div className="configuration-hour big">
                    <div>Start: {configuration.start} End: {configuration.end}</div>
                </div>
            </div>
        </div>
    );
}

export default Configuration;