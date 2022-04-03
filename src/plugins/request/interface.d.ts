import type { Method, AxiosRequestConfig } from 'axios'

export interface PendingType {
  api?: string
  method?: Method
  data: any
  abort: () => void
}

export interface RequestParams {
  api: string
  params?: Record<string, any>
  method?: Method
  config?: AxiosRequestConfig
}

export interface CallApiParams extends RequestParams {
  prefix?: string
  mock?: boolean
  showError?: boolean
}
