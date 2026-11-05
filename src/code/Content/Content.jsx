import "../../assets/css/Content.css";
import LeftContent from "./LeftContent.jsx";
import RightContent from "./RightContent.jsx";

function Content({ french }) {
    return (
        <div className="content">
            <LeftContent french={french} />
            <RightContent french={french} />
        </div>
    );
}

export default Content;
