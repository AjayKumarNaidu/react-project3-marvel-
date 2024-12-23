import { useState } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Phase from './components/Phase'
import Cart from './components/Cart'
import { use } from 'react'

function App() {
  const [isPhase,setIsPhase] = useState(false)

  const [wishList,setWishList] = useState(0)

  const [wishListArray,setWishListArray] = useState([])

  const [currPhase,setCurrPhase] = useState(null)

  const [showCart1,setShowCart1] = useState(false)

  const [showContent,setShowContent] = useState(true)

  function refreshPage(){
    setIsPhase(false)
    setShowCart1(false)
    setShowContent(true)
  }

  function addToWishList(movie){
    setWishList(prev => prev+1)
    setWishListArray(prev => [...prev,movie])
    console.log(wishListArray)
  }

  function intoPhase(i){
    setIsPhase(prev => !prev)
    setShowCart1(false)
    setShowContent(false)
    setCurrPhase(i)
  }

  function showCart(){
    setShowCart1(prev => !prev)
    setIsPhase(false)
    setShowContent(false)
  }

  return (
    <>
      <Header wishList={wishList} showCart={showCart} refreshPage={refreshPage}/>
      <section>
        {showContent && <>
          <Content title={"PHASE1"} index={1} intoPhase={intoPhase}/>
          <Content title={"PHASE2"} index={2} intoPhase={intoPhase}/>
          <Content title={"PHASE3"} index={3} intoPhase={intoPhase}/>
          <Content title={"PHASE4"} index={4} intoPhase={intoPhase}/>
          <Content title={"PHASE5"} index={5} intoPhase={intoPhase}/>
          <Content title={"PHASE6"} index={6} intoPhase={intoPhase}/>
        </>
        }
        {isPhase && <Phase currPhase={currPhase} addToWishList={addToWishList}/>}
        
        {showCart1 && <Cart wishListArray={wishListArray}/>}
      </section>
    </>
  )
}

export default App
