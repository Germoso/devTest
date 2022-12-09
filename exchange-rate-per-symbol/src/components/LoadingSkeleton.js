import '../styles/LoadingSkeleton.css';

const LoadingSkeleton = () => {
    return (
        <div className='loading__container'>
            <div className='loading__title'></div>
            <div className='loading__content'></div>
        </div>
    );
};

export { LoadingSkeleton };