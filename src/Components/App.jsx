import React, { useState } from 'react'
import '../index.css'
import ShoppingModal from '../Components/ShoppingModal/ShoppingModal'
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  const [stage, setStage] = useState(0);
  const [showShoppingModal, setShowShoppingModal] = useState(true);
  const [showOrdering, setShowOrdering] = useState(false);
  const [showSignUpLogin, setShowSignUpLogin] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [users, setUsers] = useState([]); // For holding names of users
  const [cartItems, setCartItems] = useState([]);
 
  return (
    <>
      {showShoppingModal && <ShoppingModal 
        showOrdering={showOrdering} 
        setShowOrdering={setShowOrdering} 
        showSignUpLogin={showSignUpLogin} 
        setShowSignUpLogin={setShowSignUpLogin} 
        userLoggedIn={userLoggedIn}
        setUserLoggedIn={setUserLoggedIn}
        users={users}
        setUsers={setUsers}
        cartItems={cartItems}
        setCartItems={setCartItems}
        stage={stage}
        setStage={setStage}
      />}
    </>
  )
}

export default App;
