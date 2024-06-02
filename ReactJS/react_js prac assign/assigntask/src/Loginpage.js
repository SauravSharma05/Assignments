import React from 'react'
import './login.css'

function Loginpage() {
  return (
    <div>
          <div class="login-form">
         <div class="text">
            LOGIN
         </div>
         <form>
            <div class="field">
               <div class="fas fa-envelope"></div>
               <input type="text" placeholder="Email or Phone" />
            </div>
            <div class="field">
               <div class="fas fa-lock"></div>
               <input type="password" placeholder="Password" />
            </div>
            <button>LOGIN</button>
            <div class="link">
               Not a member?
               <a href="#">Signup now</a>
            </div>
         </form>
      </div>
    </div>
  )
}

export default Loginpage