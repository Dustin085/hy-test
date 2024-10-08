import { useEffect, useRef, useState } from "react";
// 動畫產生高度變化的套件
import AnimateHeight from "react-animate-height";

function ProductCard({ isFoldProp = true, isInCartProp = false, setCartList = null, data = {
    id: "#TG-SC504",
    name: "向日葵II<br />刺し子 ひまわり２",
    category: "生地",
    size: "32x37cm",
    jpyPrice: 400,
    ntdPrice: 250
} }) {
    const { id, name, category, size, jpyPrice, ntdPrice } = data;

    const [isFold, setIsFold] = useState(isFoldProp);
    const [innerMenuHeight, setInnerMenuHeight] = useState(isFoldProp ? 0 : "auto");
    useEffect(() => {
        if (isFold) {
            setInnerMenuHeight(0);
        } else {
            setInnerMenuHeight("auto");
        }
    }, [isFold]);

    const toggleFoldHandler = () => {
        setIsFold((prevState) => {
            return !prevState;
        });
    };

    const [amount, setAmount] = useState(0);
    const amountChangeHandler = (diff) => {
        setAmount((prevState) => {
            if (prevState + diff >= 0) {
                return prevState + diff;
            } else {
                return prevState;
            }
        });
    };

    const [isInCart, setIsInCart] = useState(isInCartProp);

    const amountInCart = useRef(0);
    const changeCartListHandler = () => {
        amountInCart.current = amount;
        if (setCartList && amount > 0) {
            let cartItem = {
                id: id,
                amount: amount,
                jpyPrice: 400,
                ntdPrice: 250
            };
            setCartList([cartItem]);
            setIsInCart(true);
        } else {
            setCartList([]);
            setIsInCart(false);
        }
    };

    return (
        <div className={"product-card" + (isInCart ? " in-cart" : "") + (isFold ? "" : " unfold")}>
            <div className="card-body" onClick={toggleFoldHandler}>
                <picture className="pic blank-pic">
                    {/* <img src="" alt="" /> */}
                </picture>
                <div className="content">
                    <div className="start-box">
                        <div className="name-box">
                            <p className="product-id">{id}</p>
                            <p className="product-name">
                                {
                                    name.split("<br />").map((item, index, arr) => {
                                        // 最後一個段落不加斷行
                                        return index === (arr.length - 1) ? <span key={index}>{item}</span> : <span key={index}>{item}<br /></span>
                                    })
                                }
                            </p>
                        </div>
                        <div className="tag">{category}</div>
                    </div>
                    <div className="end-box">
                        <p className="product-size">{size}</p>
                        <p className="product-price">
                            <span className="jpy-price">JPY {jpyPrice}</span>
                            <span> / </span>
                            <span className="ntd-price">NTD {ntdPrice}</span>
                        </p>
                    </div>
                </div>
                {
                    isInCart && <p className="amount-indicator">{amountInCart.current}</p>
                }
            </div>
            <AnimateHeight height={innerMenuHeight} duration={150}>
                <div className="inner-menu">
                    <div className="amount-ctrl-box">
                        <button type="button" className="minus-btn" onClick={() => { amountChangeHandler(-1) }}></button>
                        <p className="amount">{amount}</p>
                        <button type="button" className="plus-btn" onClick={() => { amountChangeHandler(1) }}></button>
                    </div>
                    <button type="button" className="add-to-cart-btn" onClick={changeCartListHandler}>
                        <div className="cart-icon"></div>
                        <p className="text">加入 / カートに入れる</p>
                    </button>
                </div>
            </AnimateHeight>
        </div>
    );
}

export default ProductCard;