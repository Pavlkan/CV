import { ListItem, ListItemIcon, Box, ListItemText, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import styles from "./language-item.module.css";

interface LanguageItemProps {
    languageInfo: { language: string; level: string };
}

export const LanguageItem = ({ languageInfo }: LanguageItemProps) => {
    return (
        <ListItem>
            <ListItemIcon>
                <FiberManualRecordIcon className={styles.dotIcon} />
            </ListItemIcon>

            <Box>
                <ListItemText primary={<Typography fontSize={18}>{languageInfo.language}</Typography>} />

                <ListItemText primary={<Typography className={styles.subtitle}>{languageInfo.level}</Typography>} />
            </Box>
        </ListItem>
    );
};
