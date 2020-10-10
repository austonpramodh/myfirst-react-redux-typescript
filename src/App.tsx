import * as React from "react";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import { hot } from "react-hot-loader/root";

import "./styles.css";
import { Article } from "./components/Article";
import { AddArticle } from "./components/AddArticle";
import { RootState, TodoStore } from "./store";
import { IArticle } from "./store/todo";

const mapState = (state: RootState) => ({ articles: state.todo.articles });

const mapDispatch = (dispatch: Dispatch<TodoStore.ActionInterfaces>) => ({
    saveArticle: (article: IArticle) => dispatch(TodoStore.Actions.addArticle(article)),
    removeArticle: (article: IArticle) => dispatch(TodoStore.Actions.removeArticle(article)),
});

const connector = connect<ReturnType<typeof mapState>, ReturnType<typeof mapDispatch>, Record<never, never>, RootState>(
    mapState,
    mapDispatch,
);

type PropsFromRedux = ConnectedProps<typeof connector>;

type AppProps = PropsFromRedux & Record<never, never>;

const App: React.FC<AppProps> = ({ articles, saveArticle, removeArticle }) => {
    return (
        <main>
            <h1>My Articles</h1>
            <AddArticle saveArticle={saveArticle} />
            {articles.map((article: TodoStore.IArticle) => (
                <Article key={article.id} article={article} removeArticle={removeArticle} />
            ))}
        </main>
    );
};

export default connector(hot(App));
