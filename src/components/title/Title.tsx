import { Typography, Box } from "@mui/material";

import styles from "./title.module.css";

const Title = () => {
    return (
        <Box>
            <Typography sx={{ fontSize: "4vw", fontWeight: "bold" }} className={styles.title} component="h1">
                Pavel Karman
            </Typography>
            <Typography sx={{ fontSize: "2vw" }} className={styles.subtitle} component="h2">
                Frontend developer
            </Typography>
        </Box>
    );
};

export default Title;
