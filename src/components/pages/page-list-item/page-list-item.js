import React from 'react';
import { withRouter } from 'react-router-dom';

const PageListItem = props => {
    return (
        <div
            className="shop__item">
            <img src={props.url} alt={props.name} />
            <div className="shop__item-title">{props.name}</div>
            <div className="shop__item-country">{props.country}</div>
            <div className="shop__item-price">{props.price}</div>

            <button className="snipcart-add-item"
                data-item-id={props.price.replace('$', '')}
                data-item-price={props.price.replace('$', '')}
                data-item-url="/"
                data-item-image={props.url}
                data-item-name={props.name}>
            Add to cart
            </button>
        </div>
    );
};

export default withRouter(PageListItem);
