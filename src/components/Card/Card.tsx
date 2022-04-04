import React, { useEffect } from 'react';
import './Card.css';

interface CardProps {
    item: any
}

function Card({ item }: CardProps) {
    console.log(item, '000')
    return (
        <section className='card'>
            <div>
                <p>{item.created_by.display_name}</p>
                {
                    item.additional_photos.map((item: any, index: any) => (
                        <img
                            key={index}
                            src={item.compressed}
                        />
                    ))
                }
                <p>{item.name}</p>
            </div>
            <div>

            </div>
        </section>
    );
}

export default Card;