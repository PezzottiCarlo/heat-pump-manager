import "./Status.css"
import { useEffect, useState, useRef } from "react"
import { AiOutlineControl, AiOutlineFire } from 'react-icons/ai'
import { CgSmartHomeBoiler } from 'react-icons/cg'

const Status = () => {

    const [state, setState] = useState({ hot: false, cold: false })
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const result = await fetch(`state`);
        if (result.status === 200) {
            const data = await result.json();
            setState(data);

        } else if (result.status === 404) {
            //error
        }
    }

    return (
        <div className="status-page">
            <div className="status-manage">
                <div className={(state.cold)?"cold":"inactive"}>
                    <CgSmartHomeBoiler className="icon" />
                </div>
                <div className={(state.cold||state.hot)?"active":"inactive"}>
                    <AiOutlineControl className="icon" />
                </div>
                <div className={(state.hot)?"hot":"inactive"}>
                    <AiOutlineFire className="icon" />
                </div>
            </div>
        </div>
    )
}
export default Status