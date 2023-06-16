import { Box, Typography, Divider, List } from "@mui/material";

import { skills } from "../../data/CVInfo";
import { SkillItem } from "./skill-item/SkillItem";

const Skills = () => {
    return (
        <Box mb="2%">
            <Typography fontSize={30} fontWeight="bold" className="title" component="h2">
                Skills
            </Typography>
            <Divider />
            <List style={{ width: "40%" }}>
                {skills.map((skill, key) => {
                    return <SkillItem key={key} skill={skill} />;
                })}
            </List>
        </Box>
    );
};

export default Skills;
