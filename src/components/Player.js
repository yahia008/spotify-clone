import React from 'react'
import Body from './Body'
import SideBar from './SideBar'
import Footer from './Footer'




const Player = ({spotify}) => {


  return (

    <div className=''>
     
     <div className='flex'>

      <SideBar/>
      <Body/>

     </div>
      
      <Footer/>
    </div>


  )
}

export default Player
