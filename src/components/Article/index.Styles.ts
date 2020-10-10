import { createStyles } from "@material-ui/styles";

const styles = () =>
    createStyles({
        article: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem",
            background: "#fff",
            borderRadius: "10px",
            "&:not(:last-child)": {
                borderBottom: "2px solid #f5f6f7",
            },
        },
        heading: {
            color: "#222",
            textTransform: "capitalize",
            fontWeight: 700,
            fontSize: "1.7rem",
        },
        paragraph: {
            paddingRight: "1rem",
            color: "#444",
        },
        button: {
            padding: "0.5rem 0.7rem",
            border: "1px solid #d34b4b",
            background: "#d34b4b",
            color: "#fff",
            borderRadius: "20px",
            cursor: "pointer",
            outline: "none",
            "&:hover": { background: "#e06a6a" },
        },
    });

export default styles;
