import { useContext, useEffect, useState } from "react";
import { Context } from "../context/context";

/* Para hacer mas eficiente tengo que definir funciones que actuen sobre el contexto */

export function useDetail(){
    const {heroSelected, getDetailApi, heroDetailSelected} = useContext(Context)
    
    return {heroSelected, getDetailApi, heroDetailSelected}
}

