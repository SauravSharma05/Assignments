import React from 'react'
import './register.css'

function Regispage() {
  return (
    <div>
	<div class="content">
	<section>
		<div class="register-wrapper">
		<div class="register-block">
		<h3 class="register-title">Create an account</h3>
			<p>Create an account using the form below.</p>
			<form action="">
			<input type="email" placeholder="Enter your email"/>
			<input type="password" placeholder="Enter your password" />
			<input type="submit" value="Create my account"/>
			</form>
		</div>
		</div>
	</section>
</div>
    </div>
  )
}

export default Regispage