import { useState } from "react";

export default function Cart(props){

  const [newArray,setNewArray] = useState(props.wishListArray)

  function userEvent(){
    window.alert('This feature is not yet included')
  }

  const cartData = newArray.length > 0 ? newArray.map((movie,index)=>{
    return (
      <div className="movie" key={index} style={{backgroundColor:"#FFC145"}}>
        <div className="movie-image"><img className="movie-image-1" src={movie.image}/></div>
        <h3>{movie.name}({movie.year})</h3>
        <div className="explore">
          <p onClick={userEvent}>Click For More</p>
          <button className="wishlist">Remove</button>
        </div>
      </div>
    );
  }) : <h2>Your Cart is Empty!</h2>

  return (
    <>
      <h1 style={{color:'red',fontSize:'2rem',fontStyle:'oblique',fontWeight:'bold'}}>Cart</h1>
      <div className="phase">
        {cartData}
      </div>
    </>
  )
}