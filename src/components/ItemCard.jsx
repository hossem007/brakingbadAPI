import React from 'react'

const ItemCard = ({card}) => {
    return (
        <div className='card'>

            

                <div className='front'>
                    <img src={card.img} alt="" />
                </div>

                <div className="back">
                    <h3> {card.name} </h3>
                    <ul>
                        <li>
                            <strong>Actor Name:</strong> {card.portrayed}
                        </li>
                        <li>
                        <strong>Nickname:</strong> {card.nickname}
                        </li>
                        <li>
                        <strong>Birthday:</strong> {card.birthday}
                        </li>
                        <li>
                        <strong>Status:</strong> {card.status}
                        </li>
                    </ul>
                </div>
            </div>
            
                
            
        
    )
}

export default ItemCard
