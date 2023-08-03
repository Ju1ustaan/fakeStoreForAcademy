import React from 'react'

const Card = ({el, setOpenModal, setProductId}) => {
  const handleModal = () => {
    setOpenModal(true)
    setProductId(el.id)
  }
  return (
    <div className='card'>
        <div className='card__img'>
          <img src={el.image} alt={el.title}/>
        </div>
        <div className='card__info'>
          <p className='card__title'>{el.title}</p>
          <p className='card__text'>{Math.round(el.price)}$</p>
        </div>
        <button onClick={() => {handleModal()}}>
          Подробнее... 
        </button>
    </div>
  )
}

export default Card