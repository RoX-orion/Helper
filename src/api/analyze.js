import request from '@/utils/request'

export function analyze(data){
  return request({
    url: '/test',
    method: 'post',
    data
  })
}

export function error(data) {
  return request({
    url: '/wrong',
    method: 'post',
    data
  })
}