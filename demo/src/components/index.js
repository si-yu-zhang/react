import React,{ Component } from "react";
import './style.css';

class CommentList extends Component {

    constructor(props){
        super(props);
        this.state = {
        
        }
    }

    getDateStr = (date) => {
        const yy = date.getFullYear();      //年
        const mm = date.getMonth() + 1;     //月
        const dd = date.getDate();          //日
        const hh = date.getHours();         //时
        const ii = date.getMinutes();       //分
        const ss = date.getSeconds();       //秒
        let clock = yy + "-";

        if(mm < 10) clock += "0";
        clock += mm + "-";
        if(dd < 10) clock += "0";
        clock += dd + " ";
        if(hh < 10) clock += "0";
        clock += hh + ":";
        if (ii < 10) clock += '0'; 
        clock += ii + ":";
        if (ss < 10) clock += '0'; 
        clock += ss;

        return clock
    };

    // 绘制评论列表
    handleDrawList = (arrList) => {
        const self = this;
        const dataList = arrList || [];

        return dataList.map((item, index) => {
            return (
                <div className="content" key={index}>
                    <div style={{float:'left'}}>{ item.username }</div>
                    <div style={{float:'left', marginLeft: '30px'}}>{item.content}</div>
                    <div style={{float:'right'}}>{ self.getDateStr(item.date) }</div>
                    <p style={{ borderTop: 0, clear: 'both' }}></p>
                </div>
            )
        });
    };

    render(){

        const { contentList } = this.props;

        return(
            <div className="comment">
                <div className="comment_span">
                    {this.handleDrawList(contentList)}
                </div>
            </div>
        )
    }
}

export default CommentList;