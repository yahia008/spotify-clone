import React from 'react'
import SideOptions from './SideOptions'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineHome} from 'react-icons/ai'
import {MdLibraryMusic} from 'react-icons/md'
import { useDatalayerValue } from '../context/DataLayer'



const SideBar = () => {

  const [{ playlists}, dispatch] = useDatalayerValue()

  
  console.log(playlists)
  return (
    <div className='  w-[20%] bg-black min-w-[150px]
    pr-[10px] pl-[10px]
    ' >

      <img src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg
      ' width='100px' height='70px'
      className='object-contain mr-auto'
      />
   
   
   <SideOptions title='Home' Icon={AiOutlineHome}/>
   <SideOptions title='Search' Icon={BsSearch}/>
   <SideOptions title='Your Library' Icon={MdLibraryMusic}/>
    <br/>

    <strong className='text-gray-500 ml-[10px] p-[5px] text-xs'>PLAYLIST</strong>
    <hr className='border-solid border-gray-800 m-auto '/>
   
    {playlists?.items?.map((playli, index) => <SideOptions title={playli.name} key={index}/>)}

    </div>
  )
}

export default SideBar
