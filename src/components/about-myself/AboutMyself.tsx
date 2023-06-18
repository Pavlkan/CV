import { Box, Avatar, Typography, Divider, useMediaQuery } from "@mui/material";

import { aboutMyselfInfo } from "../../data/CVInfo";
import styles from "./about-myself.module.css";

export const AboutMyself = () => {
    const matchesTablet = useMediaQuery("(max-width:768px)");

    return (
        <Box className={styles.aboutMyselfContainer}>
            <Avatar
                sx={{
                    width: matchesTablet ? "40vw" : "15vw",
                    height: matchesTablet ? "40vw" : "15vw",
                }}
                src={`${process.env.PUBLIC_URL}/avatar.jpg`}
                alt="Karman Pavel"
            />

            <Box>
                <Typography fontSize={30} fontWeight="bold" className="title_about" component="h2">
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
