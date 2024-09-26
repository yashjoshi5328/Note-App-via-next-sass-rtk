"use client"
//importing redux store
import { store } from "./store";
//import Provider to provide redtore store
import { Provider } from "react-redux";

export function ProvideStore({children}){
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}