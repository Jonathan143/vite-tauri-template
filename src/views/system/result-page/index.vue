<template>
  <a-result v-bind="emptyOptions">
    <template #extra>
      <a-button type="primary" @click="onGoBackClick">
        {{ emptyOptions.btnText }}
      </a-button>
    </template>
  </a-result>
</template>

<script setup lang="ts">
type ResultStatus =
  | 'error'
  | 'success'
  | 'warning'
  | 'info'
  | '403'
  | '404'
  | '500'
  | null

interface EmptyOptions {
  status: ResultStatus
  btnText: string
  title?: string
  subtitle: string
}

const SUBTITLES = {
  403: 'Sorry, you are not authorized to access this page.',
  404: 'Sorry, the page you visited does not exist.',
  500: 'Sorry, the server is wrong.',
}

const router = useRouter()
const route = useRoute()

const emptyOptions = computed<EmptyOptions>(() => ({
  status: '404',
  btnText: '返回上一级',
  subtitle: SUBTITLES[`${route.query.status ?? '404'}`],
  ...route.query,
}))

const onGoBackClick = () => {
  const { routerName, routerPath } = route.query

  routerName || routerPath
    ? router.replace(
        routerName ? { name: `${routerName}` } : { path: `${routerPath}` },
      )
    : router.go(-1)
}
</script>

<style lang="scss" scoped></style>
