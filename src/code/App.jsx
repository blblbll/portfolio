import { useState } from "react";
import "../assets/css/App.css";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import Content from "./Content/Content.jsx";

function App() {
    const [french, setFrench] = useState(true);

    return (
        <>
            <Header french={french} />
                <Content french={french} />
            <Footer french={french} setFrench={setFrench} />
        </>
    );
}

export default App;
