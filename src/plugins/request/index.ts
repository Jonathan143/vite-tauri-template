import { Method, AxiosRequestConfig } from 'axios'
import { instance } from './axios'
import type { PendingType, RequestParams, CallApiParams } from './interface'

let pendingList: Array<PendingType> = []
/**
 * 移除重复请求
 */
const removePending = (
  {
    api,
    method,
    requestData,
  }: { api: string; method: Method; requestData: string },
  isRequest = true,
) => {
  const requestIndex = pendingList.findIndex(item => {
    return (
      item.api === api && item.method === method && item.data === requestData
    )
  })

  if (requestIndex !== -1) {
    isRequest && pendingList[requestIndex]?.abort()
    // 从数组中移除记录
    pendingList.splice(requestIndex, 1)
  }
}
/**
 * 清空请求列表
 */
export const clearRequest = () => {
  pendingList.forEach(item => {
    item.abort()
  })
  pendingList = []
}

/**
 * 通用接口请求方法
 * @param {string} api 接口名
 * @param {string} method 请求方法，默认 post
 * @param {object} params 接口入参
 * @param {AxiosRequestConfig} config axios配置
 */
export const request = async <T = any>({
  api,
  method = 'post',
  params = {},
  config = {},
}: RequestParams) => {
  const requestData = JSON.stringify(params)
  /**
   * 发起请求前判断是否有重复请求 有则取消原请求
   * 向请求队列中插入请求
   */
  removePending({ api, method, requestData })
  const controller = new AbortController()
  config.signal = controller.signal
  pendingList.push({
    api,
    method,
    data: requestData,
    abort: () => controller.abort(),
  })

  const requestParams: AxiosRequestConfig = {
    url: api,
    method,
    ...config,
  }
  const dataKey = method === 'get' ? 'params' : 'data'
  requestParams[dataKey] = params

  try {
    const res = await instance.request<T>(requestParams)
    return res.data
  } catch (error) {
    return Promise.reject(error)
  } finally {
    // showLoading && loading?.clear()
    removePending({ api, method, requestData }, false)
  }
}

const mockUrl = ''

/**
 * @param {string} api 接口名
 * @param {object} params 接口入参
 * @param {string} prefix 接口前缀 默认 /api/pc
 * @param {string} method 请求方法，默认 post
 * @param {boolean} mock 默认 false
 * @param {boolean} showError 报错时是否显示 toast 默认 true
 * @param {AxiosRequestConfig} config axios配置
 */
export const callApi = async <T = any>({
  api,
  params = {},
  prefix = '/api',
  method = 'post',
  mock = false,
  showError = true,
  config = {},
}: CallApiParams): Promise<[null, T] | [Error, null]> => {
  const userStore = useUserStore()
  const { userid } = userStore

  try {
    const res = await request<{
      data: T
      code: 0 | -1
      msg: string
    }>({
      api: `${mock ? mockUrl : window.location.origin}${prefix}/${api}`,
      method,
      params: { ...params, userid },
      config,
    })

    if (!res.code) {
      return [null, res.data]
    } else {
      throw new Error(res.msg)
    }
  } catch (error) {
    /**
     * 错误消息为 canceled 则为手动中断的请求
     */
    const msg = (error as Error)?.message
    showError && msg && msg !== 'canceled' && Message?.warning(msg)

    return [error as Error, null]
  }
}
