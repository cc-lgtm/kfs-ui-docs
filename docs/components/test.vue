<template>
  <div>
    <cc-button value="起步" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Message from 'kfs-ui/packages/message/index.ts'

export default defineComponent({
  setup() {
    Message({})
  },
})
</script>
