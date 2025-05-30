import React from 'react'

const Rules = () => {
  return (
    <div className='p-5 w-[780px] h-[210px] bg-red-100 m-auto my-5'>
      <h2 className='font-semibold text-2xl mb-6'>How to play dice game</h2>
      <div className='font-medium text-[17px]'>
        <p>1st - Select any number</p>
        <p>2nd - Click on dice image</p>
        <p>3rd - after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>4th - if you get wrong guess then  2 point will be deducted</p>
      </div>
    </div>
  )
}

export default Rules
