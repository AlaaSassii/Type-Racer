import React from 'react'

const Car = ({valueLen,textLength}) => {
  return (
    <div className='CarCompo'>
        <div>
            <div style={{width:"80vw"}}>
        <img style={{transform:`translateX( calc(${valueLen/textLength *100}vw ))`}} src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Syop_pYu35dPoNtNgCYZAj5xDor3mSWYWw&usqp=CAU`}/>
        </div>
        </div>
        <div className='underline'></div>
    </div>
  )
}

export default Car