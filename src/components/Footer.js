import React from 'react'
import {BsShuffle} from 'react-icons/bs'
import {AiFillStepBackward} from 'react-icons/ai'
import {BsFillPauseCircleFill} from 'react-icons/bs'
import {BsRepeat} from 'react-icons/bs'
import {FaPlayCircle} from 'react-icons/fa'
import {AiFillStepForward} from 'react-icons/ai'
import {Grid} from '@mui/material'
import {Slider} from '@mui/material'
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';





const Footer = () => {
  return (
    <div className='sticky bottom-0 h-[65px]
     w-[100%] bg-gray-700
     p-[20px]  flex justify-between
        
    '>
      <div className='flex-[30%] text-white flex items-center text-xs'>
        <img src='' 
        className='h-[50px] 
        w-[60px] mr-[20px]
        object-contain
        
        '
        />
        <div>
         <h1 className=''>blue</h1>
        <p>Album</p>
        </div>
        </div>

      <div className='flex-[40%] flex text-white pl-[100px] pr-[100px] max-w-[400px]
      items-center justify-between
      '>
      <BsShuffle color='green' className='hover:scale-75'/>
      <AiFillStepBackward/>
      <FaPlayCircle/>
      <AiFillStepForward/>
      <BsRepeat color='gree n'/>

      </div>

      <div className='flex-[30%]  text-green-500 min-w-[300px]'>
       <Grid container spacing={2}> 

  <Grid item>
    <PlaylistPlayIcon/>
  </Grid>
  <Grid item>
    <VolumeDownIcon/>
  </Grid>
  <Grid item xs >
    
  <Slider 
    
    size="small"
    defaultValue={70}
    aria-label="Small"
    valueLabelDisplay="auto"

    /> 
  </Grid>
</Grid>
  </div>
    </div>
  )
}

export default Footer
