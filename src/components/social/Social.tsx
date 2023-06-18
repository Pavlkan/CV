import { useState, useCallback } from "react";

import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Snackbar,
    useMediaQuery,
} from "@mui/material";

import styles from "./social.module.css";

interface SocialPropsInterface {
    social: string;
    link: string;
    icon: JSX.Element;
}

export const Social = ({ socialInfo }: { socialInfo: SocialPropsInterface[] }) => {
    const matchesTablet = useMediaQuery("(max-width:768px)");
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
            <List className={styles.list} style={{ padding: 0, width: "100%" }}>
                {socialInfo.map((socialItem, key) => {
                    return (
                        <ListItem
                            sx={{ width: matchesTablet ? "25%" : "100%" }}
                            className={styles.listItem}
                            disablePadding
                            key={key}
                        >
                            <ListItemButton onClick={() => onInviteClick(socialItem.link)}>
                                <ListItemIcon sx={{ minWidth: matchesTablet ? 0 : "56px" }}>
                                    {socialItem.icon}
                                </ListItemIcon>

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
