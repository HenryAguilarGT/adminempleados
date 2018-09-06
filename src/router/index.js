import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard';
import EmpleadoNuevo from '@/components/EmpleadoNuevo';
import VerEmpleado from '@/components/VerEmpleado';
import EditarEmpleado from '@/components/EditarEmpleado';
import Login from '@/components/Login';
import Register from '@/components/Register';
import firebase from 'firebase';

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/entrar',
      name: 'login',
      component: Login,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/registrar',
      name: 'register',
      component: Register,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/nuevo',
      name: 'empleado-nuevo',
      component: EmpleadoNuevo,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/actualizar/:empleado_id',
      name: 'editar-empleado',
      component: EditarEmpleado,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/:empleado_id',
      name: 'ver-empleado',
      component: VerEmpleado,
      meta: {
        requiresAuth: true
      }
    }

  ]
});

// Guardias Nav
router.beforeEach((to, from, next) => {
// Revisa por guardias requiredAuth
if(to.matched.some(record => record.meta.requiresAuth)) {
  //Revisa la condicionante si no esta logueado
  if(!firebase.auth().currentUser){
    // Va a ingreso
    next({
      path: '/entrar',
      query: {
        redirect: to.fullPath
      }
    });
  } else {
    //Procede a la ruta
    next();
  }
} else if(to.matched.some(record => record.meta.requiresGuest)) {
  //Revisa la condicionante si  esta logueado
  if(firebase.auth().currentUser){
    // Va a ingreso
    next({
      path: '/',
      query: {
        redirect: to.fullPath
      }
    });
  } else {
    //Procede a la ruta
    next();
  }
} else {
  //Procede a la ruta
  next();
}
});

export default router;

