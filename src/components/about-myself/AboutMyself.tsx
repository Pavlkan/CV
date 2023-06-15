import { Box, Avatar, Typography, Divider } from "@mui/material";

import { aboutMyselfInfo } from "../../data/CVInfo";
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
                    {aboutMyselfInfo}
                </Typography>
            </Box>
        </Box>
    );
};

export default AboutMyself;
