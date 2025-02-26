import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';

import './assets/logica.js'

// ROUTER

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('./views/mainPage.vue')
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('./views/loginForm.vue')
		}
	]
})

const app = createApp(App);
app.use(router);
app.mount('#app');

export default router