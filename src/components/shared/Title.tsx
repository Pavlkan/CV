import { Typography } from "@mui/material";

export const Title = ({ title }: { title: string }) => {
    return (
        <Typography fontSize={30} fontWeight="bold" className="title" component="h2">
            {title}
        </Typography>
    );
};
