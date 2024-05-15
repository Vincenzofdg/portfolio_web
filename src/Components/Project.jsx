import "../Style/Project.css"

import Apple from "../Assets/Apple.png";
import Google from "../Assets/Google.png";
import GitHub from "../Assets/GitHub.png";

function Project({data}) {
  const { name, about, skill, apple, google, repo, icon } = data;

  return (
    <div className="project-card">
      <div className="project-container">
        <div className="project-presentation">
          <img id="project-icon" src={icon} alt="Project Icon" />
          <p id="project-name">{name}</p>
        </div>
        <div className="project-info">
          <p id="project-about">{about}</p>
          <div className="project-stats">
            {skill[0].length > 0 && (
              <div className="project-stat">
                <h3 id="project-topic">Knowledge</h3>
                <div>
                  {
                    skill[0].map((e, i) => <p id="project-about" key={`sk-1-${i}`}>• {e}</p>)
                  }
                </div>
              </div>
            )}
            {skill[1].length > 0 && (
              <div className="project-stat">
                <h3 id="project-topic">Dependencies</h3>
                  <div>
                    {
                      skill[1].map((e, i) => <p id="project-about" key={`sk-2-${i}`}>• {e}</p>)
                    }
                  </div>
              </div>
            )}
          </div>

          <div className="project-stores">
            <img id="project-store" src={Apple} alt="Apple Store" onClick={() => window.open(apple, '_blank')} />
            <img id="project-store" src={Google} alt="Google Play Store Store" onClick={() => window.open(google, '_blank')} />
            <img id="project-store" src={GitHub} alt="Source Code" onClick={() => {
              if (!repo || repo.length <= 0) {
                window.alert('Private Repository')
                return
              }
              window.open(repo, '_blank')
            }}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project;