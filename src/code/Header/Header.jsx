import '../../assets/css/App.css'
import '../../assets/css/Header.css'
import picture from '../../assets/images/picture.jpg'

function Header({french}) {
    let student
    let available
    
    if (french) {
        student = "Étudiante en informatique"
        available = "Disponible pour une alternance ou un stage"
    } else {
        student = "Student in Computer Science"
        available = "Available for an apprenticeship or internship"
    }

    return (
        <header className="side-elem header">
            <div className="identity">
                <img className="pfp" src={picture} alt="Hortense Isoré" />
                <div className="identity-text">
                    <p className="imptext">Hortense Isoré</p>
                    <p className="">{student}</p>
                </div>
            </div>
            <span className="status">
                <span className="status-dot"></span>
                <span className="imptext">{available}</span>
            </span>
        </header>
    )
}

export default Header
