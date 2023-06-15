import { Box } from "@mui/material";

import AboutMyself from "../components/about-myself/AboutMyself";
import Education from "../components/education/Education";
import Languages from "../components/languages/Languages";
import Skills from "../components/skills/Skills";
import Social from "../components/social/Social";
import Title from "../components/title/Title";

import styles from "./cv-page.module.css";

const CVPage = () => {
    return (
        <>
            <header className={styles.header}>
                <Title />
                <Social />
            </header>

            <main>
                <AboutMyself />
                <Box className={styles.mainInfoContainer}>
                    <Skills />
                    <Languages />
                    <Education />
                </Box>
            </main>

            <footer>footer</footer>
        </>
    );
};

export default CVPage;
