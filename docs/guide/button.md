## Button 按钮
*用于一个基础的操作*
#### 不同类型
:::demo 使用`type`属性来定义 Button 的类型。
```vue
<template>
  <div>
    <cc-button></cc-button>
    <cc-button type="normal"></cc-button>
    <cc-button type="warn"></cc-button>
    <cc-button type="error"></cc-button>
  </div>
</template>
```
:::

#### 禁用状态
:::demo 使用`disabled`属性禁用 Button。
```vue
<template>
  <div>
    <cc-button disabled></cc-button>
    <cc-button type="normal" disabled value="normal"></cc-button>
    <cc-button type="warn" disabled value="warn"></cc-button>
    <cc-button type="error" disabled value="error"></cc-button>
  </div>
</template>
```
:::

#### 加载中
:::demo 使用`isLoading`属性让 Button 加载。
```vue
<template>
  <div>
    <cc-button isLoading></cc-button>
    <cc-button :isLoading="isLoading" @click="onClick"></cc-button>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup(){
    const isLoading = ref(false)
    const onClick = () => isLoading.value = true
    return {
      isLoading,
      onClick
    }
  }
})
</script>
```
:::

#### 不同尺寸
:::demo 使用`size`属性来展示 Button 不同大小。
```vue
<template>
  <div>
    <cc-button size="mini" type="normal"></cc-button>
    <cc-button size="small" type="warn"></cc-button>
    <cc-button size="medium" type="error"></cc-button>
  </div>
</template>
```
:::

#### 圆形(角)按钮
:::demo 使用`size`属性来展示 Button 不同大小。
```vue
<template>
  <div>
    <cc-button circle></cc-button>
    <cc-button round="10"></cc-button>
    <cc-button :round="20"></cc-button>
  </div>
</template>
```
:::

#### 属性
| 属性 | 描述 | 类型 | 可选值 | 默认 |
| ------------- |:-------------:| -----:|:-------------:| -----:|
| class | 自定义按钮的样式类名 | `string` | `-` | `-`  |
| type  | 按钮的类型 | `string` | `normal`,`warn`,`error` | `normal` |
| size | 按钮的尺寸 | `string` | `mini`,`small`,`medium` | `medium` |
| circle | 是否圆形按钮 | `boolean` | `true`,`false` | `false` |
| disabled | 是否禁止点击 | `boolean` | `true`,`false` | `false` |
| isLoading | 是否开启加载 | `boolean` | `true`,`false` | `false` |
| round | 按钮的圆角 | `number`,`string` | `-` | `0` |

#### 事件
| 名称 | 描述 | 参数 |
| ------------- |:-------------:| -----:|
| click | 按钮点击是触发 | `-` |

#### slots
| 名称 | 描述 |
| ------------- |:-------------:|
| `-` | `Button`内自定义内容 |
