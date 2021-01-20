import React, { Component } from "react";
import Aux1 from '../../hoc/Aux1';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}
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
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = { // creates a copy of the ingredients object
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAdittion = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAdittion;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    }
    
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    }

    // disableIngredientHandler = (type) => {
    //     if (this.state.ingredients[type] <=0) {
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }
    
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0; //disabledInfo is now an object of boolean variables
            
        }

        return (
            <Aux1>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    // disabled={this.disableIngredientHandler}/>
                    disabled={disabledInfo}
                    price={this.state.totalPrice}/>
            </Aux1>
        );
    }
}

export default BurgerBuilder;
