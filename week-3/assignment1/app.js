
class RWDPage extends React.Component {
    state = {
        welcome : "Welcome Message",
        menu: "close"
    } 

    showgt = () =>{
        this.setState({welcome: 'Have a Good Time!'})
        
    }
    
    usemenu = () =>{
        if(this.state.menu=="close"){
            document.getElementById('menu').style.display = "block";
            this.setState({menu: "open"}); 
        }else{
            document.getElementById('menu').style.display = "none";
            this.setState({menu: "close"});
        }
    }    
    morecontents = () =>{
        document.getElementById('contents2').style.display = "block";
    }
    render() {
        return (
            <div>
                <div id="navigator" >
                    <img id="trigger" src="trigger.jpg" alt="trigger" onClick={this.usemenu} />
                    
                    <div id="websiteTitle">Website Title / Logo</div>  
                    <div id="items">
                        <div id="item1">Item1</div>
                        <div id="item2">Item2</div>
                        <div id="item3">Item3</div>
                        <div id="item4">Item4</div>
                    </div>

                </div>
                <div id="menu">
                    <div id="menu_item1">Item1</div>
                    <div id="menu_item2">Item2</div>
                    <div id="menu_item3">Item3</div>
                    <div id="menu_item4">Item4</div>
                    <div id="X" onClick={this.usemenu}>X</div>
                </div>
                <div id="welcome" onClick={this.showgt}>{this.state.welcome}</div>
                <div id="title">Section Title</div>
                <div id="contents">
                    <div style={{display: 'flex', justifyContent: 'center'}} id="box1">Content Box 1</div>
                    <div style={{display: 'flex', justifyContent: 'center'}} id="box2">Content Box 2</div>
                    <div style={{display: 'flex', justifyContent: 'center'}} id="box3">Content Box 3</div>
                    <div style={{display: 'flex', justifyContent: 'center'}} id="box4">Content Box 4</div>
                </div>
                <div id="action" onClick={this.morecontents}>call action</div>
            
                <div id="contents2" style={{display: 'none'}}>
                    <div id="boxes">
                        <div style={{display: 'flex', justifyContent: 'center'}} id="box5">Content Box 5</div>
                        <div style={{display: 'flex', justifyContent: 'center'}} id="box6">Content Box 6</div>
                        <div style={{display: 'flex', justifyContent: 'center'}} id="box7">Content Box 7</div>
                        <div style={{display: 'flex', justifyContent: 'center'}} id="box8">Content Box 8</div>
                    </div>

                </div>
            </div>
        )
    }
}

const style={
    navigator: {
        backgroundColor:'#000000',
    }
}
const domContainer = document.querySelector('#root');
ReactDOM.render(<RWDPage />, domContainer);