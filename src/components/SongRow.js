import React from 'react'

const SongRow = ({track}) => {
 
console.log(track)

  return (
    <div className= 'ml-[20px] p-[20px] flex items-center text-white z-10 hover:bg-black opacity-[5] cursor-pointer'>
        <img src={track.album.images[0].url} alt='' className='h-[20vh]'/>
        <div className='ml-[20px]'>
            <h1 className='text-[16px]'>{track.name}</h1>
            <p className='mt-[3px] text-[14px] text-gray-500'>{track.artists.map((artist) => artist.name).join(',')}
            
            {track.album.name}
            </p>
            
        </div>
      
    </div>
  )
}

export default SongRow

