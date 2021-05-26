import { MockMethod } from 'vite-plugin-mock'

function createFakeUserList() {
  return [
    {
      userId: '1',
      username: 'admin',
      realName: 'admin',
      desc: 'manager',
      password: '123456',
      token: 'fakeToken1',
      roles: [
        {
          roleName: 'Super Admin',
          value: 'super'
        }
      ]
    },
    {
      userId: '2',
      username: 'test',
      password: '123456',
      desc: 'tester',
      token: 'fakeToken2',
      roles: [
        {
          roleName: 'Tester',
          value: 'test'
        }
      ]
    }
  ]
}

function resultSuccess(
  result: Record<string, unknown>,
  { message = 'ok' } = {}
) {
  return {
    code: 0,
    result,
    message,
    type: 'success'
  }
}

function resultError(
  message = 'Request failed',
  { code = -1, result = null } = {}
) {
  console.log('Incorrect account or password！-------')
  return {
    code,
    result,
    message,
    type: 'error'
  }
}

export default [
  // mock user login
  {
    url: '/mock-api/login',
    timeout: 200,
    method: 'post',
    response: ({ body }: any) => {
      const { username, password } = body
      const checkUser = createFakeUserList().find(
        (item) => item.username === username && password === item.password
      )

      if (!checkUser) {
        return resultError('Incorrect account or password！')
      }
      const {
        userId,
        username: _username,
        token,
        realName,
        desc,
        roles
      } = checkUser
      return resultSuccess({
        roles,
        userId,
        username: _username,
        token,
        realName,
        desc
      })
    }
  }
] as MockMethod[]
