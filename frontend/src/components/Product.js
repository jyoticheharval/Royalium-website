import react from 'react';
import Rating from './Rating';

export default function Product(props){
    const {product} =props;
    return(
        <div key={product._id} className="card">
            <a href="product.html">
                <img className="medium" src={product.image} alt="product" />
            </a>
            <div className="card-body">
                <a href="product.html">
                    <h2>{product.name}</h2>
                </a>
                <Rating
                    rating = {product.rating} 
                    numReviews= {product.numReview}
                >
                </Rating>
                <div className="price">
                    ${product.price}   
                </div>
            </div>
    </div>
    )
}

