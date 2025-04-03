const URL = "https://api.github.com/graphql"
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const getPreviewImage = async (repo) => {
    const query = `
        {
            repository(owner: "Vincenzofdg", name: "${repo}") {
            openGraphImageUrl
            }
        }
    `;

    try {
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${GITHUB_TOKEN}`,
            },
            body: JSON.stringify({ query }),
        });

        const jsonResponse = await response.json();

        if (jsonResponse.data?.repository?.openGraphImageUrl) {
            return jsonResponse.data.repository.openGraphImageUrl
        }
    } catch (err) {
        console.error(err);
    }
}

export default getPreviewImage;
