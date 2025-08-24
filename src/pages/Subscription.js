import React, { useEffect, useState } from 'react';
import '../styles/Subscription.css';

function PlanCard({ title, price, features, buttonText, highlight }) {
  const buttonClass = title === 'Free' ? 'free-btn' : 'buy-btn';

  return (
    <div className={`plan-card ${highlight ? 'highlight' : ''}`}>
      {highlight && <div className="tag">MOST POPULAR</div>}
      <h3>{title}</h3>
      <h1 className="price">
        ${price}
        <span className="per">/mo</span>
      </h1>
      <ul>
        {features.map((f, i) => (
          <li key={i}>
            <span className="check">✔</span> {f}
          </li>
        ))}
      </ul>
      <button className={`plan-button ${buttonClass}`}>{buttonText}</button>
    </div>
  );
}

function Subscription() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  return (
    <div className={`subscription-container ${show ? 'show' : ''}`}>
      <h2 className="title">Choose your plan</h2>
      <div className="plans">
        <PlanCard
          title="Free"
          price="0"
          features={['Feature of the plan', 'Feature of the plan', 'Feature of the plan']}
          buttonText="Try it For Free"
        />
        <PlanCard
          title="Premium"
          price="9.99"
          features={[
            'Feature of the plan',
            'Feature of the plan',
            'Feature of the plan',
            'Feature of the plan',
            'Feature of the plan',
          ]}
          buttonText="Buy now"
          highlight
        />
        <PlanCard
          title="Business"
          price="29.99"
          features={[
            'Some Premium Features',
            'Some Premium Features',
            'Some Premium Features',
          ]}
          buttonText="Buy now"
        />
      </div>
    </div>
  );
}

export default Subscription;
