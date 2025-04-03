import { useState, useEffect } from "react";
import { Global as Context } from ".";

import {githubUserInformation, githubUserRepositories} from "../Services/github.js"

function MyProvider({ children }) {
    const [menu, SetMenu] = useState("/");
    const [user, setUser] = useState({});
    const [toggle, SetToggle] = useState(false);

    useEffect(() => {
        async function fetchUserDataFromGitHub() {
            const getUserInformation = await githubUserInformation();
            const getUserRepositories = await githubUserRepositories();

            const userObj = {
                ...getUserInformation,
                repositories: getUserRepositories
            }

            setUser(userObj);
        }

        fetchUserDataFromGitHub();
    }, [])

    const obj = {
        menu,
        SetMenu,
        toggle,
        SetToggle,
        user,
    };

    return <Context.Provider value={obj}>{children}</Context.Provider>;
}

export default MyProvider;
