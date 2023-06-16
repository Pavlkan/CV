import { Box, Divider, List } from "@mui/material";

import { skillsInfo } from "../../data/CVInfo";
import { SkillItem } from "./skill-item/SkillItem";
import { Title } from "../shared/Title";

export const Skills = () => {
    return (
        <Box mb="2%">
            <Title title="Skills"></Title>

            <Divider />

            <List style={{ width: "85%" }}>
                {skillsInfo.map((skillItem, key) => {
                    return <SkillItem key={key} skillItem={skillItem} />;
                })}
            </List>
        </Box>
    );
};
