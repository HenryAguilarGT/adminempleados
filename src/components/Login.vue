<template>
	<main>
    <center>
      <br>
      <img class="responsive-img" style="width: 50px;" src="../assets/logo.png" />
      <div class="section"></div>

      <h5 class="indigo-text">Por favor, ingrese a su cuenta</h5>
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
                <input type='email' id='email' v-model="email" />
                <label for='email'>Email</label>
              </div>
            </div>

            <div class='row'>
              <div class='input-field col s12'>
                <input type='password' id='password' v-model="password" />
                <label for='password'>Password</label>
              </div>
              <label style='float: right;'>
								<a class='pink-text' href='#!'><b>Olvido su password?</b></a>
							</label>
            </div>

            <br />
            <center>
              <div class='row'>
                <button v-on:click="ingresar" class='col s12 btn btn-large waves-effect indigo'>Ingresar</button>
              </div>
            </center>
          </form>
        </div>
      </div>
      <!-- <a href="#!">Create account</a> -->
    </center>

    
  </main>
</template>

<script>
import firebase from 'firebase';
	export default {
		name: 'ingresar',
			data: function() {
			return {
				email: '',
				password: ''
			};
		},
		methods: {
			ingresar: function(e){
				// console.log('ingresar');
				firebase.auth().signInWithEmailAndPassword(this.email, this.password)
				.then(user => {
					alert(`Bienvenido al sistema ${user.email}`);
					this.$router.go('{path: this.$router.path}');
				},
				err => {
					alert(err.message);
				});

				e.preventDefault();
			}
		}
	}
</script>