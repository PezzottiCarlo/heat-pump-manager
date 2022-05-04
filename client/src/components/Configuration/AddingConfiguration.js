import "./Configuration.css";
import { useState, useEffect } from "react";
import { BsCheckLg } from "react-icons/bs";
import Switch from "react-switch";
import TimeField from 'react-simple-timefield';

const AddingConfiguration = () => {

    const [hotCold, setHot] = useState(false);
    const [state, setState] = useState(true);

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

    return (
        <div className="configuration-cnt">
            <div className="configuration">
                <div className="configuration-title small icon">
                </div>
                <div className="configuration-hour big">
                    <div>
                        <span>Dalle:</span><pre> </pre><TimeField
                            onChange={(event, value) => { }}
                            inputRef={(ref) => { }}
                            colon=":"
                        />
                        <span>alle:</span><pre> </pre><TimeField
                            onChange={(event, value) => { }}
                            inputRef={(ref) => { }}
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
                <div className="configuration-trash small icon safe">
                    <BsCheckLg />
                </div>
            </div>
        </div>
    );
}

export default AddingConfiguration;