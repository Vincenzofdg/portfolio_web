const API = "https://api.github.com/users/Vincenzofdg";

export const githubUserInformation = async () => {
    const result = await fetch(API);
    return await result.json();
};

export const githubUserRepositories = async () => {
    const result = await fetch(API + "/repos");
    return await result.json();


    // const repoInfo = data.reduce((acc, cur) => {
    //     const portfolioWeb = cur.name === "vincenzofdg.github.io";
    //     const githubReadme = cur.name === "vincenzofdg";
    //
    //     if (!!portfolioWeb || !!githubReadme) return acc;
    //
    //     const nameFormated = cur.name.split(" ").join("_");
    //     const rawContent = `https://raw.githubusercontent.com/${user.user}/${nameFormated}/master/`;
    //
    //     const repObj = {
    //         name: cur.name.replace("_", " "),
    //         repo: cur.html_url,
    //         description: cur.description,
    //         web: cur.homepage,
    //         topics: cur.topics,
    //         readme: rawContent + "README.md",
    //         cover: rawContent + "cover.png",
    //         gif: rawContent + "preview.gif",
    //         download: `https://github.com/${user.user}/${nameFormated}/archive/refs/heads/master.zip`,
    //     };
    //     acc.push(repObj);
    //     return acc;
    // }, []);

    // return repoInfo;
};
