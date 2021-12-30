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
| modelValue | 绑定值 | `string`,`string[]` | `-` | `-`  |
| placeholder  | placeholder | `string` | `-`| `请输入` |
| size | 按钮的尺寸 | `string` | `mini`,`small`,`medium`,`large` | `medium` |
| disabled | 是否禁止使用 | `boolean` | `true`,`false` | `false` |

#### option属性
| 属性 | 描述 | 类型 | 可选值 | 默认 |
| ------------- |:-------------:| -----:|:-------------:| -----:|
| value | 选项唯一值 | `string` | `-` | `-`  |
| label  | 选项的文字 | `string` | `-`| `-` |
| disabled | 是否禁止使用 | `boolean` | `true`,`false` | `false` |

#### select事件
| 名称 | 描述 | 参数 |
| ------------- |:-------------:| -----:|
| change | 选择时触发 | `当前值` |

#### 源码
```tsx
import {
  defineComponent,
  PropType
} from 'vue'
import CcOption from '../option/index'
import './index.scss'
import { Size } from './../utils/theme/index'
import { useState, useClass, useStyle } from './../utils/hooks/index'

const CcSelect = defineComponent({
  name: 'cc-select',
  components: {CcOption},
  props: {
    modelValue: {
      type: [String, Array] as PropType<string | string[]>
    },
    placeholder: {
      type: String,
      default: '请输入'
    },
    size: {
      type: String as PropType<Size>,
      default: 'medium'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['change'],
  setup(props, { emit, slots }) {
    const slot_arr = slots.default?.()

    const renderOptions = () => {
      return slot_arr?.map((slot, index) => (
        <div
          class="box"
          key={index}
          onClick={() => onChange(index)}
        >{ slot }</div>
      ))
    }

    const [val, useVal] = useState<string>(props.placeholder as string)
    const onChange = (index: number) => {
      const props = slot_arr?.[index].props as {[propname: string]: any}
      const keys = Object.keys(props)
      if (keys.includes('disabled') && !props?.['disabled']) return;
      useR(90)
      useVal(props?.label)
      if (val.value) useOptionStatus(false)
      emit('change', val.value)
    }

    const [optionStatus, useOptionStatus] = useState<boolean>(false)
    const [r, useR] = useState<number>(90)
    const onClick = () => {
      if (props.disabled) return;
      useR(-90)
      useOptionStatus(true)
    }

    const className = useClass((names) => {
      props.disabled && names.push('input-disabled')
      props.size && names.push(`input-${props.size}`)
    }, ['input'])

    const sizeMap = {
      'mini': 90 + 'px',
      'small': 120 + 'px',
      'medium': 150 + 'px',
      'large': 180 + 'px'
    }
    const sizeStyle = useStyle({
      '--w': sizeMap[props.size]
    })

    const icon = '>'
    const iconStyle = useStyle({
      '--r': r.value + 'deg'
    })

    return () => (
      <div class="cc-select" style={sizeStyle.value}>
        <div class={className} onClick={onClick}>{val.value}</div>
        <span class="icon" style={iconStyle.value}>{icon}</span>
        {optionStatus.value &&
        <div class="container">
          { renderOptions() }
        </div>}
      </div>
    )
  }
})

export default CcSelect;
```
