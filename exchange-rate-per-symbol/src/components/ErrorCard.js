import '../styles/ErrorCard.css'

const ErrorCard = () => {
    return (
        <div className='error__container'>
            <p className='error__text'>
                There was an error, try reloading the page
            </p>
            <i className="fa-regular fa-face-dizzy"></i>
        </div>
    );
};

export { ErrorCard };