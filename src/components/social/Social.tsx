import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

import { socialInfo } from "../../data/CVInfo";
import styles from "./social.module.css";

export const Social = () => {
    return (
        <Box className={styles.socialContainer}>
            <List>
                {socialInfo.map((socialItem, key) => {
                    return (
                        <ListItem disablePadding key={key}>
                            <ListItemButton>
                                <ListItemIcon>{socialItem.icon}</ListItemIcon>

                                <ListItemText primary={socialItem.social} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );
};
