import React, { useContext, useState } from "react";
import { HerosView } from "./components/HerosView";
import { Detail } from "./components/compDetHero.jsx/Detail";

export function App() {

    return (

        <div className="App">
            <div className="principal">
                <HerosView />
                <Detail />
            </div>
        </div>
    )

}
