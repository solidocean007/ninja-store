import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ShoppingModal from './Components/ShoppingModal/ShoppingModal'
import CartButton from './Components/CartButton/CartButton'

function App() {
  const [showOrdering, setShowOrdering] = useState(false);
  const [showSignUpLogin, setShowSignUpLogin] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <>
      <ShoppingModal 
        showOrdering={showOrdering} 
        setShowOrdering={setShowOrdering} 
        showSignUpLogin={showSignUpLogin} 
        setShowSignUpLogin={setShowSignUpLogin} 
        userLoggedIn={userLoggedIn} 
      />
      <CartButton 
        userLoggedIn={userLoggedIn} 
        setShowOrdering={setShowOrdering} 
        setShowSignUpLogin={setShowSignUpLogin} 
      />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>   
    <App />
  </React.StrictMode>,
)
