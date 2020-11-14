import request from '@/utils/request'

export function analyze(data){
  return request({
    url: 'https://www.baidu.com',
    method: 'post',
    data
  })
}