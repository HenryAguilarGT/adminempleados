import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import EmpleadoNuevo from '@/components/EmpleadoNuevo'
import VerEmpleado from '@/components/VerEmpleado'
import EditarEmpleado from '@/components/EditarEmpleado'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/nuevo',
      name: 'empleado-nuevo',
      component: EmpleadoNuevo
    },
    {
      path: '/actualizar/:empleado_id',
      name: 'editar-empleado',
      component: EditarEmpleado
    },
    {
      path: '/:empleado_id',
      name: 'ver-empleado',
      component: VerEmpleado
    }

  ]
})
