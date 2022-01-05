---
home: true
features:
- title: 介绍
  details: 该项目是自己学习vue3写着玩的，没啥大用。
footer: MIT | cc-lgtm
---
<div style="margin: 10px auto">
  <cc-button value="起步" type="success" @click="goto" />
</div>

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