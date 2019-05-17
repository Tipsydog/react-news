import React, { Component, } from 'react';
import { Link } from 'react-router-dom';
import headerLogo from './logo.jpg';
import './style.css';
import { Menu, Icon } from 'antd';
import axios from 'axios';


export default class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    };

    getMenuItems(){
        return this.state.list.map( item => {
            return (
                <Menu.Item key={item.id} className="app-header-menu-item">
                {/* ES6字符串拼接写法，需要用键盘左上角的``反引号
                路由的地址就会根据点击的不同列表项而改变
            */}
                    <Link to={`/${item.id}`}>
                        <Icon type={item.icon} />{item.title}
                    </Link>
                </Menu.Item>
            )
        })
    };

    // ajax请求后端数据
    componentDidMount(){
        axios.get('http://www.dell-lee.com/react/api/header.json')
            .then((res)=>{
                // console.log(res.data.data)
                this.setState({
                    list: res.data.data,
                })
            })
    }
    render() {
        return (
            <div>
                <img src={headerLogo} className="app-header-logo" alt='logo' />
                {/* horizontal代表横向展示 */}
                <Menu
                    mode="horizontal"
                    className="app-header-menu"
                >
                    {this.getMenuItems()}
                </Menu>
            </div>
        );
    };
}
