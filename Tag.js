import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./spinner";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function Tag(){


    const[tag, setTag] = useState('');

   const {gif, loading, fetchData} = useGif(tag);

    function clickHandler()
    {
        fetchData(tag);

    }

    return(

        <div className="w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center
        gap-y-5 mt-[15px]">

            <h1 className=" mt-[20px] text-2xl underline uppercase font-bold">Randopm Gif</h1>
            
            {
                loading ? (<Spinner/>) : (<img src={gif} width={450}/>)
            }

            <input
                 className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"
                 onChange={(event)=> setTag(event.target.value)}
                 value={tag}
            />
            

            <button onClick={clickHandler} className=" mb-[20px] w-10/12 bg-yellow-400 text-lg rounded-lg py-2">
                Generate
            </button>




        </div>
    )
}

export default Tag;