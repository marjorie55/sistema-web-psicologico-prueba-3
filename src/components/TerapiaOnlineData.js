import { Component } from "react";
import "./TerapiaOnlineStyles.css";

class TerapiaOnlineData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-textTera">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>

        <div className="image">
          <img alt="img" src={this.props.img1} />
          <img alt="img" src={this.props.img2} />
        </div>
      </div>
    );
  }
}

export default TerapiaOnlineData;



















// import "./TerapiaOnlineStyles.css"


// function TerapiaOnline (){
//     return(
//        <>
//        <div>
//         <h2>Importancia de la Terapia Online</h2>
//        </div>
       
       
//        </> 


//     )
// }
// export default TerapiaOnline;
