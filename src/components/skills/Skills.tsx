import { Box, Divider, List } from "@mui/material";

import { skills } from "../../data/CVInfo";
import { SkillItem } from "./skill-item/SkillItem";
import { Title } from "../shared/Title";

export const Skills = () => {
    return (
        <Box mb="2%">
            <Title title="Skills"></Title>

            <Divider />

            <List style={{ width: "85%" }}>
                {skills.map((skill, key) => {
                    return <SkillItem key={key} skill={skill} />;
                })}
            </List>
        </Box>
    );
};
