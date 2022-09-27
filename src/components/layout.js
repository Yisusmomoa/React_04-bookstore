import React from 'react'
import NavBar from './navBar'

export default function Layout({children}) {

    const containerStyle={
        width:'90%',
        margin:'100px auto'
    }

  return (
    <div >
        <NavBar></NavBar>
        <div style={containerStyle}>{children}</div>
    </div>
  )
}
