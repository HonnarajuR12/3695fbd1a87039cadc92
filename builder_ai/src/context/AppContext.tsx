import React, { useReducer, createContext, Reducer, Dispatch } from "react";

import { initState, appReducer } from "./appReducer";
import { Context } from "../types/context";

const initValues = {
    state: initState,
    dispatch: () => initState
}

export const AppContext = createContext<Context>(initValues);

const AppProvider: React.FC = ({ children }) => {

    const [state, dispatch] = useReducer(appReducer, initState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;