const API = "https://api.github.com/users/Vincenzofdg";

export const githubUserInformation = async () => {
    const result = await fetch(API);
    return await result.json();
};

export const githubUserRepositories = async () => {
    const result = await fetch(API + "/repos");
    return await result.json();
};
