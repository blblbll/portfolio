import { useEffect, useRef } from "react";
import * as Separator from "@radix-ui/react-separator";
import * as Progress from "@radix-ui/react-progress";
import "../../assets/css/Content.css";
import "../../assets/css/RightContent.css";
import imgFractaLens from "../../assets/images/Fractalens.gif";
import imgRpg from "../../assets/images/rpg.gif";
import imgPortfolio from "../../assets/images/portfolio.jpg";
import imgSokoban from "../../assets/images/sokoban.gif";
import texts from "../../assets/texts/RightContent.json";
import RichText from "../Elements/RichText.jsx";

// le JSON contient le nom du fichier, on retrouve ici l'image importée
const images = {
    "Fractalens.gif": imgFractaLens,
    "rpg.gif": imgRpg,
    "portfolio.jpg": imgPortfolio,
    "sokoban.gif": imgSokoban,
};

function RightContent({ french }) {
    const t = french ? texts.fr : texts.en;
    const railRef = useRef(null);
    const areaRef = useRef(null);
    const indicatorRef = useRef(null);
    const count = t.projectItems.length;

    // liste infinie
    useEffect(() => {
        const rail = railRef.current;
        const area = areaRef.current;   // toute la partie droite

        // largeur d'une copie de la liste
        const period = () => rail.children[count].offsetLeft - rail.children[0].offsetLeft;

        let pos = 2 * period();   // position affichée (début de la copie du milieu)
        let target = pos;         // position visée par la molette
        let raf = null;

        rail.scrollLeft = pos;

        // renvoie dans la copie du milieu
        const wrap = () => {
            const p = period();
            if (pos < 2 * p) { pos += p; target += p; }
            else if (pos >= 3 * p) { pos -= p; target -= p; }
        };

        // barre de progression : modifiée directement, sans re-render React (plus fluide)
        const updateBar = () => {
            const p = period();
            const percent = (((rail.scrollLeft - 2 * p) % p + p) % p) / p * 100;
            indicatorRef.current.style.transform = `translateX(-${100 - percent}%)`;
        };

        // glisse doucement vers la cible
        const tick = () => {
            pos += (target - pos) * 0.1;
            if (Math.abs(target - pos) < 0.5) pos = target;
            wrap();
            rail.scrollLeft = pos;
            raf = pos === target ? null : requestAnimationFrame(tick);
        };

        const onWheel = (e) => {
            if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;   // trackpad horizontal : natif
            if (window.matchMedia("(max-width: 800px)").matches) return;   // sur mobile, la page défile normalement
            e.preventDefault();
            target += e.deltaMode === 1 ? e.deltaY * 40 : e.deltaY;
            if (!raf) {
                pos = rail.scrollLeft;
                raf = requestAnimationFrame(tick);
            }
        };

        // défilement au doigt / trackpad
        const onScroll = () => {
            updateBar();
            if (!raf) {
                pos = rail.scrollLeft;
                target = pos;
                const before = pos;
                wrap();
                if (pos !== before) rail.scrollLeft = pos;
            }
        };

        area.addEventListener("wheel", onWheel, { passive: false });
        rail.addEventListener("scroll", onScroll);
        updateBar();

        return () => {
            cancelAnimationFrame(raf);
            area.removeEventListener("wheel", onWheel);
            rail.removeEventListener("scroll", onScroll);
        };
    }, [count]);

    return (
        <div className="right-content" ref={areaRef}>
            <div className="up-side">
                <p className="title">{t.journey}</p>

                <div className="journey-cols">
                    <div>
                        <p className="title">{t.education}</p>
                        {t.educationItems.map((item) => (
                            <div className="journey-item" key={item.name}>
                                <p className="item-name">{item.name}</p>
                                <p className="item-info">{item.info}</p>
                            </div>
                        ))}
                    </div>

                    <div>
                        <p className="title">{t.internships}</p>
                        {t.internshipItems.map((item) => (
                            <div className="journey-item" key={item.name}>
                                <p className="item-name">{item.name}</p>
                                <p className="item-info">{item.info}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Separator.Root className="separator" />

            <div className="down-side">
                <div className="projects-header">
                    <p className="title">{t.projects}</p>
                </div>

                <div className="projects-rail" ref={railRef}>
                    {[0, 1, 2, 3, 4].flatMap((copy) =>
                        t.projectItems.map((project, index) => (
                            <div
                                className="project-card"
                                key={`${copy}-${index}`}
                                aria-hidden={copy !== 2}
                            >
                                <div className="project-thumb">
                                    {project.image && <img src={images[project.image]} alt="" />}

                                    {/* texte qui apparaît sur l'image au survol */}
                                    <div className="project-overlay">
                                        <p className="item-info">
                                            <RichText text={project.hover ?? project.info} />
                                        </p>
                                        {project.link && (
                                            <a
                                                className="project-link"
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                tabIndex={copy !== 2 ? -1 : undefined}
                                            >
                                                {t.projectsLink} ↗
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <p className="item-name">{project.name}</p>
                                <p className="item-info">{project.info}</p>
                            </div>
                        ))
                    )}
                </div>

                <Progress.Root className="progress-root">
                    <Progress.Indicator className="progress-indicator" ref={indicatorRef} />
                </Progress.Root>

            </div>
        </div>
    );
}

export default RightContent;
