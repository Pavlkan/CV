import AboutMyself from "../components/about-myself/AboutMyself";
import Education from "../components/education/Education";
import Languages from "../components/languages/Languages";
import Skills from "../components/skills/Skills";
import Social from "../components/social/Social";
import Title from "../components/title/Title";

const CVPage = () => {
    return (
        <>
            <header>
                <Title />
                <Social />
            </header>

            <body>
                <AboutMyself />
                <Skills />
                <Languages />
                <Education />
            </body>

            <footer>footer</footer>
        </>
    );
};

export default CVPage;
