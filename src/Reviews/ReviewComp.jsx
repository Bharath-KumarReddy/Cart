import React from 'react';

const ReviewComp = ({ obj, idx, showIdx, setShowIdx, theme }) => {
    const { reviewerName, comment, rating } = obj;
    const box1Class = theme === 'dark'
        ? 'h-20 w-11/12 max-w-md mx-auto rounded-xl shadow-md flex justify-between items-center px-6 text-lg border border-gray-600 bg-gray-700 text-white transition-all duration-300'
        : 'h-20 w-11/12 max-w-md mx-auto rounded-xl shadow-md flex justify-between items-center px-6 text-lg border border-gray-300 bg-gray-200 text-black transition-all duration-300';

    const box2Class = theme === 'dark'
        ? 'h-auto w-11/12 max-w-md mx-auto mt-2 rounded-xl shadow-md p-4 text-lg border border-gray-600 bg-gray-800 text-white transition-all duration-300'
        : 'h-auto w-11/12 max-w-md mx-auto mt-2 rounded-xl shadow-md p-4 text-lg border border-gray-300 bg-gray-100 text-black transition-all duration-300';

    const arrowClass = theme === 'dark'
        ? 'text-blue-400 hover:text-blue-500'
        : 'text-blue-500 hover:text-blue-700';

    return (
        <>
            <div 
                className={box1Class}
                onClick={() => setShowIdx(showIdx === idx ? null : idx)}
            >
                <p className='font-semibold'>{reviewerName}</p>
                <p className={`cursor-pointer ${arrowClass}`}>
                    {showIdx === idx ? '🔽' : '🔼'}
                </p>
            </div>
            {showIdx === idx && (
                <div className={box2Class}>
                    <p className='mb-2'>{comment}</p>
                    <p className='font-semibold text-yellow-400'>{rating} ★</p>
                </div>
            )}
        </>
    );
}

export default ReviewComp;
