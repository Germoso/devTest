import React from 'react'
import '../styles/MainContainer.css';

const MainContainer = ({children}) => {
    return (
    <main className='main__container'>
        <div className='main__innner'>
            {children}
        </div>
    </main>
    );
};

export { MainContainer };