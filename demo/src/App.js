import React, { Component } from 'react';
import './App.css';
import CommentList from './components/index';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: '',
            comment: '',
            commentArrList: [],
        }
    }

    // 用户名
    handleInputUsername = (e) => {
        this.setState({
            username: e.target.value
        });
    };

    // 密码
    handleInputPassword = (e) => {
        this.setState({
            comment: e.target.value
        });
    };

    // 表单提交
    handleSubmit = (e) => {
        e.preventDefault();
        const { username, comment, commentArrList } = this.state;

        this.setState({
            commentArrList: [
                ...commentArrList, 
                {
                    username: username,
                    content: comment,
                    date: new Date()
                }
            ],
            username: '',
            comment: ''
        })
    };

    // 表单重置
    handleCancle = () => {
        this.setState({
            username: '',
            comment: ''
        });
    };

    render() {

        return (
            <div className="App">
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="username">
                        <input required type="text" placeholder="用户名" value={this.state.username} onChange={this.handleInputUsername} />
                    </div>
                    <div className="password">
                        <textarea required rows="6" placeholder="评论" value={this.state.comment} onChange={this.handleInputPassword} />
                    </div>
                    <div className="btn-group">
                        <button type="submit">提交</button>
                        <button style={{marginLeft: '20px'}} onClick={this.handleCancle} >重置</button>
                    </div>
                </form>

                <div className="commentlist">
                    <CommentList
                        contentList = { this.state.commentArrList }
                    />
                </div>
            </div>
        );
    }
}

export default App;
