import React, { Component } from 'react';
import { List, } from 'antd';
import axios from 'axios'

export default class PageList extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [1]
        }
    }
    render (){
        // console.log(this.props.match.params.id)
        return(
            <List
                style={{backgroundColor: '#fff'}}
                bordered
                dataSource={this.state.data}
                // item指向this.state.data，所以循环输出item.title
                renderItem={item => <List.Item>{item.title}</List.Item>}
            />
        )
    };
    componentDidMount(){
        const id = this.props.match.params.id;
        console.log(this.props)
        axios.get('http://www.dell-lee.com/react/api/List.json?id=' + id)
            .then((res)=>{
                // console.log(res)
                this.setState({
                    data : res.data.data
                })
            })
    }
    // 在url有变化时会重新执行的生命周期函数，注意这里的参数是nextProps
    // ?id= 是指定请求的接口 + 后面的id值就可以拿到不同的数据
    componentWillReceiveProps(nextProps){
        const id = nextProps.match.params.id;
        axios.get('http://www.dell-lee.com/react/api/List.json?id=' + id)
            .then((res)=>{
                // console.log(res.data.data)
                this.setState({
                    data : res.data.data
                })
            })
    }
}