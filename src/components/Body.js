import React from 'react'
import Header from './Header'
import { useDatalayerValue } from '../context/DataLayer'
import { AiFillPlayCircle } from 'react-icons/ai';
import {MdOutlineFavorite} from 'react-icons/md'
import {IoIosMore} from 'react-icons/io'
import SongRow from './SongRow';


const Body = ({spotify}) => {
 const [{discover_weekly}, dispatch] = useDatalayerValue()

 console.log(discover_weekly)

  return (
    <div className=' height-[100vh] w-[80%] 
    bg-gradient-to-b from-violet-900 to-black
    p-[30px] text-white

    '>
       <Header spotify={spotify}/>

       <div className='flex items-end p-[10px]'>

       <img src={discover_weekly?.images[0].url}
        alt='some' className='h-[20vh] ml-[40px] mr-[40px] drop-shadow-xl'/>

       <div className='flex-[1]'>
        <strong>PLAYLIST</strong>
        <h2 className='sm:text-[40px] mb-[10px] text:sm'>Discover Weekly</h2>
        <p className='text-[14px]'>{discover_weekly?.description}</p>
         </div>

       </div>

       <div className='mt-[20px] mb-[20px] ml-[-30px] mr-[-30px]'>

        <div className='flex items-center  '>
         <AiFillPlayCircle className='mr-[20px] ml-[50px] text-[60px] mt' />
         <MdOutlineFavorite className='mr-[20px] text-[30px]'/>
         <IoIosMore className='mr-[20px] text-[30px]' />
        </div>
            {discover_weekly?.tracks.items.map(item => (
              <SongRow track={item.track} />
            ))}
      
       </div>
      
    </div>
  )
}

export default Body
