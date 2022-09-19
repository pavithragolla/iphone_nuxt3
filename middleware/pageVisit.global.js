export default defineNuxtRouteMiddleware(() => {
  const pageVisitCount = usePageVisitCount();
  pageVisitCount.value++;
  console.log("global");
});
