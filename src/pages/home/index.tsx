import React, { ReactElement } from 'react';
import { IndexModelState, connect, ConnectRC, Loading, IGetInitialProps } from 'umi'

import './index.less';

// const Home: ConnectRC = (props: any): ReactElement => {
//   console.log(props)
//   const user = props.model.index
//   return (
//     <div>
//       <h1 className="title">{props.foo}</h1>

//       <div>
//         <p>
//           <span>用户名：</span>
//           <span>{ user.name }</span>
//         </p>
//         <p>
//           <span>等级：</span>
//           <span>{ user.level }</span>
//         </p>
//       </div>
//     </div>
//   );
// }
interface DataInterface {
  title: string
}

interface Props {
  foo: string,
  index: IndexModelState,
  dispatch: Function,
  data: DataInterface
}

class Home extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  static getInitialProps = (async (ctx: any) =>{
    return Promise.resolve({
      data: {
        title: '我的umi'
      }
    })
  }) as IGetInitialProps

  componentDidMount(){
    const {index} = this.props
    this.props.dispatch({
      type: 'index/query',
      payload: {
        name: 'queryName',
        level: '3'
      }
    })
  }
  
  render(){
    const {foo , index, data} = this.props

    // document.title = data && data.title
    return <div>
      <h1 className="title">{foo}</h1>

      <div>
        <p>
          <span>用户名：</span>
          <span>{ index.name }</span>
        </p>
        <p>
          <span>等级：</span>
          <span>{ index.level }</span>
        </p>
      </div>
    </div>
  }
}

export default connect(({index}: {index: IndexModelState}, loading: Loading) => ({
  index,
}))(Home)
