'use-strict'

const e = React.createElement;

class LikeButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {liked:false};
    }

    render() {
        if(this.state.liked){
            return 'You liked this..'
        }

        return e('button', {onclick: () => 
            this.setState({liked:true})},'Like')
    }
}



const domContainer = document.getElementById("like_button_container");
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton),(domContainer));
