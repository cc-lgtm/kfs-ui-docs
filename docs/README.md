---
home: true
features:
- title: 介绍
  details: 该项目是自己写着玩的，没啥大用。
footer: MIT | cc-lgtm
---

> 安装
```ts
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