import React from "react";
import { useDispatch, useSelector } from "react-redux";

const LikeButton = ({cur}) => {
    const isLike = useSelector(state => state.data[cur]?.like)
    const dispatch = useDispatch()

    const toggleLike = () => {
        dispatch(isLike?{type:'DISLIKE', cur:cur}:{type:'LIKE', cur:cur})
    }

    return (
        <div className=''>
            <button onClick={toggleLike}>like</button>
                    {isLike?'ok':'dis'}
        </div>
    )
}

export default LikeButton