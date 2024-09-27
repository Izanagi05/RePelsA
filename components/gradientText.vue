<template>
  <div>
    <span :class="['text-7xl', bg_gradient_class, 'font-semibold']">{{message}}</span>
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