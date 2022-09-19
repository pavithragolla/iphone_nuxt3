export default defineNuxtRouteMiddleware(() => {});
const auth = useAuth();
const hi = auth.value.isAuthenticated;
