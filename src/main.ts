import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { Button, Header, Page } from './stories/stories.module';

const app = createApp(App);

app.component('MyButton', Button);
app.component('MyHeader', Header);
app.component('MyPage', Page);

createApp(App).mount('#app')
