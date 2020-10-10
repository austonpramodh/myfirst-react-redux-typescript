import { IArticle } from "./reducer";

export const ADD_ARTICLE = "ADD_ARTICLE";
export const REMOVE_ARTICLE = "REMOVE_ARTICLE";

export interface AddArticleAction {
    type: typeof ADD_ARTICLE;
    article: IArticle;
}

export interface RemoveArticleAction {
    type: typeof REMOVE_ARTICLE;
    article: IArticle;
}

export type TodoActionInterfaces = AddArticleAction | RemoveArticleAction;
