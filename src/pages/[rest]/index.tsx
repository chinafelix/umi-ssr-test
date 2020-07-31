import React from 'react'

export default (props:any): any => {
  // console.log(props)
  return (<div>rest test {props.match.params.rest}</div>)
}