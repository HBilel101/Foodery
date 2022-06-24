import React,{Component} from "react";
import Recipe from './Recipe';


class RecipeList extends Component {




render(){
    const {recipes} = this.props;
    return <div className="flex flex-col flex-wrap ">
        {
        recipes.map((recipe)=>{
           return(<Recipe key={recipe.idMeal} src={recipe.strMealThumb} name={recipe.strMeal} id={recipe.idMeal} instruction={recipe["strInstructions"]}   
           youtube={recipe.strYoutube}
           />) 
        })
    }
    </div>
}

}
export default RecipeList ;