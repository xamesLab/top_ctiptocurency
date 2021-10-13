import React, { useState } from "react";

const LikeButton = () => {
    const [liked, setLiked] = useState(false)

    const toggleLike = () => {
        setLiked(liked?false:true)
    }

    return (
        <div className=''>
            <button onClick={toggleLike}>like</button>
                    {liked?'ok':'dis'}
        </div>
    )
}

export default LikeButton