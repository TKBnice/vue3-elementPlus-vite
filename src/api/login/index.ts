import request from '@/utils/request';

// 用户登录
export function signIn(params: object) {
	return request({
		url: '/mock-api/login',
		method: 'post',
		data: params,
	});
}
