import { defineStore, acceptHMRUpdate } from 'pinia'
import { UserState } from './types'

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    openid: '',
    unionid: '',
    corpid: '',
    appid: '',
    campusid: 0,
    nickname: '',
    isDebug: false,
    isSubscribe: true,
    sex: 1,
    userid: '',
    qrcodeurl: '',
    headimgurl: '',
    roles: '', // user 老师/家长，admin 管理员，leader 园长
    userType: 0, // 1：老师；2：家长,
    userName: '',
    schoolType: 2, //  1 幼儿园  2中小学 3 培训机构
  }),

  getters: {
    isTeacher(state) {
      return state.currentUsertype === 1
    },
  },

  actions: {
    setInfo(partial: Partial<UserState>) {
      this.$patch(partial)
    },

    /**
     * 从本地加载身份并注入 pinia
     */
    loadLocalUserInfo() {
      const storage = useStorage('USER_INFO', {})
      // 开发环境使用本地身份
      // import.meta.env.DEV && (storage.value = internal190)
      this.setInfo(storage.value)
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
