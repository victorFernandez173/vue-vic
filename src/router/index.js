import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/HomeView.vue";
import Author from "@/views/AuthorView.vue";
import Tools from "@/views/ToolsView.vue";
import PageNotFound from "@/views/PageNotFound.vue";
import Pokemon from "@/views/PokemonView.vue";
import JsonServer from "@/views/JsonServer.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/tools",
      name: "Tools",
      component: Tools,
    },
    {
      path: "/pokemon",
      name: "Pokemon",
      component: Pokemon,
    },
    {
      path: "/author",
      name: "Author",
      component: Author,
    },
    {
      path: "/jsonserver",
      name: "JsonServer",
      component: JsonServer,
    },
    // SI HUBIERA ALGÚN ERROR
    {
      path: "/:pathMatch(.*)*",
      name: "PageNotFound",
      component: PageNotFound,
    },
  ],
});

export default router;
