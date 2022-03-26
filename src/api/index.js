import request from '@/utils/request'

export function getUserInfo() {
  return request({
    url: '/mock/783691/pet/1',
    method: 'get'
  })
}

export function getRoleInfo() {
  return request({
    url: '/mock/783691/pet/DDD',
    method: 'get'
  })
}