import { createStore } from "redux";

import { rootReducer } from "./rootReducer";
import * as TodoStore from "./todo";

export type RootState = ReturnType<typeof rootReducer>;

export const configureStore = () => {
    const store = createStore(rootReducer);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept("./rootReducer", () => {
            store.replaceReducer(rootReducer);
        });
    }
    return store;
};

//Stores Exports Start
export { TodoStore };
//Stores Exports Start
