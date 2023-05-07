import React, { useContext, useState } from "react";
import { HerosView } from "./pages/list-heros/HerosView";
import { PageDetail } from "./pages/detail/PageDetail";
export function App() {

    return (

        <div className="App">
            <div>
                <nav>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Heroes</a></li>
                        <li><a href="">hi!</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <PageDetail />
            <HerosView className="principal" />
        </div>
    )

}
