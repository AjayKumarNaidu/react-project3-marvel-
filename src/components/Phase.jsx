import { phaseData } from "../phaseData";

export default function Phase(props){

  function userEvent(){
    window.alert("This feature is not yet included")
  }

  const jsxElement = phaseData[props.currPhase - 1]['movies'].length ? phaseData[props.currPhase - 1]['movies'].map((movie,index)=>{
    
    return (<div className="movie" key={index}>
              <div className="movie-image"><img className="movie-image-1" src={movie.image}/></div>
              <h3>{movie.name}({movie.year})</h3>
              <div className="explore">
                <p onClick={userEvent}>Click For More</p>
                <button className="wishlist" onClick={() => {props.addToWishList(movie)}}>Add to Cart</button>
              </div>
            </div>)
  }) : <h1>This Data is Not updated by the Devloper</h1>


  return (
    <>
    <h1 style={{fontSize:"2.5rem",fontWeight:"800"}}>Phase {props.currPhase}</h1>
      <div className="phase">
        {jsxElement}
      </div>
    </>
  );
}