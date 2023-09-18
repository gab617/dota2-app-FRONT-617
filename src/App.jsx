import React, { useContext, useState } from "react";
import { Link, Route, Router } from "wouter"



import { HerosView } from "./pages/HerosView"
import { PageDetail } from "./pages/Detail"

const Components = () => {
    return (
        <>
            <PageDetail></PageDetail>
            <HerosView></HerosView>
        </>
    )
}

export function App() {
    return (

        <div className="App">
            <div>
                <nav>
                    <ul>
                        <li><Link href="">Home</Link></li>
                        <li><Link href="heroes">Heroes</Link></li>
                        <li><Link href="">hi!</Link></li>
                        <li><Link href="">Contact</Link></li>
                    </ul>
                </nav>
            </div>

            <Route
                component={HerosView}
                path='/heroes'
            />

            <Route
                component={PageDetail}
                path='/det'
            />

        </div>
    )

}
