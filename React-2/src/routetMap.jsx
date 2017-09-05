class RouterMap extends React.Component{
    render(){
        let Router=ReactRouter.Router;
        let Route=ReactRouter.Route;
        let IndexRoute=ReactRouter.IndexRoute;

        return(
        <Router history={this.props.hashHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={BB}/>
                <Route path="/comment" component={CommentList}/>
            </Route>
        </Router>
        )
    }
}