import React from "react";
import { useDispatch, useSelector } from "react-redux";

const LikeButton = ({cur}) => {
    const isLike = useSelector(state => state.data[cur]?.like)
    const dispatch = useDispatch()

    const toggleLike = () => {
        dispatch(isLike?{type:'DISLIKE', cur:cur}:{type:'LIKE', cur:cur})
    }

    return (
        <div onClick={toggleLike} className='main__like'>
            <img src={isLike?"static/love-true2.png":"static/love.png"} alt="like"></img>
        </div>
    )
}

export default LikeButton