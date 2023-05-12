import React from 'react';

const Pricing: React.FC = () => {
  return (
    <div className="pricing-component">
      <div className="package">
        <h2>Free</h2>
        <ul>
          <li>Day performance booking</li>
          <li>Local artist</li>
        </ul>
        <button>Get Started</button>
      </div>

      <div className="package">
        <h2>Standard</h2>
        <ul>
          <li>24 hours performance booking</li>
          <li>Access to a wide range of artists</li>
        </ul>
        <button>Get Started</button>
      </div>

      <div className="package">
        <h2>Pro</h2>
        <ul>
          <li>24 hours performance booking</li>
          <li>Access to a wide range of artists</li>
          <li>Access to artist managers for negotiations and support</li>
        </ul>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Pricing;
