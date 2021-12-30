---
home: true
features:
- title: 介绍
  details: 该项目是自己写着玩的，没啥大用。
footer: MIT | cc-lgtm
---
<div style="margin: 10px auto">
  <cc-button value="起步" type="success" @click="goto" />
  <component v-if="button" :is="button"></component>
</div>
<test></test>

<script setup lang="ts">
import {ref, onMounted} from 'vue'
const goto = () => {
  location.href = '/guide/button.html'
}
const button = ref(null)
onMounted(() => {
  import('/home/littlebird/桌面/vue_docs/docs/docs/components/test.vue').then(module => {
    button.value = module.default
  })
})
</script>

> 安装
```sh
npm i kfs-ui
yarn add kfs-ui
```

> 引用
```ts
import { createApp } from 'vue'
import App from './App.vue'
import kfs-ui from 'kfs-ui/lib/index'
import 'kfs-ui/lib/index.css'

const app = createApp(App)

app
.use(kfs-ui)
.mount('#app')
```

> 方法
```ts
import cc-message from 'kfs-ui/lib/index'

cc-message({
  type: '...',
  text: '...'
})
```