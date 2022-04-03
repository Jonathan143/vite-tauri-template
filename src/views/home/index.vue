<template>
  <div class="home">
    <div>home</div>
    <div>{{ msg }}</div>

    <a-button @click="router.push('/404')">go 404</a-button>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()

const msg = ref(11)
</script>

<style lang="scss" scoped></style>
