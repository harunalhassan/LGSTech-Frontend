import React, { useEffect, useRef, useState } from 'react';
import '../styles/Product.css';
import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: '$10.99',
    description: 'Body text for describing what this product is and why this product is simply a must-buy.',
    img: product1
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$10.99',
    description: 'Body text for describing what this product is and why this product is simply a must-buy.',
    img: product2
  },
  {
    id: 3,
    name: 'Product 3',
    price: '$10.99',
    description: 'Body text for describing what this product is and why this product is simply a must-buy.',
    img: product3
  }
];

function Product() {
  const sectionRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => currentRef && observer.unobserve(currentRef);
  }, []);

  return (
    <div className="product-container" ref={sectionRef}>
      {products.map((product, index) => (
        <div
          className={`product-card ${visible ? 'animate' : ''}`}
          key={product.id}
          style={{ animationDelay: `${index * 0.3}s` }}
        >
          <div className="product-image">
            <img src={product.img} alt={product.name} />
          </div>
          <div className="product-info">
            <h2>{product.name}</h2>
            <p className="subheading">Subheading</p>
            <h4>{product.price}</h4>
            <p>{product.description}</p>
            <button className="try-btn">Try it</button>
            <p className="small-note">Text box for additional details or fine print</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
