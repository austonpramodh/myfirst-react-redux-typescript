import { ADD_ARTICLE, AddArticleAction, RemoveArticleAction, REMOVE_ARTICLE } from "./actionTypes";
import { IArticle } from "./reducer";

export function addArticle(article: IArticle): AddArticleAction {
    const action: AddArticleAction = {
        type: ADD_ARTICLE,
        article,
    };

    return action;
}

export function removeArticle(article: IArticle): RemoveArticleAction {
    const action: RemoveArticleAction = {
        type: REMOVE_ARTICLE,
        article,
    };
    return action;
}
