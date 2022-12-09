import React from 'react';
import '../styles/ArticleCard.css';

const ArticleCard = ({ title, content, date, articleLink}) => {
    const formatDate = new Date(date)
    .toLocaleString()
    .replace(', ', ' - ');
    const formatContent = content.replace('<hr>', "");
    return (
        <div className='card__container'>
            <p className='card__title'>{title}</p>
            <div className='card__date'>
                <i className="fa-regular fa-calendar-days"></i>
                <p>{formatDate}</p>
            </div>
            <div
                className='card__content'
                dangerouslySetInnerHTML={{__html: formatContent}}>
            </div>
            <a className='card__link'
                href={articleLink}
                target="_blank">
                More information
            </a>
        </div>
    );
};

export { ArticleCard };