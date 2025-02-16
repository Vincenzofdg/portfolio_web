import Metrica from "./Assets/Projects/metrica.png";
import MetricaManager from "./Assets/Projects/metrica_manager.png";
import HeyPet from "./Assets/Projects/hey_pet.png";
import GitHunt from "./Assets/Projects/githunt.png";
import BoodGarcom from "./Assets/Projects/bood_garcom.png";

import NodeJs from "./Assets/Projects/NodeJs.png";
import Spring from "./Assets/Projects/Spring.png";

export default [
    {
        name: "Olha Aqui Condominio Backend",
        about: "An intuitive research app streamlining data collection and analysis effectively. It offers a variety of tools for survey creation and implementation, enabling in-depth analysis of results.",
        skill: ["java", "spring boot"],
        repo: "https://github.com/Vincenzofdg/olha_aqui_condominio_backend",
        icon: Spring,
    },
    // {
    //      name: "Pedi Go",
    //      about: "An intuitive research app streamlining data collection and analysis effectively. It offers a variety of tools for survey creation and implementation, enabling in-depth analysis of results.",
    //      skill: ["c#"],
    //      repo: "https://github.com/Vincenzofdg/olha_aqui_condominio_backend",
    //      // icon: Spring,
    // },
    // {
    //      name: "AuMigo",
    //      about: "An intuitive research app streamlining data collection and analysis effectively. It offers a variety of tools for survey creation and implementation, enabling in-depth analysis of results.",
    //      skill: ["c#"],
    //      repo: "https://github.com/Vincenzofdg/olha_aqui_condominio_backend",
    //      // icon: Spring,
    // },
    {
        name: "bood garçom",
        about: "Innovative application, developed to facilitate the management of waiters in bars, restaurants, cafeterias and other establishments that serve customers at tables. bood garçom's proposal is to optimize the flow of orders and deliveries, ensuring more control and agility in service, in addition to providing a more efficient experience for both waiters and establishment managers.\n",
        skill: ["react native", "debounce", "loop request"],
        google: "https://play.google.com/store/apps/details?id=com.bood_command&hl=en-US",
        // repo: "https://github.com/boodinc/bood_command_mobile",
        icon: BoodGarcom,
    },
    {
        name: "Métrica Interviewer",
        about: "An intuitive research app streamlining data collection and analysis effectively. It offers a variety of tools for survey creation and implementation, enabling in-depth analysis of results.",
        skill: ["react native", "forms", "lottie", "axios"],
        google: "https://play.google.com/store/apps/details?id=com.metricas.pesquisa",
        repo: "https://github.com/Vincenzofdg/Metrica_Client",
        icon: Metrica,
    },
    {
        name: "Métrica Manager",
        about: "A dedicated management app providing full control over surveys. It enables managers to view data, track survey progress, and make informed decisions based on detailed result analyses.",
        skill: ["react native", "graphics", "lottie", "axios"],
        google: "https://play.google.com/store/apps/details?id=com.metricas.pesquisa",
        repo: "https://github.com/Vincenzofdg/Metrica_Client",
        icon: MetricaManager,
    },
    {
        name: "Métrica Backend",
        about: "This API provides essential data and functionality for two applications: a survey management app and a research app. It serves as the backbone for handling survey creation, data retrieval, and analysis, ensuring seamless communication between both applications.",
        skill: ["nodejs", "queries", "express", "mysql", "docker"],
        repo: "https://github.com/Vincenzofdg/metrica_backend",
        icon: NodeJs,
    },
    {
        name: "Hey Pet!",
        about: "Whether you're looking to adopt, foster, or simply support animal welfare, Hey Pet! is your one-stop destination for all things furry and fabulous.",
        skill: [
            "react native",
            "hooks",
            "async storage",
            "axios",
            "sequelize",
            "mysql",
        ],
        google: "https://play.google.com/store/apps/details?id=com.hey_pet",
        repo: "https://github.com/Vincenzofdg/hey_pet_app",
        icon: HeyPet,
    },
    {
        name: "DrinkUp",
        about: "Stay hydrated and healthy with DrinkUp, your hydration reminder app. It's your personal H2O companion, dedicated to ensuring you never forget to drink water throughout the day.",
        skill: ["react native", "life cycle", "modals"],
        google: "https://play.google.com/store/apps/details?id=com.drinkupwater",
        repo: "https://github.com/Vincenzofdg/DrinkUP",
        icon: "https://play-lh.googleusercontent.com/m5S2KxJMq9qwL7s7maQaTQDjsA_s6WZrzSalw17zjrAzjbUvVkhBuo7Za84dtT01LQ=w240-h480",
    },
    {
        name: "VKountDown Timer",
        about: "This application functions as a precise and user-friendly stopwatch, allowing users to measure time accurately for various activities. It features start, pause, and reset options, along with lap time tracking for detailed time management.",
        skill: ["react native", "life cycle"],
        google: "https://play.google.com/store/apps/details?id=com.vkountdown_timer",
        repo: "https://github.com/Vincenzofdg/VKountdown_Timer",
        icon: "https://play-lh.googleusercontent.com/lcEOdDunBlrDAiLtDg3nbliLiHBLMkPZzcmc6CMIds6MKlYRvV8WvBZvb8Ih1o8MxYq0=w240-h480",
    },
    {
        name: "GitHunt",
        about: "Enables users to search for GitHub profiles using the GitHub API. By entering a username, it retrieves and displays detailed information about the user's profile, including their name, bio, avatar, repositories, followers, and other public data.",
        skill: [
            "react native",
            "life cycle",
            "promises",
            "debounce",
            "github api",
            "axios",
            "lottie",
        ],
        // google: "https://www.google.com",
        repo: "https://github.com/Vincenzofdg/GitHunt",
        icon: GitHunt,
    },
];
