import React, { useEffect } from 'react'
import { IndexModelState, ConnectRC, Loading, connect, useModel } from 'umi';

import './index.less'

const Header: ConnectRC = (props: any) => {
  const { name, isValidate } = props.model.user
  const { user, signIn, signOut } = useModel('hook', model => ({
    user: model.user,
    signIn: model.signIn,
    signOut: model.signOut
  }))

  const handleTextClick = () =>{
    signOut()
  }
  
  useEffect(() => {
    signIn('test', '123456')
  }, [])
  console.log(user)
  
  return <div className="header-wrapper">
    <div>
      <img src={require('@/assets/images/logo.png')} alt="" height="28" className="border-right" />
      <span className="fz-16" onClick={handleTextClick}>聚拍开放平台</span>
    </div>

    <div>
      <span className="fz-16">{name}</span>
      <img src={isValidate && require('@/assets/images/validate.png') || ''} alt="" width="28" />
    </div>

  </div>
}

export default connect((model: IndexModelState, loading: Loading) => ({
  model,
  loading: loading.global
}))(Header)
