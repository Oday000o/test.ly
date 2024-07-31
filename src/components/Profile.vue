<template>
  <Top/>
  <Skills/>
  <Message/>
  <Bottom/>
</template>
<script>
import Skills from './Skills.vue'
import Bottom from './bottom.vue'
import Message from './Message.vue'
import Top from './Top.vue'
export default {
  name:'Profile',
  components:{
    Top,
    Skills,
    Message,
    Bottom
  },
}
</script>

<style>
</style>