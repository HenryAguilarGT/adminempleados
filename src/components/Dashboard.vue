<template>
	<div id="dashboard">
		<ul class="collection with header">
			<li class="collection-header">
				<h4>Empleados</h4>
			</li>
			<li v-for="empleado in empleados" v-bind:key="empleado.id" class="collection-item">
				<div class="chip">{{empleado.dept}}</div>
				{{empleado.empleado_id}}:{{empleado.nombre}}

				<router-link class="secondary-content" v-bind:to="{name: 'ver-empleado', params:{empleado_id: empleado.empleado_id}}">
					<i class="fa fa-eye"></i>
				</router-link>


			</li>
			
		</ul>		
		<div class="fixed-action-btn">
			<router-link to="/nuevo" class="btn-floating btn-large red">
				<i class="fa fa-plus"></i>
			</router-link>
		</div>
	</div>
</template>

<script>
	import db from './firebaseInit'
	export default {
		name: 'dashboard',
		data() {
			return {
				empleados: []
			}
		},
		created () {
			db.collection('empleados').orderBy('dept').get().then
			(querySnapshot => {
				querySnapshot.forEach(doc => {
					// console.log(doc.data())
					const data = {
						'id': doc.id,
						'empleado_id': doc.data().empleado_id,
						'nombre': doc.data().nombre,
						'dept': doc.data().dept,
						'puesto': doc.data().puesto
					}
					this.empleados.push(data)
				})
			})
		}
	}
</script>