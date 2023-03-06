import React from 'react'
import NavDots from '../components/NavDots'


const AppWrap = (Component, idName, classNames) => function HOC() {
    return (
        <div id={idName} className={`app__container ${classNames}`} >
            <div className='app__wrapper app__flex'>
                <Component />
                <div className='copyright'>
                    <p className='p-text'>@2023 MICHAŁ</p>
                    <p className='p-text'>All rights reserved</p>
                </div>
            </div>
            <NavDots active={idName} />
        </div>
    )
}

export default AppWrap