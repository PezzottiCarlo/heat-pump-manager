import "./Configuration.css";
import { useState, useEffect } from "react";
import Switch from "react-switch";
import { BsSunrise, BsSunset, BsSun, BsMoon, BsTrash} from "react-icons/bs";


const Configuration = ({ configuration }) => {

    const [hotCold, setHot] = useState((configuration.state && configuration.hot) ? true : (configuration.cold) ? false : false);
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

    const secondToHour = (second) => {
        let hour = Math.floor(second / 3600);
        let min = Math.floor((second - hour * 3600) / 60);
        return (hour < 10 ? "0" + hour : hour) + ":" + (min < 10 ? "0" + min : min);
    }

    const getIcon = (second) => {
        console.log(second);
        if (second > 6 * 3600 && second < 12 * 3600) {
            return <BsSunrise />
        } else if (second > 12 * 3600 && second < 18 * 3600) {
            return <BsSun />
        } else if (second > 18 * 3600 && second < 24 * 3600) {
            return <BsSunset />
        } else {
            return <BsMoon />
        }
    }

    return (
        <div className="configuration-cnt">
            <div className="configuration">
                <div className="configuration-title small icon">
                    {getIcon((configuration.start + configuration.end) / 2)}
                </div>
                <div className="configuration-hour big">
                    <div>Dalle: {secondToHour(configuration.start)} alle: {secondToHour(configuration.end)}</div>
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
                <div className="configuration-trash small icon danger">
                    <BsTrash />
                </div>
            </div>
        </div>
    );
}

export default Configuration;