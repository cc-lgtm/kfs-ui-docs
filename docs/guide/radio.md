# Radio
*用于是否选择*
#### 默认
:::demo
```vue
<template>
  <div>
    <cc-radio value="1">js</cc-radio>
  </div>
</template>
```
:::

#### 禁用
:::demo
```vue
<template>
  <div>
    <cc-radio disabled value="1">vue</cc-radio>
  </div>
</template>
```
:::

#### 一组单选
:::demo
```vue
<template>
  <div>
    <cc-radio-group>
      <cc-radio disabled value="1">vue</cc-radio>
      <cc-radio disabled value="2">react</cc-radio>
    </cc-radio-group>
  </div>
</template>
```
:::

#### radio-group属性
| 属性 | 描述 | 类型 | 可选值 | 默认 |
| ------------- |:-------------:| -----:|:-------------:| -----:|
| checked  | 是否选中 | `boolean` | `true`,`false` | `false` |
| disabled | 是否禁用 | `boolean` | `true`,`false` | `false` |
| size | radio尺寸 | `string` | `mini`,`small`,`medium`,`large` | `medium` |

#### radio属性
| 属性 | 描述 | 类型 | 可选值 | 默认 |
| ------------- |:-------------:| -----:|:-------------:| -----:|
| value | 选项唯一值 | `string`,`number` | `-` | `-`  |
| checked  | 是否选中 | `boolean` | `true`,`false` | `false` |
| disabled | 是否禁用 | `boolean` | `true`,`false` | `false` |
| size | radio尺寸 | `string` | `mini`,`small`,`medium`,`large` | `medium` |

#### 事件
| 名称 | 描述 | 参数 |
| ------------- |:-------------:| -----:|
| change | 选择时触发 | `当前值` |

#### 源码
```tsx
import {
  defineComponent,
  PropType
} from 'vue'
import './index.scss'
import { Size } from './../utils/theme/index'
import { useState, useClass } from './../utils/hooks/index'

const CcRadio = defineComponent({
  name: 'cc-radio',
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number],
      required: true
    },
    size: {
      type: String as PropType<Size>,
      default: 'medium'
    }
  },
  emits: ['change'],
  setup(props, { emit, slots }) {
    const [value, useValue] = useState<boolean>(props.checked)
    const [radioRef] = useState<HTMLDivElement>()
    const onClick = () => {
      if (props.disabled) return;
      useValue(!value.value)
      emit('change', value.value, radioRef)
    }

    const className = useClass((classes) => {
      props.disabled && classes.push('cc-radio-disabed')
      props.size && classes.push(`cc-radio-${props.size}`)
      value.value && classes.push('cc-radio-checked')
    })

    return () => (
      <div class="cc-radio">
        <div
          ref={radioRef}
          class={className}
          onClick={onClick}
        ></div>
        {slots.default?.()}
      </div>
    )
  }
})

export default CcRadio;
```
