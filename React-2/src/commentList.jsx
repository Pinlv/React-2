class List extends React.Component{
    constructor(props){
        super(props);
        console.log(props.list)
    }
    render(){
        return(
            <div className="list">
                {this.props.list.map((item,index)=>{
                    
                  return <Comment key={item.id} item={item}/>
                })}
                
            </div>
        )
    }
}