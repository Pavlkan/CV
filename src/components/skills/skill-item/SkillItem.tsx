import React from "react";

import { Box, List, ListItemButton, Rating, ListItemText, Collapse, Typography } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StorageIcon from "@mui/icons-material/Storage";

import styles from "./skill-item.module.css";
import { localServersInfo } from "../../../data/CVInfo";

interface SkillItemProps {
    skillItem: { tech: string; level: number; projects: Map<string, string> };
}

export const SkillItem = ({ skillItem }: SkillItemProps) => {
    const [open, setOpen] = React.useState(false);

    const handleOpenClick = () => {
        setOpen(!open);
    };

    const handleLinkClick = (link: string | null | undefined) => {
        if (!link) return;

        window.open(link);
    };

    return (
        <Box>
            <Box className={styles.titleContainer}>
                <ListItemButton onClick={handleOpenClick}>
                    <ListItemText primary={<Typography fontSize={18}>{skillItem.tech}</Typography>} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Rating
                    sx={{ color: "rgb(36, 154, 112)" }}
                    value={skillItem.level}
                    precision={0.5}
                    size="large"
                    readOnly
                />
            </Box>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {Array.from(skillItem.projects).map((project, key) => {
                        let serverLink: string | null | undefined = null;
                        const projectName = project[0].slice(0, project[0].indexOf("(") - 1);

                        if (projectName.includes("Gartic") || projectName.includes("Async")) {
                            serverLink = localServersInfo.get(project[0]);
                        }

                        return (
                            <Box key={key}>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText
                                        primary={<Typography className={styles.link}>{project[0]}</Typography>}
                                        onClick={() => handleLinkClick(project[1])}
                                    />
                                </ListItemButton>
                                {serverLink && (
                                    <ListItemButton sx={{ paddingLeft: "10%" }}>
                                        <StorageIcon />
                                        <ListItemText
                                            primary={
                                                <Typography className={styles.link} ml={1}>
                                                    {projectName + "'s sever"}
                                                </Typography>
                                            }
                                            onClick={() => handleLinkClick(serverLink)}
                                        />
                                    </ListItemButton>
                                )}
                            </Box>
                        );
                    })}
                </List>
            </Collapse>
        </Box>
    );
};
