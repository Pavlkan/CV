import { Box, Divider, List } from "@mui/material";
import { Title } from "../shared/Title";

import { educationInfo } from "../../data/CVInfo";
import { EducationItem } from "./education-item/EducationItem";

export const Education = () => {
    return (
        <Box mb="2%">
            <Title title="Education"></Title>

            <Divider />

            <List style={{ width: "90%" }}>
                {educationInfo.map((educationItem, key) => {
                    return <EducationItem key={key} educationItem={educationItem} />;
                })}
            </List>
        </Box>
    );
};
