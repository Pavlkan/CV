import { Typography, Box, useMediaQuery } from "@mui/material";

export const MainTitle = () => {
    const matchesTablet = useMediaQuery("(max-width:768px)");

    return (
        <Box sx={{ margin: matchesTablet ? "3% 0" : "0", textAlign: "center" }}>
            <Typography sx={{ fontSize: matchesTablet ? "10vw" : "4vw", fontWeight: "bold" }} component="h1">
                Pavel Karman
            </Typography>

            <Typography sx={{ fontSize: matchesTablet ? "6vw" : "2.5vw" }} component="h2">
                Frontend developer
            </Typography>
        </Box>
    );
};
