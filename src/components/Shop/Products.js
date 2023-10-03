import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_DATA = [{ id: "1", price: 10, title: "Harry Potter", description: "This is a first product - amazing!" }];

const Products = (props) => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {DUMMY_DATA.map((item) => (
                    <ProductItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        description={item.description}
                    />
                ))}
            </ul>
        </section>
    );
};

export default Products;
