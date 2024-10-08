import { useEffect, useRef, useState } from "react";
// 動畫產生高度變化的套件
import AnimateHeight from "react-animate-height";

function ProductCard({ isFoldProp = true }) {

    const [isFold, setIsFold] = useState(isFoldProp);
    const [innerMenuHeight, setInnerMenuHeight] = useState(isFoldProp ? 0 : "auto");
    const productCardRef = useRef(null);
    useEffect(() => {
        if (isFold) {
            productCardRef.current.classList.remove("unfold");
            setInnerMenuHeight(0);
        }else{
            productCardRef.current.classList.add("unfold");
            setInnerMenuHeight("auto");
        }
        // isFold ? productCardRef.current.classList.remove("unfold") : productCardRef.current.classList.add("unfold");
        // isFold ? setInnerMenuHeight(0) : setInnerMenuHeight("auto");
    }, [isFold]);

    const toggleFoldHandler = () => {
        setIsFold((prevState) => {
            return !prevState;
        });
    };

    return (
        <div className="product-card" onClick={toggleFoldHandler} ref={productCardRef}>
            <div className="card-body">
                <picture className="pic blank-pic">
                    {/* <img src="" alt="" /> */}
                </picture>
                <div className="content">
                    <div className="start-box">
                        <div className="name-box">
                            <p className="product-id">#TG-SC504</p>
                            <p className="product-name">向日葵II<br />刺し子 ひまわり２</p>
                        </div>
                        <div className="tag">生地</div>
                    </div>
                    <div className="end-box">
                        <p className="product-size">32x37cm</p>
                        <p className="product-price">
                            <span className="jpy-price">JPY 400</span>
                            <span> / </span>
                            <span className="ntd-price">NTD 250</span>
                        </p>
                    </div>
                </div>
            </div>
            <AnimateHeight height={innerMenuHeight} duration={150}>
                <div className="inner-menu">
                    <div className="amount-ctrl-box">
                        <button type="button" className="minus-btn"></button>
                        <p className="amount">0</p>
                        <button type="button" className="plus-btn"></button>
                    </div>
                    <button type="button" className="add-to-cart-btn">
                        <div className="cart-icon"></div>
                        <p className="text">加入 / カートに入れる</p>
                    </button>
                </div>
            </AnimateHeight>
        </div>
    );
}

export default ProductCard;