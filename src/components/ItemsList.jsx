import React from 'react'
import ItemCard from './ItemCard'

const ItemsList = ({items,isloading,text,number,setNumber}) => {
    return (
        <div className='list'>
            {
                isloading?<h2>Loading...</h2>:
                items.filter(el=>el.name.toUpperCase().includes(text.toUpperCase())).slice(0,number).map(el=>
                    
                    <ItemCard card={el} />
                    
                    )
            }
        </div>
    )
}

export default ItemsList
