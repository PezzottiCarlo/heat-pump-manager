import "./Loading.css"
import {SpinnerDotted} from 'spinners-react'

const Loading = () => {

    return (
        <div className="loading-page">
            <div className="loading-container">
                <SpinnerDotted color="#cdd9e5"/>
            </div>
        </div>
    )
}
export default Loading