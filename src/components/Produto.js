import React from "react";

export default (props) => {
    const { title, price, cashback, image } = props;

    return (
        <div className="product">
            {/* <img src={`/uploads/${image}`} alt={title} /> */}
            <img src={image} alt={title} />
            <p className="title">{title}</p>
            <p className="price">
                R$ {String(price.toFixed(2).replace(".", ","))}
            </p>
            <p className="links">
                <span>Editar</span> · <span>Remover</span>
            </p>
            <p className="cashback">{Math.round(cashback * 100)}%</p>
        </div>
    );
};
