import { useContext, useEffect, useState } from "react";
import { Context } from "../context/context";

export function useDetail(){
    const {heroSelected, getDetailApi, heroDetailSelected} = useContext(Context)
    
    return {heroSelected, getDetailApi, heroDetailSelected}
}

