<template>
	<main>
    <center>
    	<br>
      <img class="responsive-img" style="width: 50px;" src="../assets/logo.png" />
      <div class="section"></div>

      <h5 class="indigo-text">Crear su cuenta</h5>
      <div class="section"></div>

      <div class="container">
        <div class="z-depth-1 grey lighten-4 row" style="display: inline-block; padding: 32px 48px 0px 48px; border: 1px solid #EEE;">

          <form class="col s12" action="index.html">
            <div class='row'>
              <div class='col s12'>
              </div>
            </div>

            <div class='row'>
              <div class='input-field col s12'>
                <input type="email" id="email" v-model="email">
                <label for='email'>Ingrese su email</label>
              </div>
            </div>

            <div class='row'>
              <div class='input-field col s12'>
                <input type="password" id="password" v-model="password">
                <label for='password'>Ingrese su password</label>
              </div>
              
            </div>

            <br />
            <center>
              <div class='row'>
                <button v-on:click="registrar" class='col s12 btn btn-large waves-effect indigo'>Registrar</button>
              </div>
            </center>
          </form>
        </div>
      </div>
   <!--    <a href="#!">Log in</a> -->
    </center>

   
  </main>
</template>

<script>
	import firebase from 'firebase';
	export default {
		name: 'registrar',
		data: function() {
			return {
				email: '',
				password: ''
			};
		},
		methods: {
			registrar: function(e){
				// console.log('registrar');
				firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
				.then(user => {
					alert(`Cuenta creada para ${user.email}`);
					this.$router.go('{path: this.$router.path}');
				},
				err => {
					alert(err.message);
				});

				e.preventDefault();
			}
		}
	};
</script>