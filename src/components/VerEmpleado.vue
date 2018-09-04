<template>
	<div id="ver-empleado">
		<ul class="collection with-header">
			<li class="collection-header"><h4>{{nombre}}</h4></li>
			<li class="collection-item">Codigo de empleado: {{empleado_id}}</li>
			<li class="collection-item">Departamento: {{dept}}</li>
			<li class="collection-item">Puesto de trabajo: {{puesto}}</li>
		</ul>
		<router-link to="/" class="btn grey">Regresar</router-link>
		<button @click="borrarEmpleado" class="btn red">Borrar</button>

	<div class="fixed-action-btn">
      
      <router-link v-bind:to="{ name: 'editar-empleado', params: { empleado_id: empleado_id }}" class="btn-floating btn-large red">
        <i class="fas fa-pen"></i>
      </router-link>

    </div>
	</div>
</template>

<script>
	import db from './firebaseInit'
	export default {
		name: 'ver-empleado',
		data() {
			return {
				empleado_id: null,
				nombre: null,
				dept: null,
				puesto: null
			}
		},
		beforeRouteEnter(to, from, next) {
			db.collection('empleados').where('empleado_id',
				'==', to.params.empleado_id).get()
			.then(querySnapshot => {
				querySnapshot.forEach(doc => {
					next(vm => {
						vm.empleado_id = doc.data().empleado_id
						vm.nombre = doc.data().nombre
						vm.dept = doc.data().dept
						vm.puesto = doc.data().puesto
					})
				})
			})
		},
		watch: {
			'$route': 'fetchData'
		},
		methods: {
			fetchData() {
				db.collection('empleados').where('empleado_id', '==', 
				this.$route.params.empleado_id).get().then(querySnapshot => {
					querySnapshot.forEach(doc => {
						this.empleado_id = doc.data().empleado_id
						this.nombre = doc.data().nombre
						this.dept = doc.data().dept
						this.puesto = doc.data().puesto
					})
				})
			},
			borrarEmpleado () {
				if(confirm('Esta seguro?')) {
					db.collection('empleados').where('empleado_id', '==',
						this.$route.params.empleado_id).get()
						.then(querySnapshot => {
							querySnapshot.forEach(doc => {
								doc.ref.delete()
								this.$router.push('/')
							})
						})
					}
				}
		}
	}
</script>