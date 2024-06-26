import { axiosClassic } from '@/api/interceptors'
import { IAuthForm } from './../../types/auth.types'
// import { getContentType } from 'api/api.helpers'

// import Cookies from 'js-cookie'

// import { API_URL, getAuthUrl } from '@/configs/api.config'

// import { IAuthResponse } from '@/store/user/user.interface'

// import { removeTokensStorage, saveToStorage } from './auth.helper'
import { getAuthAdminUrl, getAuthUrl } from '@/configs/api.config'
import { IUser } from '@/types/user.types'

export const AuthService = {
  async login(data: IAuthForm) {
    const response = await axiosClassic.post<IUser>(getAuthUrl('/login'), data)

    // console.log(177, 'response', response)
    // if (response.data.accessToken) {
    //   saveToStorage(response.data)
    // }

    return response
  },
  async session() {
    const response = await axiosClassic.get<any>(getAuthUrl('/session'))

    return response
  },

  async logout() {
    const response = await axiosClassic.post<any>(getAuthUrl('/logout'))
    return response
  },
  async isAdmin(id: string) {
    const response = await axiosClassic.get<any>(getAuthAdminUrl(`/${id}`))
    return response
  }

  // async register(userName: string, password: string) {
  // 	const response = await axiosClassic.post<IAuthResponse>(
  // 		`${API_URL}${getAuthUrl('/register')}`,
  // 		{
  // 			userName,
  // 			password,
  // 		}
  // 	)

  // 	if (response.data.accessToken) {
  // 		saveToStorage(response.data)
  // 	}

  // 	return response
  // },

  // async getNewTokens() {
  // 	const refreshToken = Cookies.get('refreshToken')
  // 	const response = await axiosClassic.post<IAuthResponse>(
  // 		`${API_URL}${getAuthUrl('/login/access-token')}`,
  // 		{
  // 			refreshToken,
  // 		},
  // 		{
  // 			headers: getContentType(),
  // 		}
  // 	)

  // 	if (response.data.accessToken) {
  // 		saveToStorage(response.data)
  // 	}

  // 	return response
  // },
}
