import { ListItem, ListItemIcon, Box, ListItemText, Typography, ListItemButton, useMediaQuery } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import styles from "./education-item.module.css";

interface EducationItemProps {
    educationItem: { education: string; explanation: string; link: string | null };
}

export const EducationItem = ({ educationItem }: EducationItemProps) => {
    const matchesTablet = useMediaQuery("(max-width:1024px)");

    const handleLinkClick = (link: string | null) => {
        if (!link) return;
        window.open(link);
    };

    return (
        <ListItem
            className={educationItem.link ? styles.rsEducationItem : styles.educationItem}
            sx={{ alignItems: matchesTablet ? "start" : "center" }}
        >
            <Box className={styles.item}>
                <ListItemIcon>
                    <FiberManualRecordIcon className="dotIcon" />
                </ListItemIcon>
                <Box>
                    <ListItemText primary={<Typography fontSize={18}>{educationItem.education}</Typography>} />

                    <ListItemText primary={<Typography color="gray">{educationItem.explanation}</Typography>} />
                </Box>
            </Box>
            {educationItem.link && (
                <ListItemButton
                    sx={{ padding: 0, textAlign: "center" }}
                    onClick={() => handleLinkClick(educationItem.link)}
                >
                    <ListItemText
                        primary={
                            <Typography className={styles.link} fontWeight="bold" fontSize={18}>
                                CERTIFICATE
                            </Typography>
                        }
                    />
                </ListItemButton>
            )}
        </ListItem>
    );
};
