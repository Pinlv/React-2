class Main extends React.Component{
    render(){
        return(
            <div>
                <h2>导航条</h2><Link to="/">Index</Link>
                <div>{this.props.children}</div>
                <h2>底部</h2>
            </div>
        )
    }
}

ReactDOM.render(<RouterMap hashHistory={ReactRouter.hashHistory}/>,document.getElementById('app'));