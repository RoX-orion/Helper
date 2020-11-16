import request from '@/utils/request'

export function analyze(data){
  return request({
    url: '/test',
    method: 'get',
    params: {
      content: data
    }
  })
}