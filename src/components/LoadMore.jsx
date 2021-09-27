import React from 'react'


const LoadMore = ({number,setNumber,items}) => {

    const load = '/img1/load.png'
    return (
        <div className='load'>
            <div style={items.length<=number?{display:'none'}:null} onClick={()=>setNumber(number+16)}  >Load more <i class="fas fa-caret-square-down"></i></div>
            <div style={items.length>=number?{display:'none'}:null} onClick={()=>setNumber(16)}  >Show Less <i class="fas fa-caret-square-down less"></i></div>
        </div>
    )
}

export default LoadMore
