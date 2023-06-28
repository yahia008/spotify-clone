import React from 'react'

const SideOptions = ({title, Icon}) => {
  return (
    <div className='cursor-pointer text-gray-500 h-[30px]
    transition ease-in-out delay-150 hover:text-white flex items-center
    text-xs 
   '> 
   {Icon && <Icon />}
     {Icon ? <h4 className='ml-[5px]'>{title}</h4> :  <p className=''>{title}</p>}
    </div>
  )
}

export default SideOptions
