import { BsSunrise, BsSunset, BsSun, BsMoon} from "react-icons/bs";
class Util{

    static async remove(index,profileName){
        let body = {
            index,
            profileName
        }
        let res = await fetch('/profile/conf/remove/',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        if(res.status === 200)
            return res.json();
        return false;
    }

    static getIcon(second){
        if (second > 6 * 3600 && second < 12 * 3600) {
            return <BsSunrise className="sunrise"/>
        } else if (second > 12 * 3600 && second < 18 * 3600) {
            return <BsSun className="day"/>
        } else if (second > 18 * 3600 && second < 24 * 3600) {
            return <BsSunset className="sunset"/>
        } else {
            return <BsMoon className="night"/>
        }
    }

    static secondToHour (second) {
        let hour = Math.floor(second / 3600);
        let min = Math.floor((second - hour * 3600) / 60);
        return (hour < 10 ? "0" + hour : hour) + ":" + (min < 10 ? "0" + min : min);
    }
}

export default Util;