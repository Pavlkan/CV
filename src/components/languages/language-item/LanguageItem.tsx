import { ListItem, ListItemIcon, Box, ListItemText, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

interface LanguageItemProps {
    languageItem: { language: string; level: string };
}

export const LanguageItem = ({ languageItem }: LanguageItemProps) => {
    return (
        <ListItem>
            <ListItemIcon>
                <FiberManualRecordIcon className="dotIcon" />
            </ListItemIcon>

            <Box>
                <ListItemText primary={<Typography fontSize={18}>{languageItem.language}</Typography>} />

                <ListItemText primary={<Typography color="gray">{languageItem.level}</Typography>} />
            </Box>
        </ListItem>
    );
};
