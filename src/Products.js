import { useState, useEffect, useRef } from "react";
import ProductCard from "./components/ProductCard";

function Products() {
    const [productData, setProductData] = useState([]);
    useEffect(() => {
        let demoProductData = [
            {
                id: "#TG-SC504",
                name: "向日葵II<br />刺し子 ひまわり２",
                category: "生地",
                size: "32x37cm",
                jpyPrice: 400,
                ntdPrice: 250
            },
            {
                id: "#TG-SC504",
                name: "向日葵II<br />刺し子 ひまわり２",
                category: "生地",
                size: "32x37cm",
                jpyPrice: 400,
                ntdPrice: 250
            },
            {
                id: "#TG-SC504",
                name: "向日葵II<br />刺し子 ひまわり２",
                category: "生地",
                size: "32x37cm",
                jpyPrice: 400,
                ntdPrice: 250
            },
            {
                id: "#TG-SC504",
                name: "向日葵II<br />刺し子 ひまわり２",
                category: "生地",
                size: "32x37cm",
                jpyPrice: 400,
                ntdPrice: 250
            },
            {
                id: "#TG-SC504",
                name: "向日葵II<br />刺し子 ひまわり２",
                category: "生地",
                size: "32x37cm",
                jpyPrice: 400,
                ntdPrice: 250
            },
            {
                id: "#TG-SC504",
                name: "向日葵II<br />刺し子 ひまわり２",
                category: "生地",
                size: "32x37cm",
                jpyPrice: 400,
                ntdPrice: 250
            },
        ];
        setProductData(demoProductData);
    }, []);

    const productCartBoradRef = useRef(null);
    const productListRef = useRef(null);
    const tabMainRef = useRef(null);
    // tab頁籤
    useEffect(() => {
        let tabsArr = Array.from(tabMainRef.current.querySelectorAll(".tab-item"));
        tabsArr.forEach((item, index) => {
            item.addEventListener("click", () => {
                switchActive(tabsArr, index);
            });
        })
        // 切換active元素
        function switchActive(arrToSwitch, targetIndex) {
            arrToSwitch.forEach((arrEle) => {
                arrEle.classList.remove('active');
            });
            arrToSwitch[targetIndex].classList.add('active');
            // console.log("switched");
        }
    }, []);

    // 依照下方面板的高度產生padding
    const calcPaddingBotForProductList = () => {
        let productCartBoradHeight = getComputedStyle(productCartBoradRef.current).height.replace("px", "");
        let gapBetweenListAndBorad = 16;
        productListRef.current.style.paddingBottom = (Number(productCartBoradHeight) + gapBetweenListAndBorad) + "px";
    };
    useEffect(() => {
        calcPaddingBotForProductList();
        window.addEventListener("resize", () => {
            calcPaddingBotForProductList();
        });
    }, []);

    const [cartList, setCartList] = useState([]);

    return (
        <div className="products-wrap">
            <div className="products-topbar">
                <button type="button" className="go-back-btn" aria-label="Go Back Button"></button>
                <ul className="tab-main" ref={tabMainRef}>
                    <li >
                        <button type="button" className="tab-item active">商品名</button>
                    </li>
                    <li >
                        <button type="button" className="tab-item">種類</button>
                    </li>
                    <li >
                        <button type="button" className="tab-item">検索</button>
                    </li>
                </ul>
            </div>
            <ul className="product-list" ref={productListRef}>
                {
                    productData.map((item, index) => {
                        return <li key={index}><ProductCard data={item} setCartList={setCartList} /></li>
                    })
                }
            </ul>
            <div className="products-cart-borad" ref={productCartBoradRef}>
                <div className="amount-box">
                    <p className="title">商品数</p>
                    <div className="end-box">
                        <div className="cart-icon"></div>
                        <p className="amount">
                            <span className="num">
                                {
                                    cartList.reduce((total, item) => {
                                        return total + (typeof item.amount === "number" && item.amount);
                                    }, 0)
                                }
                            </span>
                            <span className="unit">個</span>
                        </p>
                    </div>
                </div>
                <div className="price-box">
                    <div className="jpy-box">
                        <p className="unit">JPY</p>
                        <p className="price">
                            {
                                cartList.reduce((total, item) => {
                                    return total + (typeof item.jpyPrice === "number" && item.jpyPrice * item.amount);
                                }, 0)
                            }
                        </p>
                    </div>
                    <div className="ntd-box">
                        <p className="unit">NTD</p>
                        <p className="price">
                            {
                                cartList.reduce((total, item) => {
                                    return total + (typeof item.ntdPrice === "number" && item.ntdPrice * item.amount);
                                }, 0)
                            }
                        </p>
                    </div>
                </div>
                <button type="button" className="go-cart-page-btn">檢視購物車<br />カートを見る</button>
            </div>
        </div>
    );
}

export default Products;