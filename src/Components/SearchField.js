import React,{Component} from "react";


class SearchField extends Component {


    render(){


        return(
            <input type="search" maxLength={1} placeholder="Search meal by first letter" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-400 " onChange={this.props.onSearch}/>
        );

    }
}

export default SearchField;