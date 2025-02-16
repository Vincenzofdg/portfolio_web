import React, { useContext, useState, useEffect } from "react";
import Header from "../Components/Header";
import { Global } from "../Context";

import Project from "../Components/Project";
import Divider from "../Components/Divider";

import StaticData from "../Projects.js";

function Projects() {
    const [data, setData] = useState([]);
    const { toggle } = useContext(Global);

    useEffect(() => {
        setData(StaticData);
    }, []);

    return !toggle ? (
        <>
            <Header />
            {data.map((p, i) => {
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
