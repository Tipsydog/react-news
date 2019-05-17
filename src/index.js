import React, { Component, } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import AppHeader from './components/Header/index';
import PageList from './components/containers/List/index';
import Detail from './components/containers/Detail/index'
import './style.css';
import 'antd/dist/antd.css';

// 意思是Header=Layout.Header
const { Header, Footer, Content } = Layout;

class App extends Component {
    render () {
        return(
            <BrowserRouter>
                <div style={{height: '100%'}}>
                    {/* minWidth: 1400保证页面宽度最小1400px，当浏览器缩小时会自动生成滚动条 */}
                    <Layout style={{ minWidth: 1400, height: '100%' }}>
                        <Header className="header"><AppHeader /></Header>
                        <Content className="content">       
                            <Switch>
                                <Route path='/detail' component={Detail}></Route>
                                {/* :id 的意思是当访问根路径的时候如果携带了参数就赋值给id传给PageList组件
                                赋值到this.props.param.id 属性上
                                ? 代表如果有id就匹配，没有就默认，防止直接访问/目录时没有任何内容显示
                                */}
                                <Route path='/:ik?' component={PageList}></Route>
                            </Switch>    
                        </Content>
                        <Footer className="footer">@copyright xuweihao 2019</Footer>
                    </Layout>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));