
import React from 'react'
import { Menu, Dropdown, message  } from 'antd'

const handleClickMenu = ({key}: any): void => {
  console.log(key)
}

const menu = (
  <Menu onClick={handleClickMenu}>
    <Menu.Item key="0">认证</Menu.Item>
    <Menu.Item key="1">退出登录</Menu.Item>
  </Menu>
);
/**
 * 在.umirc.ts配置了layout后使用
 * 
*/
// export const layout = {
//   layout: () => {
//     console.log(111)
//   },
//   rightRender: (initInfo: object) => {
//     return <Dropdown
//       overlay={menu} 
//       trigger={['click']}
//       className="drop-down"
//     >
//       <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
//         聚米
//       </a>
//     </Dropdown>
//   }
// }


export const dva = {
  config: {
    onError(e: Error){
      message.error(e.message, 3)
    }
  }
}
