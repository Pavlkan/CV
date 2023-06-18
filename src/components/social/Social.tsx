import { useState, useCallback } from "react";

import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Snackbar } from "@mui/material";

import styles from "./social.module.css";

interface SocialPropsInterface {
    social: string;
    icon: JSX.Element;
}

export const Social = ({ socialInfo }: { socialInfo: SocialPropsInterface[] }) => {
    const [shown, setShown] = useState(false);

    const onSnackbarClose = useCallback(() => setShown(false), [setShown]);

    const onInviteClick = useCallback(
        (link: string) => {
            navigator.clipboard.writeText(link);
            setShown(true);
        },
        [setShown]
    );

    return (
        <Box className={styles.socialContainer}>
            <List style={{ padding: 0 }}>
                {socialInfo.map((socialItem, key) => {
                    return (
                        <ListItem disablePadding key={key}>
                            <ListItemButton onClick={() => onInviteClick(socialItem.social)}>
                                <ListItemIcon>{socialItem.icon}</ListItemIcon>

                                <ListItemText primary={socialItem.social} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>

            <Snackbar
                open={shown}
                autoHideDuration={1500}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                onClose={onSnackbarClose}
                message="Info copied!"
            />
        </Box>
    );
};
