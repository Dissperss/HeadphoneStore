export const CartSummary = () => {
    return (
        <div className="cart__summary">
            <div className="cart__header">
                <span className="cart__text">итого</span>
                <span className="cart__result-sum">2927 ₽</span>
            </div>
            <button className="checkout__btn">Перейти к оформлению</button>
        </div>
    );
};
