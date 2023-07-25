import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Content = () => {
  const [value, setValue] = useState('')
  const [category, setCategory] = useState([])
  let categories = ["electronics","jewelery","men's clothing","women's clothing"]

  useEffect(() => {
    const getCategories = async () => {
      let {data} = await axios(`https://fakestoreapi.com/products/category/${value}`)
      setCategory(data)
    }
    getCategories()
  }, [value])
  console.log(category);


  const chengeSelect = (e) => {
    setValue(e.target.value);
  }

  return (
    <div className='container'>
          <select value={value} onChange={chengeSelect}>
            {
              categories.map(el => (
                <option>{el}</option>
              ))
            }
          </select>
    </div>
  )
}

export default Content