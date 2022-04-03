export interface StudentInfo {
  picpath: string
  gradeid: string
  stuid: number
  isBinding: boolean
  mainSchoolNumber: string
  /** 1：男  2：女 */
  sex: string
  campusid: number
  className: string
  stuName: string
  bjid: number
  classid: number
  name: string
  payment: boolean
  id: number
  schoolNumber: string
  isGraduation: number
  age: number
}
export interface UserState {
  openid: string
  unionid: string
  appid: string
  corpid: string
  campusid: number
  nickname: string
  isDebug: boolean
  isSubscribe: boolean
  sex: 1 | 2
  userid: string
  qrcodeurl: string
  currentUsertype?: 1 | 2
  headimgurl: string
  /** user 老师/家长，admin 管理员，leader 园长 */
  roles: string
  /** 1：老师；2：家长 */
  userType: 0
  phonenum?: number
  userName: string
  /** 1 幼儿园  2中小学 3 培训机构 */
  schoolType: 1 | 2 | 3
  stuInfo?: StudentInfo
  isUseOpenData?: boolean
}
