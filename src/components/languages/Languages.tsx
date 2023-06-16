import { Box, Divider, List } from "@mui/material";

import { Title } from "../shared/Title";
import { languages } from "../../data/CVInfo";
import { LanguageItem } from "./language-item/LanguageItem";

export const Languages = () => {
    return (
        <Box>
            <Title title="Languages" />

            <Divider />

            <List>
                {languages.map((languageInfo, key) => {
                    return <LanguageItem key={key} languageInfo={languageInfo} />;
                })}
            </List>
        </Box>
    );
};
