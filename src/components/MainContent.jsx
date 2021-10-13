import React, { useEffect, useState } from "react";
import Binance from "binance-api-node";
import { useDispatch, useSelector } from "react-redux";
import LikeButton from "./Like";

const MainContent = () => {
    const [topList, setTopList] = useState(['btc', 'eth', 'bnb', 'bch', 'ada', 'xrp', 'sol', 'dot'])
    
    const dispatch = useDispatch()
    const data = useSelector(state => state)

    const getData = async function(cur){
        const client = Binance();
        try {
            const data = await client.prices({ symbol: `${cur.toUpperCase()}USDT` })
            return data[`${cur.toUpperCase()}USDT`]
        } catch (error) {
            return 0
        }
    }

    useEffect(() => {
        topList.forEach(i => {
            getData(i).then(d => {
                dispatch({type:"SET",cur:i,data:+d})
            })
        })
        // не делаем новый запрос при изменении количества карточек на странице
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const delHandler = (el) => {
        console.log(el)
        setTopList(topList.filter(i=>i!==el))
    }

    

    return (
        <div className='main'>
            {topList.map(i => (
                <div className='main__card' key={i}>
                    <LikeButton/>
                    {data[i]}
                    <button onClick={()=>delHandler(i)}>Удалить</button>
                </div>
            ))}
            
        </div>
    )
}

export default MainContent

