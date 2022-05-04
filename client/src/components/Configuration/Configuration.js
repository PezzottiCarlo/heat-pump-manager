import "./Configuration.css";
import { useState, useEffect } from "react";
import Switch from "react-switch";
import { BsTrash } from "react-icons/bs";
import Util from "./Util";


const Configuration = ({ configuration, callback }) => {
    const [hotCold, setHot] = useState((configuration.state) ? configuration.hotCold : false);
    const [state, setState] = useState(configuration.state);

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

    const handleDelete = async () => {
        const result = await Util.remove(configuration.index, configuration.profileName);
        if (result.success) callback()
    }


    return (
        <div className="configuration-cnt">
            <div className="configuration">
                <div className="configuration-title small icon">
                    {Util.getIcon((configuration.start + configuration.end) / 2)}
                </div>
                <div className="configuration-hour big">
                    <div>Dalle: {Util.secondToHour(configuration.start)} alle: {Util.secondToHour(configuration.end)}</div>
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
                <div onClick={handleDelete} className="configuration-trash small icon danger">
                    <BsTrash />
                </div>
            </div>
        </div>
    );
}

export default Configuration;