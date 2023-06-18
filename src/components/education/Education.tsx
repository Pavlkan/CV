import { Box, Divider, List, useMediaQuery } from "@mui/material";
import { Title } from "../shared/Title";

import { educationInfo } from "../../data/CVInfo";
import { EducationItem } from "./education-item/EducationItem";

export const Education = () => {
    const matchesTablet = useMediaQuery("(max-width:768px)");

    return (
        <Box mb="2%">
            <Title title="Education"></Title>

            <Divider />

            <List style={{ width: matchesTablet ? "100%" : "90%" }}>
                {educationInfo.map((educationItem, key) => {
                    return <EducationItem key={key} educationItem={educationItem} />;
                })}
            </List>
        </Box>
    );
};
