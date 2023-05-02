import { useContext, useEffect, useState } from "react";
import { Context } from "../context/context";

export function useDetail(){
    const {heroSelected, getDetailApi, heroDetailSelected} = useContext(Context)
    console.log(heroDetailSelected)
    

/*     useEffect(()=>{
        fetch(`http://localhost:3001/api/dota2/${heroSelected.id}`)
        .then(res => res.json())
        .then(response => {
            console.log(response,' hooks')
            selectHeroDetail(response)
        })
    },[heroSelected]) */

    return {heroSelected, getDetailApi, heroDetailSelected}
}

