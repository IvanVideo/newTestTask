import React, { useEffect } from 'react';
import './Card.css';

interface CardProps {
    item: any
}

function Card({ item }: CardProps) {

    return (
        <section className='card'>
            <div className='card__box'>
                <div>
                    <p className='card__created'>created by</p>
                    <p className='card__after'>{item.created_by.display_name}</p>
                </div>
                <p className='card__about'>{item.name}</p>
            </div>
            <div className='card__box_bottom'>
                <div className='card__bottom'>
                    <p className='card__ligth-text'>available</p>
                    <p className='card__place'>1 of 50</p>
                </div>
                <div className='card__bottom'>
                    <p className='card__ligth-text'>price</p>
                    <p className='card__eth'>0.07 ETH</p>
                </div>
            </div>
        </section>
    );
}

export default Card;