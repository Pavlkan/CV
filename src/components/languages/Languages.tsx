import { Box, Divider, List, useMediaQuery } from "@mui/material";

import { Title } from "../shared/Title";
import { languagesInfo } from "../../data/CVInfo";
import { LanguageItem } from "./language-item/LanguageItem";

export const Languages = () => {
    const matchesTablet = useMediaQuery("(max-width:768px)");

    return (
        <Box mb="2%">
            <Title title="Languages" />

            <Divider />

            <List style={{ width: matchesTablet ? "100%" : "89%" }}>
                {languagesInfo.map((languageItem, key) => {
                    return <LanguageItem key={key} languageItem={languageItem} />;
                })}
            </List>
        </Box>
    );
};
