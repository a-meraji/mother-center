"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ProvidedRoot from "@/components/providedRoot";
import StateGraber from "@/components/stateGraber";
import store from "@/redux/configStore";
import React from "react";
import { Provider } from "react-redux";

function ContextProvider({ children }) {
  return (
    <Provider store={store}>
      <ProvidedRoot>
        <StateGraber/>
        <Header />
        <div className="p-5">{children}</div>
        <Footer />
      </ProvidedRoot>
    </Provider>
  );
}

export default ContextProvider;
