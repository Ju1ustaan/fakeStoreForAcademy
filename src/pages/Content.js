import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Modal from '../components/Modal'


const Content = ({cartItems, setCartItems}) => {
  const [productId, setProductId] = useState(0)
  const [product, setProduct] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [value, setValue] = useState('')
  const [category, setCategory] = useState([])
  let categories = ["electronics","jewelery","men's clothing","women's clothing"]

  let newCategories = [
    {
      title: 'Все товары',
      value: ''
    },
    {
      title: 'Электроника',
      value: 'electronics'
    },
      {
      title: 'Ювелирка',
      value: 'jewelery'
    },
      {
      title: 'Мужская одежда',
      value: "men's clothing"
    },
      {
      title: 'Женская одежда',
      value: "women's clothing"
    },
  ]

  useEffect(() => {
    const getCategories = async () => {
      let {data} = await axios(`https://fakestoreapi.com/products/${!value? '': `/category/${value}`}`)
      setCategory(data)
    }
    getCategories()
  }, [value])


  const chengeSelect = (e) => {
    categories.map((el) => {
      if(el === e.target.className) {
        setValue(e.target.className)
      }else if (e.target.className === ''){
        setValue('')
      }
    })
  }

  useEffect(() => {
    setProduct(
      category.filter((el) => {
          return el.id === productId
      })
    )
  },[productId])
  

  return (
    <div className='container'>
          <ul className='categories__list'>
            {
              newCategories.map(el => (
                <li onClick={chengeSelect} className={el.value}>{el.title}</li>
              ))
            }
          </ul>
          <p className='count__product'>Количество товаров: {category.length}шт</p>
        <div className='wrapper'>
        {
            category.map((el) => (
                  <Card key={el.id} el={el} setOpenModal={setOpenModal} setProductId={setProductId}/>
              ))
          }
          {  
            openModal && product.map((el) => (
              <Modal cartItems={cartItems} setCartItems={setCartItems} setOpenModal={setOpenModal} el={el}/>
            ))
          }
        </div>
    </div>
  )
}

export default Content