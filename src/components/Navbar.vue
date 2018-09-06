<template>
	<nav>
		<div class="nav-wrapper #0d47a1 blue darken-4">
			<div class="container">
				<router-link to="/" class="brand-logo">Administrador de Empleados</router-link>
				<ul class="right">
					<li v-if="isLoggedIn"><span class="email black-text">{{currentUser}}</span></li>
					<li v-if="isLoggedIn"><router-link to="/">Tablero</router-link></li>
					<li v-if="!isLoggedIn"><router-link to="/entrar">Ingresar</router-link></li>
					<li v-if="!isLoggedIn"><router-link to="/registrar">Registrar</router-link></li>
					<li v-if="!isLoggedIn"><button v-on:click="salir" class="btn red">Salir</button></li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
	import firebase from 'firebase';
	export default {
		name: 'navbar',
		data() {
			return {
				isLogin: false,
				currentUser: false
			}
		},
		created() {
			if(firebase.auth.currentUser)
			this.isLogin = true;
			this.currentUser = firebase.auth().updateCurrentUser.email;
		},
		methods: {
			salir: function() {
				firebase.auth().signOut().then(() => {
					this.$router.go('{path: this.$router.path}');
				});
			}
		}
	}
</script>
