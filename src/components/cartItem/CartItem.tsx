// import { headphones } from "../../stabs/products";
// Потом подставляем headphones.title/price/img итд.

export const CartItem = () => {
    return (
        <div className="cart__item">
            <img src="" alt="" className="item__img" />
            <div className="item__info">
                <h3 className="item__title">Apple BYZ S852I</h3>
                <span className="item__price">2 927 ₽</span>
            </div>
            <div className="item__footer">
                <div className="item__quantity">
                    <button className="quantity__btn">–</button>
                    <span className="quantity__value">1</span>
                    <button className="quantity__btn">+</button>
                </div>
                <span className="item__sum"> 2 927 ₽</span>
            </div>
        </div>
    );
};
