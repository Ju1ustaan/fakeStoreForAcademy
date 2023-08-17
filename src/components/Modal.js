const Modal = ({ setOpenModal, el, setCartItems, cartItems }) => {
    

    const addToCart = () => {
    setCartItems(localStorage.getItem('addCart' || []))

    let newCart = [...cartItems, el] 

    
    console.log(newCart);
    localStorage.setItem('addCart', JSON.stringify())
    }
    
    return (
        <div className="modal" >
            <div className="modal__wrapper">
                <p className="x-marc" onClick={() => { setOpenModal(false) }}>&times;</p>
                <div className="modal__img">
                    <img src={el.image} alt={el.title} />
                </div>
                <div className="modal__info">
                    <p className="modal__title">{el.title}</p>
                    <p className="modal__text">{el.description}</p>
                    <p className="modal__text">Price: {Math.round(el.price)}$</p>
                    <p className="modal__text">Rate: {el.rating.rate}</p>
                    <div className="modal__btns">
                    <button onClick={() => {addToCart()}}>Add to cart</button>
                    <button className="modal__btn">Like</button>    
                    </div>          
                </div>
            </div>
        </div>


    )
}

export default Modal

