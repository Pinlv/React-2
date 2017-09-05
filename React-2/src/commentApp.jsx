// class Comment extends React.Component{
//     render(){
//         return(
//             <h1>Hello World</h1>
//         )
//     }
// }
class CommentList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            commentList:[]
        }

    }
    render(){
        return(
            <div className="comment">
                <CommentInput onSumbit={this.handleSumbit.bind(this)}/>
                <List list={this.state.commentList}/>
            </div>
        )
    }
    handleSumbit(comment){
        if(!comment)return
        if(!comment.userName) return alert("请输入用户名！");
        if(!comment.content) return alert("请输入你的评论内容！");
        let id=this.state.commentList.length;
        this.setState({
            commentList:this.state.commentList.concat({
                id:id,
                name:comment.userName,
                content:comment.content,
                dateTime:new Date().toLocaleString()
            })
        })
    }   
}