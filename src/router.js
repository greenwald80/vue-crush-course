import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";

Vue.use(Router);

export default new Router({
  mode: "history", //чтобы были обычные слеши в путях
  routes: [
    //каждый объект представляет из себя новую страницу
    {
      path: "/",
      component: Home,
    },
    {
      path: "/todos",
      component: () => import("./views/Todos.vue"), //with lazy loading
    },
  ],
});
