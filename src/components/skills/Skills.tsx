import { Box, Divider, List, useMediaQuery } from "@mui/material";

import { skillsInfo } from "../../data/CVInfo";
import { SkillItem } from "./skill-item/SkillItem";
import { Title } from "../shared/Title";

export const Skills = () => {
    const matchesTablet = useMediaQuery("(max-width:768px)");

    return (
        <Box mb="2%">
            <Title title="Skills"></Title>

            <Divider />

            <List style={{ width: matchesTablet ? "100%" : "85%" }}>
                {skillsInfo.map((skillItem, key) => {
                    return <SkillItem key={key} skillItem={skillItem} />;
                })}
            </List>
        </Box>
    );
};
