import "../Style/Project.css";

import Apple from "../Assets/Apple.png";
import Google from "../Assets/Google.png";
import Web from "../Assets/Web.png";
import Github from "../Assets/Technologies/Git.svg";

function Project({ data }) {
    // const { name, about, skill, apple, google, repo, icon } = data;

    return (
        <div className="project-card">
            <div className="project-container">
                <div className="project-presentation">
                    <img id="project-icon" src={data.icon} alt="Project Icon" />
                </div>
                <div className="project-info">
                    <p id="project-name">{data.name}</p>
                    <p id="project-about">{data.about}</p>
                    <div className="project-stats">
                        <div className="project-stat">
                            {data.skill?.map((e, i) => (
                                <p id="project-topics" key={`sk-1-${i}`}>
                                    {e}
                                </p>
                            ))}
                        </div>
                        <div className="project-stores">
                            {data?.google && (
                                <img
                                    id="project-store"
                                    src={Google}
                                    alt="Google Play Store Store"
                                    onClick={() =>
                                        window.open(data.google, "_blank")
                                    }
                                />
                            )}
                            {data?.apple && (
                                <img
                                    id="project-store"
                                    src={Apple}
                                    alt="Apple Store"
                                    onClick={() =>
                                        window.open(data.apple, "_blank")
                                    }
                                />
                            )}
                            {data?.webLink && (
                                <img
                                    id="project-store"
                                    src={Web}
                                    alt="Apple Store"
                                    onClick={() =>
                                        window.open(data.webLink, "_blank")
                                    }
                                />
                            )}

                            <img
                                id="project-store"
                                src={Github}
                                alt="Source Code"
                                onClick={() => {
                                    if (!data.repo || data.repo.length <= 0) {
                                        window.alert("Private Repository");
                                        return;
                                    }
                                    window.open(data.repo, "_blank");
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
