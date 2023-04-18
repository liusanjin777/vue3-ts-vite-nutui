import Cookies from 'js-cookie'

const myTokenKey: string = 'token'

export function getToken(): any {
  return Cookies.get(myTokenKey)
}

export function setToken(token: string) {
  return Cookies.set(myTokenKey, token)
}

export function removeToken(): void {
  Cookies.remove(myTokenKey) 
}
  