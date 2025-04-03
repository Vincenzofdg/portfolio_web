import React, { useContext, useState, useEffect } from "react";
import "../Style/Project.css";
import Header from "../Components/Header";
import { Global } from "../Context";
import Project from "../Components/Project";
import Divider from "../Components/Divider";

function Projects() {
    const { toggle, user } = useContext(Global);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [filterOptions, setFilterOptions] = useState([]);
    const [subFilter, setSubFilter] = useState([]);
    const [filter, setFilter] = useState("Java");
    const [secondFilter, setSecondFilter] = useState(undefined);

    useEffect(() => {
        const filterNullLanguageRepo = user.repositories.filter(repo => !!repo.language)
        setData(filterNullLanguageRepo);

        const techFilter = filterNullLanguageRepo.reduce((acc, cur) => {
            const checkIsOnList = acc.find(item => item === cur.language);
            if (!checkIsOnList) {
                acc.push(cur.language);
                return acc;
            }
            return acc;
        }, [])

        setFilterOptions(techFilter)
    }, []);

    useEffect(() => {
        if (filter && data.length > 0) {

            const currentFilter = data.filter(repo => repo.language === filter);

            const getSubCategories = currentFilter.reduce((acc, cur) => {
                const subTech = cur.name.split("_")[0]
                const checkIsOnList = acc.find(item => item === subTech);

                if (!checkIsOnList) {
                    acc.push(subTech);
                    return acc;
                }

                return acc;
            }, [])

            if (!secondFilter) {
                setFilteredData(currentFilter)
            } else {
                const currentSecondFilter = currentFilter.filter(repo => repo.name.includes(secondFilter));
                setFilteredData(currentSecondFilter)
            }

            setSubFilter(getSubCategories)
        }
    }, [filter, data, secondFilter]);

    return !toggle ? (
        <>
            <Header />
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <select
                    className="filter-project-container"
                    defaultValue="Java"
                    onChange={(e) => {
                        setSecondFilter(undefined)
                        setFilter(e.target.value)
                    }}
                >
                    {
                        filterOptions.map((option, i) => <option className="filter-project-opt" key={`tech-opt-${i}`} value={option}>{option}</option>)
                    }
                </select>


                <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginTop: "20px"}}>
                    {subFilter.map((stack) => (
                        <div key={stack} style={{marginLeft: "10px"}}>
                            <input
                                type="radio"
                                id={`option-${stack}`}
                                name="options"
                                value={stack}
                                checked={secondFilter === stack}
                                onChange={() => setSecondFilter(stack)}
                            />
                            <label style={{color: "white"}} htmlFor={`option-${stack}`}>{stack}</label>
                        </div>
                    ))}
                </div>
            </div>
            {filteredData.map((p, i) => {
                if (data.length !== i + 1)
                    return (
                        <React.Fragment key={`project-${i}`}>
                            <Project data={p} />
                            <Divider />
                        </React.Fragment>
                    );
                return <Project key={`project-${i}`} data={p} />;
            })}
        </>
    ) : (
        <Header />
    );
}

export default Projects;
