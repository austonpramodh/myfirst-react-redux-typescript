import { withStyles, WithStyles } from "@material-ui/styles";
import * as React from "react";

import { TodoStore } from "../../store";

import styles from "./index.Styles";

type Props = {
    saveArticle: (article: TodoStore.IArticle) => void;
} & WithStyles<typeof styles>;

const AddArticleComponent: React.FC<Props> = ({ saveArticle, classes }) => {
    const [article, setArticle] = React.useState<TodoStore.IArticle>({ body: "", title: "", id: -1 });

    const handleArticleData = <T extends Exclude<keyof TodoStore.IArticle, "id">>(
        key: T,
        value: TodoStore.IArticle[T],
    ) => {
        setArticle({
            ...article,
            [key]: value,
        });
    };

    const addNewArticle = (e: React.FormEvent) => {
        e.preventDefault();
        saveArticle(article);
        setArticle({ body: "", id: -1, title: "" });
    };

    return (
        <form onSubmit={addNewArticle} className={classes.addArticle}>
            <input
                className={classes.input}
                type="text"
                id="title"
                placeholder="Title"
                onChange={(e) => handleArticleData("title", e.target.value)}
                value={article.title}
            />
            <input
                className={classes.input}
                type="text"
                id="body"
                placeholder="Description"
                onChange={(e) => handleArticleData("body", e.target.value)}
                value={article.body}
            />
            <button className={classes.button} disabled={article.body === "" || article.title === "" ? true : false}>
                Add article
            </button>
        </form>
    );
};

export const AddArticle = withStyles(styles)(AddArticleComponent);
