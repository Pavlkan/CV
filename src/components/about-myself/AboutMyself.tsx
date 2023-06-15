import { Box, Avatar, Typography, Divider } from "@mui/material";

import styles from "./about-myself.module.css";

const AboutMyself = () => {
    return (
        <Box className={styles.aboutMyselfContainer}>
            <Avatar
                sx={{ width: "15vw", height: "15vw" }}
                src={`${process.env.PUBLIC_URL}/avatar.jpg`}
                alt="Karman Pavel"
            />
            <Box>
                <Typography fontSize={30} component="h2">
                    ABOUT MYSELF
                </Typography>
                <Divider sx={{ background: "white" }} />
                <Typography fontSize={16} component="p">
                    Start programming in 2020. Graduated from the Rolling Scopes School frontend course and have
                    experience in project management. In the work process I always try to do my best to delve into task,
                    to optimize it and deepen my knowledge. As for my hobbies I am fond of listening to music as well as
                    playing it, watching movies, doing sports and reading fiction from fantasy to classic
                </Typography>
            </Box>
        </Box>
    );
};

export default AboutMyself;
