import React from 'react';
import ReactDOM from 'react-dom';
import ChangeButton from './components/change_button';
import ChangeB from '@yangin/change-button';

const App = () => {
  return (
    <div>
      <ChangeB/>
      <ChangeButton />
    </div>
  )
}

//要实现局部热更新，必须要添加此句
if (module.hot) {module.hot.accept()}

ReactDOM.render(<App />, document.getElementById('root'));