# Switch
*用于两种状态切换*
#### 默认
:::demo
```vue
<template>
  <div>
    <cc-switch></cc-switch>
  </div>
</template>
```
:::

#### 禁止点击
:::demo
```vue
<template>
  <div>
    <cc-switch disabled></cc-switch>
  </div>
</template>
```
:::

#### 设置开启的value和关闭的value
:::demo
```vue
<template>
  <div>
    <cc-switch></cc-switch>
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
