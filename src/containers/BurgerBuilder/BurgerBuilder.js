import React, { Component } from "react";
import Aux1 from '../../hoc/Aux1';
import Burger from '../../components/Burger/Burger';

// stateful component
class BurgerBuilder extends Component {
    // constructor(props){  // old fashion 
    //     super(props);
    //     this.state = {...}
    // }
    state = {               //modern fashion
        ingredients: { //the goal is to pass this object to the burger. We can't use map on it, it's not an array
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    }
    render() {
        return (
            <Aux1>
                <Burger ingredients={this.state.ingredients}/>
                <div>Build Controls</div>
            </Aux1>
        );
    }
}

export default BurgerBuilder;
