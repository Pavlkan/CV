import { Typography, Box } from "@mui/material";

export const MainTitle = () => {
    return (
        <Box>
            <Typography sx={{ fontSize: "4vw", fontWeight: "bold" }} component="h1">
                Pavel Karman
            </Typography>

            <Typography sx={{ fontSize: "2.5vw" }} component="h2">
                Frontend developer
            </Typography>
        </Box>
    );
};
