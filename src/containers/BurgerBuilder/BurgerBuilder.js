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
        console.log('addIngredientHandler type: ', type);
        const oldCount = this.state.ingredients[type];
        console.log('addIngredientHandler oldCount', oldCount);
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        console.log('addIngredientHandler updatedIngredients', updatedIngredients);
        updatedIngredients[type] = updatedCount;
        const priceAdittion = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAdittion;
        console.log('addIngredientHandler newPrice', newPrice);
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        
    }
    
    removeIngredientHandler = (type) => {
        console.log('removeIngredientHandler type: ', type);
        const oldCount = this.state.ingredients[type];
        console.log('removeIngredientHandler oldCount', oldCount);
        if (oldCount <= 0){
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        console.log('removeIngredientHandler updatedIngredients', updatedIngredients);
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice; 
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        
    }
    
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        console.log('disabledInfo: ', disabledInfo);
        for (let key in disabledInfo) {
            console.log('for key: ', key)
            console.log('for disabledInfo: ', disabledInfo);
            disabledInfo[key] = disabledInfo <= 0;
        }
        return (
            <Aux1>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}/>
            </Aux1>
        );
    }
}

export default BurgerBuilder;
