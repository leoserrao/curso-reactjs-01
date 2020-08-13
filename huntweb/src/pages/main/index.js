import React, { Component } from 'react';
import { render } from '@testing-library/react';

import api from "../../services/api";

import './styles.css';

export default class Main extends Component {

    state = {
        products: []
    };

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products');

        this.setState({ products: response.data.docs });

        //console.log(response.data.docs);
    };

    render() {
        const { products } = this.state;

        return ( /*<h1>Contagem de produtos: {this.state.products.length}</h1>;*/
            <div className="product-list">
                {products.map(product => (
                    //<h2 key={product._id}>{product.title}</h2>
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>

                        <a href="">Acessar</a>
                    </article>
                ))}
            </div>
        );
    }
}