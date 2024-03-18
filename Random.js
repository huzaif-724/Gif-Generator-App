import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./spinner";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function Random(){

    const{gif, loading, fetchData} = useGif();

    function clickHandler()
    {
        fetchData();

    }

    return(

        <div className="w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center
        gap-y-5 mt-[15px]">

            <h1 className=" mt-[20px] text-2xl underline uppercase font-bold">A Randopm Gif</h1>
            
            {
                loading ? (<Spinner/>) : (<img src={gif} width={450} class/>)
            }
            

            <button onClick={clickHandler} className=" mb-[20px] w-10/12 bg-yellow-400 text-lg rounded-lg py-2">
                Generate
            </button>




        </div>
    )
}

export default Random;