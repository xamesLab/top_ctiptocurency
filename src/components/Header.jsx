import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state)

    const changeList = (e) => {
        dispatch(!data.filtred?{type:'LIKED'}:{type:'ALL'})
    }

    return (
        <div className='header'>
            <div className='header__content'>
                <h1>топ 8 криптовалют</h1>
                <div onClick={changeList} className={ `header__toggle_btn ${!data.filtred?'':'active'}` }>
                    Избранное
                </div>
            </div>
        </div>
    )
}

export default Header