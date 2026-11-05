import '../../assets/css/App.css'
import '../../assets/css/Footer.css'

function Footer({french, setFrench}) {
    return (
    <>
    <div className="side-elem footer">
        <p className="footer-elem">2026 Hortense Isoré</p>
        <div className="status footer-elem">
            <p className={`clickable ${french ? "selected-elem" : ""}`} onClick={() => setFrench(true)}>
                Fr
            </p>
            
            <p> / </p>
            
            <p className={`clickable ${!french ? "selected-elem" : ""}`} onClick={() => setFrench(false)}>
                En
            </p>
        </div>
    </div>
    </>
    )
}

export default Footer
