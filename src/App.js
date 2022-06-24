import React,{Component} from 'react';
import './App.css';
import SearchField from './Components/SearchField'
import RecipesList from './Components/RecipeList.js'
import alphacheck from './alphacheck'
class App extends Component {

  constructor(){
    super();
    this.state ={
      searchField:'a',
      meals : []
    }
  }

  async componentDidMount(){

      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${this.state.searchField}`);
      const data = await response.json();
      this.setState({meals:data['meals']});

  }
  async componentDidUpdate(){

    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${this.state.searchField}`);
    const data = await response.json();
    this.setState({meals:data['meals']});

}
  

  onSearchChange=(event)=>{
    if(alphacheck(event.target.value)){
      this.setState({searchField:event.target.value});
    }
    

  }

  


  render(){
  let {meals}= this.state  ;
  if(meals ===null){
    meals = [];
  }
 return !meals.length?<h1 className='text-center font-bold text-9xl mt-6 text-amber-400'>Loaaaading!!</h1>:
  <div className='text-center'>
  <h1 className='text-6xl font-bold underline text-center text-amber-400 cursor-pointer my-6'>Fooder</h1>
  <SearchField onSearch={this.onSearchChange}/>
  <RecipesList recipes={this.state.meals}/>
</div>
 ;



  }

  }







export default App;
