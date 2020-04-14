import React,{Component} from 'react'

class Recipe extends Component{
    constructor(props){
        super(props)
        this.state={
            flag : false,
        };
    }
    oncld = props=>{
        this.setState({
            flag: !this.state.flag
        });
    }
    render(){
    return (
        <div className="recipe">
            <h1 className="title_recipe">{this.props.title}</h1>
            <button onClick={this.oncld} className="button"><img src={this.props.image} alt={this.props.title} className="image" /></button>
            <div style={{display: this.state.flag ? 'block' : 'none'}}  className="ingredients">
                <ol>
                    {this.props.ingredients.map(ingredients=>(
                        <li>{ingredients.text}</li>
                    ))}
                </ol>
            </div>
            <p className="calorie">Calories-<b>{this.props.calories}</b></p>
        </div>
    )
}}
   

export default Recipe
