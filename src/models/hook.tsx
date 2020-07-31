import { useState, useEffect, useCallback } from 'react'

interface User {
  account: string
  password: string
}

export default () => {
  const [user, setUser] = useState<User>({} as User)

  const signIn = useCallback(async (account: string, password: string) => {
    // 这里也可以写一些获取数据的API
    setUser({
      account,
      password
    })
  }, [user])

  const signOut = useCallback(() => {
    setUser({} as User)
  }, [user])

  return {
    user,
    signIn,
    signOut
  }
}


