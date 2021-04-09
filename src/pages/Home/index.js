import React from 'react';
const Home = (props) => {
  const { history } = props
  return (
    <h1 onClick={() => history.push('/coma')}>我是首页</h1>
  )
}
export default Home