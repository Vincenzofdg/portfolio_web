import {useEffect, useState} from "react";
import "../Style/Project.css";
import Download from "../Assets/Download.png";
import Web from "../Assets/Web.png";
import Github from "../Assets/Technologies/Git.svg";
import getPreviewImage from "../Hooks/getPreviewImage.js";

function Project({ data }) {
    const [imageUrl, setImageUrl] = useState(undefined);
    const { name, description, topics, homepage, html_url, default_branch } = data;

    useEffect(() => {
        async function loadImage() {
            const previewImgRequest = await getPreviewImage(name)
            setImageUrl(previewImgRequest)
        }

        loadImage();
    }, []);

    return (
        <div className="project-card">
            <div className="project-container">
                <div className="project-presentation">
                    <img id="project-icon" src={imageUrl} alt="Project Icon" />
                </div>
                <div className="project-info">
                    <p id="project-name">{name.split("_").slice(1).join(" ")}</p>
                    <p id="project-about">{description}</p>
                    <div className="project-stats">
                        <div className="project-stat">
                            {topics.map((e, i) => (
                                <p id="project-topics" key={`sk-1-${i}`}>
                                    {e}
                                </p>
                            ))}
                        </div>
                        <div className="project-stores">
                            <img
                                id="project-store"
                                src={Download}
                                alt="Google Play Store Store"
                                onClick={() =>
                                    window.open(html_url + "/archive/refs/heads/" + default_branch + ".zip", "_blank")
                                }
                            />
                            {homepage && (
                                <img
                                    id="project-store"
                                    src={Web}
                                    alt="Apple Store"
                                    onClick={() =>
                                        window.open(homepage, "_blank")
                                    }
                                />
                            )}
                            <img
                                id="project-store"
                                src={Github}
                                alt="Source Code"
                                onClick={() => {
                                    // if (!data.repo || data.repo.length <= 0) {
                                    //     window.alert("Private Repository");
                                    //     return;
                                    // }
                                    window.open(html_url, "_blank");
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
