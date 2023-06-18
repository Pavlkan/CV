import { Box } from "@mui/material";

import { AboutMyself } from "../components/about-myself/AboutMyself";
import { Education } from "../components/education/Education";
import { Languages } from "../components/languages/Languages";
import { Skills } from "../components/skills/Skills";
import { Social } from "../components/social/Social";

import { MainTitle } from "../components/main-title/MainTitle";
import styles from "./cv-page.module.css";
import { socialInfo, socialInfoFooter } from "../data/CVInfo";

const CVPage = () => {
    return (
        <>
            <header className={styles.header}>
                <MainTitle />
                <Social socialInfo={socialInfo} />
            </header>

            <main>
                <AboutMyself />

                <Box className={styles.mainInfoContainer}>
                    <Skills />
                    <Languages />
                    <Education />
                </Box>
            </main>

            <footer>
                <Social socialInfo={socialInfoFooter}></Social>
            </footer>
        </>
    );
};

export default CVPage;
