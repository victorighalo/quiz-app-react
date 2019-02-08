import React, {Component} from 'react';
import { Link } from "react-router-dom";
class index extends Component{
    render(){
        return (
<div className="container">
<h1 className="text-center">9-5</h1>
    <h4 className="text-center">Rules and regulations</h4>
    <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium atque culpa cum distinctio esse itaque magni, officiis rerum sint tempora velit, veritatis. Autem deleniti hic molestias quod recusandae similique vero.</span><span>Asperiores assumenda at consectetur consequatur cumque cupiditate deleniti dolorem dolorum ea earum enim eum fugit illo incidunt iste labore minima necessitatibus omnis porro provident quasi qui quia saepe sed, sint!</span><span>Asperiores blanditiis debitis possimus quam repellat tempora temporibus, veritatis! Ab ad aliquid eaque laborum nemo quae vitae! Ad, amet cupiditate dicta dolorem earum eligendi, iusto maiores nihil pariatur quis sint!</span><span>At atque dignissimos ea, est hic iste nam nisi numquam quae, quos, rem unde voluptate! Debitis deleniti libero molestiae possimus repellendus! Alias aspernatur culpa dolore esse itaque quas sunt voluptas.</span><span>Ab dolorem eos exercitationem expedita inventore magnam maiores maxime, pariatur porro quisquam quo quod sed, ullam velit voluptatum. Accusantium assumenda consequuntur ducimus est inventore mollitia, nemo quibusdam quo ut voluptatum.</span></p>
    <br/><br/>
    <div className="text-center">
        <Link to="/questions">
        <button className="btn btn-md btn-danger">Start</button>
        </Link>
    </div>
</div>
        )
    }
}

export default index;