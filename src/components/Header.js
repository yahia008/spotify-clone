import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import { useDatalayerValue } from '../context/DataLayer';

const Header = ({spotify}) => {
  const [{user}, dispatch] = useDatalayerValue()
  console.log(user)
  return (
    <div className='flex justify-between mb-[30px]'>


      <div className='bg-white text-gray-500 rounded-[30px] flex 
      items-center p-[10px] flex-[0.5] min-w-[70px]'>
     <SearchIcon className='text-gray-500  '/>
     <input type='text' placeholder='Search for Artist, songs'  
     className='w-[100%] border-none'/> 
      

    </div>


    <div className='flex items-center'>
      
<Avatar src={user?.images[0]?.url} alt=''/>
<h4 className='ml-[10px]'>{user?.display_name}</h4>
    </div>


    </div>

    
  )
}

export default Header
