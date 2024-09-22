import { createApp } from "vue";
import App from "./App.vue";
import { setupRouter } from "./router";
import { setupAssets, setupScrollbarStyle } from "./plugins";

async function bootstrap() {
  const app = createApp(App);

  setupAssets();

  setupScrollbarStyle();

  await setupRouter(app);

  app.mount("#app");
}

bootstrap();
