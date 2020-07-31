import React, { ReactElement } from 'react'
import { Link } from 'umi'

import './index.less'

interface SideItem {
  exact: boolean,
  path: string,
  hidden: boolean,
  routes?: Array<SideItem>,
  title?: string
}

interface propsInterface {
  routes: Array<SideItem>,
  history: any,
  location: {
    pathname: string,
    key: string
  }
}

const handleSideBarClick = (history: any, path: string): void => {
  history.push(path)
}

const renderSideBar = ({routes, history, location}: propsInterface): any => {
  const sides: SideItem | undefined = routes.find(item => !item.hidden)
  return sides && (sides.routes as Array<SideItem>).map((item: SideItem, index: number) => {
    return <p
      key={index}
      className={`side-item ${location.pathname === item.path && 'active'}`}
      onClick={() =>handleSideBarClick(history, item.path)}
    >{item.title}</p>
  })
}

export default (props:any): ReactElement => {
  // console.log(props)
  return (<div className="side-bar fz-16">
    <Link to="/rest/2">我的</Link>
    { renderSideBar(props) }
  </div>)
}