import "../../assets/css/Content.css";
import "../../assets/css/App.css";
import * as Separator from "@radix-ui/react-separator";
import HoverInfo from "../Elements/HoverInfo.jsx";
import RichText from "../Elements/RichText.jsx";
import texts from "../../assets/texts/LeftContent.json";
import cLogo from "../../assets/images/C_logo.png";
import pythonLogo from "../../assets/images/Python_logo.png";
import javaLogo from "../../assets/images/Java_logo.png";
import sqlLogo from "../../assets/images/Sql_logo.png";
import reactLogo from "../../assets/images/React_logo.png";
import phpLogo from "../../assets/images/Php_logo.png";
import gitLogo from "../../assets/images/Git_logo.png";
import linuxLogo from "../../assets/images/Linux_logo.png";

function LeftContent({ french }) {
    const t = french ? texts.fr : texts.en;
    return (
        <div className="left-content">
            <div className="name">Hortense</div>
            <div className="name">Isoré</div>

            <Separator.Root className="separator" />

            <p className="bio">{t.bio1} <strong>{t.bio2}</strong> {t.bio3}</p>

            <Separator.Root className="separator" />
            
            <p className="title">{t.skills}</p>

            <div className="skills-grid">
                <HoverInfo label={<img src={cLogo} alt="C" />}>
                    <p>{t.CTitle}</p>
                    <p><RichText text={t.CLegend} /></p>
                </HoverInfo>

                <HoverInfo label={<img src={pythonLogo} alt="Python" />}>
                    <p>{t.PythonTitle}</p>
                    <p><RichText text={t.PythonLegend} /></p>
                </HoverInfo>

                <HoverInfo label={<img src={javaLogo} alt="Java" />}>
                    <p>{t.JavaTitle}</p>
                    <p><RichText text={t.JavaLegend} /></p>
                </HoverInfo>

                <HoverInfo label={<img src={sqlLogo} alt="SQL" />}>
                    <p>{t.SQLTitle}</p>
                    <p><RichText text={t.SQLLegend} /></p>
                </HoverInfo>

                <HoverInfo label={<img src={reactLogo} alt="React" />}>
                    <p>{t.ReactTitle}</p>
                    <p><RichText text={t.ReactLegend} /></p>
                </HoverInfo>

                <HoverInfo label={<img src={phpLogo} alt="PHP" />}>
                    <p>{t.PHPTitle}</p>
                    <p><RichText text={t.PHPLegend} /></p>
                </HoverInfo>

                <HoverInfo label={<img src={gitLogo} alt="Git" />}>
                    <p>{t.GitTitle}</p>
                    <p><RichText text={t.GitLegend} /></p>
                </HoverInfo>

                <HoverInfo label={<img src={linuxLogo} alt="Linux" />}>
                    <p>{t.LinuxTitle}</p>
                    <p><RichText text={t.LinuxLegend} /></p>
                </HoverInfo>
            </div>

            <Separator.Root className="separator" />

            <div>
                <p className="title">{t.ContactTitle}</p>
                <a className="clickable" href="mailto:contact@hrtns.fr">
                    contact@hrtns.fr
                </a>
            </div>

            <div className="mobility">
                <p className="title" style={{ marginTop: '6px' }}>
                    {t.mobilityLegend}
                </p>
                <p>{t.mobility}</p>
            </div>

            <a className="cv-button" href={`/hortense_isore_cv_${french ? 'fr' : 'en'}.pdf`} download>

            <span>{t.cvButton}</span>
            <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <path d="M12 3v12" />
                <path d="m7 11 5 5 5-5" />
                <path d="M4 21h16" />
            </svg>
</a>


        </div>
    );
}

export default LeftContent;
