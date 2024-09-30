<template>
  <div>
    <span :class="['xl:text-7xl lg:text-7xl text-5xl', bg_gradient_class, 'font-bold']">{{message}}</span>
  </div>
</template>
<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    },
    bg_gradient_class: {
      type: String,
      required: true
    }
  }
}
</script>