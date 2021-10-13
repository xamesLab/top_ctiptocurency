import React, { useEffect, useState } from "react";
import Binance from "binance-api-node";
import { useDispatch, useSelector } from "react-redux";
import LikeButton from "./Like";

const MainContent = () => {
    const [topList, setTopList] = useState(['btc', 'eth', 'bnb', 'bch', 'ada', 'xrp', 'sol', 'dot'])
    const [isLikedList, setIsLikedList] = useState([])
    
    const dispatch = useDispatch()
    const data = useSelector(state => state)
    const icon = useSelector(state => state.icon)

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

    useEffect(() => {
        setIsLikedList(topList.filter(i => data.data[i]?.like))
    },[data.filtred, data.data, topList])

    const delHandler = (el) => {
        setTopList(topList.filter(i=>i!==el))
    }

    return (
        <div>
            {!data.filtred ?
                <div className='main'>
                    {
                    topList.map(i => (
                        <div className='main__card' key={i}>
                            <div className='card__title'>
                                <h2>{ `${i.toUpperCase()}/USDT` }</h2>
                            </div>
                            <div className='card__icon'>
                                <img src={`${icon[i]}`} alt="icon" />
                            </div>
                            <p>Последняя цена:</p>
                            {data.data[i]?.val}
                            <div className='main__buttons'>
                                <LikeButton cur={i}/>
                                <div className='main__del_btn' onClick={() => delHandler(i)}>
                                    <img src="static/close.png" alt="del" />
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div> :
                <div className='main'>
                {
                isLikedList.map(i => (
                    <div className='main__card' key={i}>
                        <div className='card__title'>
                            <h2>{ `${i.toUpperCase()}/USDT` }</h2>
                        </div>
                        <div className='card__icon'>
                            <img src={`${icon[i]}`} alt="icon" />
                        </div>
                        <p>Последняя цена:</p>
                        {data.data[i]?.val}
                        <div className='main__buttons'>
                            <LikeButton cur={i}/>
                            <div className='main__del_btn' onClick={() => delHandler(i)}>
                                <img src="static/close.png" alt="del" />
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>}
        </div>
    )
}

export default MainContent

