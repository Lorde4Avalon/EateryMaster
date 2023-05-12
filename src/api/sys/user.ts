import { defHttp } from '/@/utils/http/axios'
import { LoginParams, LoginResultModel, GetUserInfoModel, RegisterParams } from './model/userModel'

import { ErrorMessageMode, Result } from '/#/axios'

enum Api {
  Login = '/employee/login',
  Logout = '/logout',
  GetUserInfo = '/employee',
  GetPermCode = '/getPermCode',
  TestRetry = '/testRetry',
  Register = '/employee/register',
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.Login,
      params,
    },
    {
      errorMessageMode: mode,
      isTransformResponse: false,
    },
  )
}

/**
 * @description: user register api
 */
export function registerApi(params: RegisterParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<Result>(
    {
      url: Api.Register,
      params,
    },
    {
      errorMessageMode: mode,
      isTransformResponse: false,
    },
  )
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return defHttp.get<GetUserInfoModel>({ url: Api.GetUserInfo }, { errorMessageMode: 'none' })
}

export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.GetPermCode })
}

export function doLogout() {
  return defHttp.get({ url: Api.Logout })
}

export function testRetry() {
  return defHttp.get(
    { url: Api.TestRetry },
    {
      retryRequest: {
        isOpenRetry: true,
        count: 5,
        waitTime: 1000,
      },
    },
  )
}
