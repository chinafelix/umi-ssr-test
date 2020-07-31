import React, { ReactElement } from 'react'

import Header from '@/components/Header'
import SideBar from '@/components/SideBar'

import './index.less'

const renderChildren = (props: any): ReactElement => {
  return React.cloneElement(props.children, { foo: 'bar' })
}

export default (props: any): ReactElement => {
  return (<div id="app">
    <Header {...props} />
    <div className="content-wrapper">
      <SideBar {...props} />
      <div className="container">
        {
          renderChildren(props)
        }
      </div>
    </div>
  </div>)
}
