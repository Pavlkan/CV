import { Box, Divider, List } from "@mui/material";

import { Title } from "../shared/Title";
import { languagesInfo } from "../../data/CVInfo";
import { LanguageItem } from "./language-item/LanguageItem";

export const Languages = () => {
    return (
        <Box mb="2%">
            <Title title="Languages" />

            <Divider />

            <List style={{ width: "89%" }}>
                {languagesInfo.map((languageItem, key) => {
                    return <LanguageItem key={key} languageItem={languageItem} />;
                })}
            </List>
        </Box>
    );
};
