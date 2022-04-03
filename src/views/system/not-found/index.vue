<template>
  <div class="h-screen flex items-center justify-center">
    <div>
      <a-empty description="page is not found"></a-empty>
      <a-button @click="onGoHomeClick">go Home</a-button>
      <a-button class="ml-10px" @click="onGoBackClick">go Back</a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()

const onGoHomeClick = () => {
  router.replace('/')
}

const onGoBackClick = () => {
  router.go(-1)
}
</script>

<style lang="scss" scoped></style>
