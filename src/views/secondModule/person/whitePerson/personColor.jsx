import React,{Component} from "react"
class personColor extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div>
        {
          ()=>{
            if (this.props.color === "white") {
              return (<h1>白人</h1>)
						}else{
              return (<h1>黄人</h1>)
            }
          }
        }
      </div>
    );
  }
}

export default personColor;