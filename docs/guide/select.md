# Select
*用于一组数据的选择*
#### 普通的
:::demo
```vue
<template>
  <div>
    <cc-select placeholder="select">
      <cc-option label="js" />
      <cc-option label="css" />
      <cc-option label="html" />
    </cc-select>
  </div>
</template>
```
:::

#### 禁用状态
:::demo 使用`disabled`属性禁用 select。
```vue
<template>
  <div style="display: flex">
    <cc-select placeholder="select1" disabled>
      <cc-option label="js" />
      <cc-option label="css" />
      <cc-option label="html" />
    </cc-select>
    <cc-select placeholder="select2">
      <cc-option label="js" />
      <cc-option label="css" disabled />
      <cc-option label="html" />
    </cc-select>
  </div>
</template>
```
:::

#### 不同尺寸
:::demo 使用`size`属性来展示 Button 不同大小。
```vue
<template>
  <div style="display: flex">
    <cc-select placeholder="select1" disabled size="mini">
      <cc-option label="js" />
      <cc-option label="css" />
      <cc-option label="html" />
    </cc-select>
    <cc-select placeholder="select2" size="small">
      <cc-option label="js" />
      <cc-option label="css" disabled />
      <cc-option label="html" />
    </cc-select>
    <cc-select placeholder="select3" disabled size="medium">
      <cc-option label="js" />
      <cc-option label="css" />
      <cc-option label="html" />
    </cc-select>
    <cc-select placeholder="select4" size="large">
      <cc-option label="js" />
      <cc-option label="css" disabled />
      <cc-option label="html" />
    </cc-select>
  </div>
</template>
```
:::


#### select属性
| 属性 | 描述 | 类型 | 可选值 | 默认 |
| ------------- |:-------------:| -----:|:-------------:| -----:|
| class | 自定义按钮的样式类名 | `string` | `-` | `-`  |
| type  | 按钮的类型 | `string` | `normal`,`warn`,`error` | `normal` |
| size | 按钮的尺寸 | `string` | `mini`,`small`,`medium` | `medium` |
| circle | 是否圆形按钮 | `boolean` | `true`,`false` | `false` |
| disabled | 是否禁止点击 | `boolean` | `true`,`false` | `false` |
| isLoading | 是否开启加载 | `boolean` | `true`,`false` | `false` |
| round | 按钮的圆角 | `number`,`string` | `-` | `0` |

#### option属性
| 属性 | 描述 | 类型 | 可选值 | 默认 |
| ------------- |:-------------:| -----:|:-------------:| -----:|
| class | 自定义按钮的样式类名 | `string` | `-` | `-`  |
| type  | 按钮的类型 | `string` | `normal`,`warn`,`error` | `normal` |
| size | 按钮的尺寸 | `string` | `mini`,`small`,`medium` | `medium` |
| circle | 是否圆形按钮 | `boolean` | `true`,`false` | `false` |
| disabled | 是否禁止点击 | `boolean` | `true`,`false` | `false` |
| isLoading | 是否开启加载 | `boolean` | `true`,`false` | `false` |
| round | 按钮的圆角 | `number`,`string` | `-` | `0` |

#### select事件
| 名称 | 描述 | 参数 |
| ------------- |:-------------:| -----:|
| click | 按钮点击是触发 | `-` |
