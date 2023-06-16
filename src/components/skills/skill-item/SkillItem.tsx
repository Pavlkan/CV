import React from "react";

import { Box, List, ListItemButton, Rating, ListItemText, Collapse, Typography } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import styles from "./skill-item.module.css";

interface SkillItemProps {
    skillItem: { tech: string; level: number; projects: Map<string, string> };
}

export const SkillItem = ({ skillItem }: SkillItemProps) => {
    const [open, setOpen] = React.useState(false);

    const handleOpenClick = () => {
        setOpen(!open);
    };

    const handleLinkClick = (link: string) => {
        window.open(link);
    };

    return (
        <Box>
            <Box className={styles.titleContainer}>
                <ListItemButton onClick={handleOpenClick}>
                    <ListItemText primary={<Typography fontSize={18}>{skillItem.tech}</Typography>} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Rating sx={{ color: "rgb(36, 154, 112)" }} value={skillItem.level} precision={0.5} size="large" readOnly />
            </Box>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {Array.from(skillItem.projects).map((project, key) => {
                        return (
                            <ListItemButton onClick={() => handleLinkClick(project[1])} key={key} sx={{ pl: 4 }}>
                                <ListItemText primary={<Typography className={styles.link}>{project[0]}</Typography>} />
                            </ListItemButton>
                        );
                    })}
                </List>
            </Collapse>
        </Box>
    );
};
