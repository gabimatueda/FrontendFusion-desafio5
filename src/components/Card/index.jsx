import React from 'react';

const Card = ({ picture, name, role, location, language }) => {
  return (
    <div className={`bg-lightBlue
        desktop:w-[615.5px] desktop:h-[256px] 
        tablet:w-[338px] h-[220px]
        large:w-[478px] large:h-[296px]
        small:w-[328px] small:h-[228px]
        rounded-lg shadow-lg grid grid-cols-2`}
    >
      <div className='h-full flex items-center bg-commonGray p-3'>
        <img
          src={`/pictures/${picture}.png`}
          alt="foto"
          className='w-full h-full object-cover rounded-lg'
        />
      </div>

      <div className='p-5 flex flex-col justify-around'>
        <div className='flex flex-col gap-2'>
          <h2 className='desktop:text-4xl large:text-2xl text-xl font-semibold'>{name}</h2>
          <p className='font-semibold desktop:text-lg'>{role}</p>
          <p className='flex gap-1 items-center'>
            <img src="/icons/location.svg" alt="Location icon" className='w-4 h-4'/> {location}
          </p>
          <p>Speaks: {language}</p>
        </div>

        <div className='hidden desktop:flex gap-4 flex-wrap cursor-pointer'>
          <img src="/icons/telegram.svg" alt="telegram icon" className='w-6 h-6' />
          <img src="/icons/linkedin.svg" alt="linkedin icon" className='w-6 h-6' />
          <img src="/icons/dribble.svg" alt="dribble icon" className='w-6 h-6' />
          <img src="/icons/behance.svg" alt="behance icon" className='w-6 h-6' />
        </div>
      </div>
    </div>
  );
};

export default Card;