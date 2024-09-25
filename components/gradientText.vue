<template>
  <div>
    <p class="text-7xl bg_gradient_text font-semibold">{{message}}</p>
  </div>
</template>
<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    }
  }
}
</script>