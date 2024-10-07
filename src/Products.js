function Products() {
    return (
        <div className="products-wrap">
            <div className="products-topbar">
                <button type="button" className="go-back-btn" aria-label="Go Back Button"></button>
                <ul className="tab-main">
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
            <ul className="product-list">
                <li>
                    <div className="product-card">
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
                </li>
            </ul>
            <div className="shopping-cart-borad">

            </div>
        </div>
    );
}

export default Products;