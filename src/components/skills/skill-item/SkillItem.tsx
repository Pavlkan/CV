import React from "react";

import { List, ListItemButton, ListItemText, Collapse, Typography } from "@mui/material";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import styles from "./skill-item.module.css";

interface SkillItemProps {
    skill: { tech: string; projects: Map<string, string> };
}

export const SkillItem = ({ skill }: SkillItemProps) => {
    const [open, setOpen] = React.useState(false);

    const handleCollapseClick = () => {
        setOpen(!open);
    };

    const handleLinkClick = (link: string) => {
        window.open(link);
    };

    return (
        <>
            <ListItemButton onClick={handleCollapseClick}>
                <ListItemText primary={<Typography fontSize={18}>{skill.tech}</Typography>} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {Array.from(skill.projects).map((project, key) => {
                        return (
                            <ListItemButton onClick={() => handleLinkClick(project[1])} key={key} sx={{ pl: 4 }}>
                                <ListItemText primary={<Typography className={styles.link}>{project[0]}</Typography>} />
                            </ListItemButton>
                        );
                    })}
                </List>
            </Collapse>
        </>
    );
};
