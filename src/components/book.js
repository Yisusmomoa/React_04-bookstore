import React from 'react'
import { Link } from 'react-router-dom'

export default function Book({item}) {

    const bookContainerStyle={
        display:'flex',
        flexDirection:'column',
        width:'300px',
    };

    const bookInfoStyle={
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        textAlign:'center',
        color:'white',
        textDecoration:'none'
    };

  return (
    <div style={bookContainerStyle}>
        <Link to={`/view/${item.id}`} style={bookInfoStyle}>
            <img src={item.cover} alt='' width='200px'></img>
            <div>{item.title}</div>
        </Link>
    </div>
  )
}
