class Comment extends React.Component{
    render(){
        return(
            <div>
                <label>{this.props.item.name}</label>:<p>{this.props.item.content}</p>
                <p className="time">{this.props.item.dateTime}</p>
            </div>
        )
    }
}
