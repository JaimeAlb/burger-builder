import React, { Component } from "react";
import Aux1 from '../../hoc/Aux1';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    render() {
        return (
            <Aux1>
                <Burger />
                <div>Build Controls</div>
            </Aux1>
        );
    }
}

export default BurgerBuilder;
