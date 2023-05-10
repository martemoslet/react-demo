import { useEffect, useState } from 'react';

const url = 'https://api.noroff.dev/api/v1/online-shop';

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch(url);
            const json = await response.json();
            setProducts(json);
        }
        getData();
    }, []);

    return (
        <div>
            {products.map((product) => (
                <div>
                    <h2>{product.title}</h2>
                    <img src={product.imageUrl} />
                    <p>{product.description}</p>
                    <p>Price: {product.price}</p>
                    <p>Discounted price: {product.discountedPrice}</p>
                    <p>Rating: {product.rating}</p>
                </div>
            ))}
        </div>
        );
}