class CommentInput extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userName:"",
            content:""
        }
    }
    render(){
        return(
            <div className="MyInput">
                <div className="user">
                    <label>用户名：</label><input value={this.state.userName} type="text" onChange={this.userOnChange.bind(this)}/>
                </div>
                <div className="content">
                    <label>评论内容：</label><textarea  ref={(x)=>this.x=x} value={this.state.content} onChange={this.contentOnChange.bind(this)}/>
                </div>
                <div id="login_click">
                    <a id="btlogin" className="myRelease" onClick={this.onClick.bind(this)}>发布</a>
                </div>
            </div>
        )
    }

    componentDidMount(){
        this.x.focus();
    }
    userOnChange(e){
        this.setState({
            userName:e.target.value
        })
    }
    contentOnChange(e){
        this.setState({
            content:e.target.value
        })
    }
    onClick(e){
        this.props.onSumbit(this.state);
        this.setState({
            content:""
        })
    }
}