import { createRouter, createWebHistory } from 'vue-router'
import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/home',
			name: 'home',
			component: () => import('@/views/Home.vue'),
			meta: {
				title: `Home | Interfy` 
			}
		}
	]
})


// router.beforeEach(
// 	(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
		// const auth = useAuthStore()
		// auth.is_loading = true
		// try {
		// 	const defaultTitle = 'DebtCore';
		// 	const title = typeof to.meta.title === 'function' ? to.meta.title(to) : to.meta.title;
		// 	document.title = title || defaultTitle;

		// 	const isAuthenticated = auth.isAuthenticated
		// 	const requiresAuth = to.meta.requiresAuth ?? true

		// 	if (requiresAuth && !isAuthenticated) {
		// 		next({ name: 'login' })
		// 		return
		// 	}

		// 	if (to.name === 'login' && isAuthenticated) {
		// 		next({ name: 'dashboard' })
		// 		return
		// 	}

		// 	next()
		// } catch (error) {
		// 	console.log(error)
		// } finally {
		// 	auth.is_loading = false
		// }

// 	}
// )

export default router
