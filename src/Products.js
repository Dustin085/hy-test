import ProductCard from "./components/ProductCard";

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
                    <ProductCard />
                </li>
                <li>
                    <ProductCard />
                </li>
                <li>
                    <ProductCard />
                </li>
                <li>
                    <ProductCard />
                </li>
                <li>
                    <ProductCard />
                </li>
                <li>
                    <ProductCard />
                </li>
            </ul>
            <div className="shopping-cart-borad">

            </div>
        </div>
    );
}

export default Products;