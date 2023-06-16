import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import PhoneEnabledRoundedIcon from "@mui/icons-material/PhoneEnabledRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const socialInfo = [
    {
        social: "karmanpavel.pavlkan@gmail.com",
        icon: <EmailIcon />,
    },
    {
        social: "linkedin.com/in/pavel-karman-8a367b271",
        icon: <LinkedInIcon />,
    },
    {
        social: "https://t.me/Pavlkan",
        icon: <TelegramIcon />,
    },
    {
        social: "8 033 609-58-67",
        icon: <PhoneEnabledRoundedIcon />,
    },
];

export const aboutMyselfInfo = `Start programming in 2020. Graduated from the Rolling Scopes School frontend course and have
experience in project management. In the work process I always try to do my best to delve into task,
to optimize it and deepen my knowledge. As for my hobbies I am fond of listening to music as well as
playing it, watching movies, doing sports and reading fiction from fantasy to classic.`;

export const skills = [
    {
        tech: "HTML/CSS",
        projects: new Map([
            ["Portfolio", "https://rolling-scopes-school.github.io/pavlkan-JSFEPRESCHOOL/portfolio/"],
            ["Shelter", "https://rolling-scopes-school.github.io/pavlkan-JSFE2022Q1/shelter/pages/main/index.html"],
            ["Online-zoo", "https://rolling-scopes-school.github.io/pavlkan-JSFE2022Q3/Online-zoo/pages/main/"],
            ["Meme slider", "https://pavlkan.github.io/cssMemSlider/cssMemSlider/"],
        ]),
    },
    {
        tech: "JS/TS",
        projects: new Map([
            ["CodeWars 4kyu", "https://www.codewars.com/users/rsschool_0b065bd1014e96bf"],
            ["Virtual keyboard", "https://rolling-scopes-school.github.io/pavlkan-JSFE2022Q1/RSS-Virtual-Keyboard/"],
            ["15 puzzle game", "https://pavlkan.github.io/Codejam/"],
            ["Quiz about birds", "https://rolling-scopes-school.github.io/pavlkan-JSFE2022Q3/songbird/src/"],
            ["Online-shop (team project)", "https://keen-tiramisu-717bec.netlify.app/catalog"],
            ["KISS principle presentation", "https://beamish-dieffenbachia-5a803f.netlify.app"],
            ["Async race", "https://friendly-buttercream-6d340e.netlify.app/garage"],
        ]),
    },
    {
        tech: "React",
        projects: new Map([["Gartic phone clone", "https://cute-stroopwafel-d072f2.netlify.app/landing"]]),
    },
    {
        tech: "Angular",
        projects: new Map([["Video hosting", "https://648b66bb7bbf3c00c05c5cc1--glittering-pixie-633ae1.netlify.app"]]),
    },
];

export const localServers = new Map([
    ["Async race", "https://github.com/mikhama/async-race-api"],
    ["Gartic phone clone", "https://drive.google.com/file/d/1pVV1LYw5xlQVhep9IH3RrHMfpstYEy8Y/view?usp=drive_link"],
]);

export const languages = [
    {
        language: "Russian",
        level: "Native speaker",
    },
    {
        language: "English",
        level: "Upper-intermediate/Advanced, experience in speaking with native and advanced speakers, reading books in the original and constantly improving my knowledge",
    },
];
