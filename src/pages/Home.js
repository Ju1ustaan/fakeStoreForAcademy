import Card from '../components/Card'

const Home = ({products}) => {
  return (
    <div>
      {
        products.map((el) => (
          <p>{el.title}</p>
        ))
      }
    </div>
  )
}

export default Home