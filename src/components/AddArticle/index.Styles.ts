import { createStyles } from "@material-ui/styles";

const styles = () =>
    createStyles({
        addArticle: {
            margin: "2rem auto",
            padding: "1rem",
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10px",
        },
        input: {
            display: "block",
            margin: "1rem auto",
            width: "20rem",
            padding: "0.5rem",
            border: "1px solid #00b8e6",
            borderRadius: "10px",
            outline: "none",
        },
        button: {
            width: "21rem",
            padding: "0.7rem",
            border: "1px solid #00b8e6",
            background: "#00b8e6",
            color: "#fff",
            borderRadius: "20px",
            cursor: "pointer",
            outline: "none",
            "&::hover": {
                background: "#0093b8",
            },
            "&:disabled": {
                background: "#d8d8d8",
                border: "1px solid #d8d8d8",
                cursor: "not-allowed",
            },
        },
    });

export default styles;
