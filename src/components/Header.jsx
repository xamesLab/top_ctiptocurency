import React from "react";
import { useDispatch } from "react-redux";

const Header = () => {
    const dispatch = useDispatch()

    const changeList = (e) => {
        dispatch({type:e.target.value})
    }

    return (
        <div className='header'>
            <div className='header__content'>
                <div>Title</div>
                <div>
                    <select onChange={changeList}>
                        <option value="ALL">Все</option>
                        <option value="LIKED">Избранные</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Header