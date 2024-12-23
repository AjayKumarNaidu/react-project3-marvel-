export default function Header(props){

    function refreshPage(){
      window.location.reload()
    }

    function marvelPage(){
      window.open("https://www.marvel.com/movies");
    }

    return (
      <>
        <header>
          <div className="header-right">
            <div className="home">
              <i className="fa-solid fa-house" onClick={() =>{ props.refreshPage()}}></i>
              <div className="tooltip-1">Home</div>
            </div>
            
            <div className="marvel-logo">
              <img src="/Marvel_Logo.svg.png" alt="marvel logo" onClick={marvelPage}/>
              <div className="tooltip-1">Official Site</div>
            </div>
            
          </div>
          <label htmlFor="search-box">
            <input id="search-box" type="text" placeholder="eg. Avengers"/>
            <button className="search-button">Click</button>
            <div className="cart">
              <i className="fa-solid fa-cart-shopping" onClick={()=>{ props.showCart()}}></i>
              <div className="tooltip-2">{props.wishList}</div>
            </div>
          </label>
          
        </header>
      </>
    );
}