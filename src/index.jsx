import React, { useContext, useState } from "react";
import { Link, Route, Router } from "wouter"



import { HerosView } from "./pages/HerosView"
import { PageDetail } from "./pages/PageDetail"
import { Home } from "./pages/Home";

/* const Components = () => {
    return (
        <>
            <PageDetail></PageDetail>
            <HerosView></HerosView>
        </>
    )
    
} */

export function App() {
    return (

        <div className="App">
            <div id='Nav'>
                <nav>
                    <ul>
                        <li><Link href="/home">Home</Link></li>
                        <li><Link href="/">Heroes</Link></li>
                        <li><Link href="">hi!</Link></li>
                        <li><Link href="">Contact</Link></li>
                    </ul>
                </nav>
            </div>

            <Route
                component={HerosView}
                path='/'
            />

            <Route
                component={PageDetail}
                path='/det'
            />

            <Route
                component={Home}
                path='/home'
            />

        </div>
    )

}
