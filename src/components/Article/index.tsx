import { WithStyles, withStyles } from "@material-ui/styles";
import * as React from "react";

import { TodoStore } from "../../store";

import styles from "./index.Styles";

type Props = {
    article: TodoStore.IArticle;
    removeArticle: (article: TodoStore.IArticle) => void;
} & WithStyles<typeof styles>;

const ArticleComponent: React.FC<Props> = ({ article, removeArticle, classes }) => {
    return (
        <div className={classes.article}>
            <div>
                <h1 className={classes.heading}>{article.title}</h1>
                <p className={classes.paragraph}>{article.body}</p>
            </div>
            <button className={classes.button} onClick={() => removeArticle(article)}>
                Delete
            </button>
        </div>
    );
};

export const Article = withStyles(styles)(ArticleComponent);
