import React, { Component } from "react";
import Aux1 from '../../hoc/Aux1';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
// stateful component
class BurgerBuilder extends Component {
    // constructor(props){  // old fashion 
    //     super(props);
    //     this.state = {...}
    // }
    state = {               //modern fashion
        ingredients: { //the goal is to pass this object to the burger. We can't use map on it, it's not an array
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }
    render() {
        return (
            <Aux1>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls />
            </Aux1>
        );
    }
}

export default BurgerBuilder;
