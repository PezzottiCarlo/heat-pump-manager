import "./Configuration.css";
import { useState, useEffect } from "react";
import { BsCheckLg } from "react-icons/bs";
import Switch from "react-switch";
import TimeField from 'react-simple-timefield';
import Util from "./Util";

const AddingConfiguration = ({ profileName, callback }) => {

    const [hotCold, setHot] = useState(false);
    const [state, setState] = useState(true);

    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(0);

    const handleChange = (checked, val) => {
        switch (val) {
            case 0:
                setHot(checked);
                break;
            case 1:
                setState(checked);
                break;
            default:
                break;
        }
    }

    const handleConfirm = async () => {
        console.log(start,end)
        let startTmp = (start===0)?0:Util.hourToSecond(start);
        let endTmp = (end===0)?0:Util.hourToSecond(end);
        let result = await Util.add(startTmp, endTmp, hotCold, state, 0, profileName);
        if (result) {
            callback();
        }
    }

    const customStyle = {
        "backgroundColor": "rgba(255,255,255,.1)",
        "color": "var(--secondary-color)",
        "border": "none",
        "borderRadius": ".25rem",
        "boxShadow": "none",
        "padding": ".25rem",
        "fontSize": "1rem",
        "fontWeight": "bold",
        "width": "3rem",
        "textAlign": "center",
    }

    return (
        <div className="configuration-cnt">
            <div className="configuration">
                <div className="configuration-title small small-icon">
                    {Util.getIcon(Util.hourToSecond(start))}
                </div>
                <div className="configuration-hour big">
                    <div>
                        <span>Dalle:</span><TimeField
                            style={customStyle}
                            onChange={(event, value) => { setStart(value) }}
                            colon=":"
                        />
                        <span>alle:</span><TimeField
                            style={customStyle}
                            onChange={(event, value) => { setEnd(value) }}
                            colon=":"
                        />
                    </div>
                </div>
                <div className="configuration-hot-cold big">
                    <span>Freddo/Caldo</span>
                    <label>
                        <Switch disabled={!state} uncheckedIcon={false} checkedIcon={false} onChange={(e) => { handleChange(e, 0) }} onColor={"#ff8c8c"} offColor={"#7daafe"} checked={hotCold} />
                    </label>
                </div>
                <div className="configuration-state big">
                    <span>Acceso/Spento</span>
                    <label>
                        <Switch uncheckedIcon={false} checkedIcon={false} onChange={(e) => { handleChange(e, 1) }} onColor={"#98ff83"} offColor={"#000"} checked={state} />
                    </label>
                </div>
                <div className="configuration-trash small small-icon safe" onClick={handleConfirm}>
                    <BsCheckLg />
                </div>
            </div>
        </div>
    );
}

export default AddingConfiguration;