import React from "react";
import "../Links/Links.css"

export default function Links() {
  return (
    <div className="links-container">
      <div className="links-section">
        <div className="links-column">
          <h3>About</h3>
          <ul className="links-grid">
            <li><a href="hello">Contact us</a></li>
            <li>About us</li>
            <li>Careers</li>
            <li>Flipkartstories</li>
          </ul>
        </div>
        <div className="links-column">
          <h3>Group Companies</h3>
          <ul className="links-grid">
            <li>Myntra</li>
            <li>Flikart Wholesale</li>
            <li>Cleartrip</li>
          </ul>
        </div>
        <div className="links-column">
          <h3>Help</h3>
          <ul className="links-grid">
            <li>Payments</li>
            <li>Shipping</li>
            <li>Cancellation & Returns</li>
            <li>FaQ</li>
          </ul>
        </div>
        <div className="links-column">
          <h3>Consumer Policy</h3>
          <ul className="links-grid">
            <li>Cancellation & Returns</li>
            <li>Terms of Use</li>
            <li>Security</li>
            
          </ul>
        </div>
        <div className="links-column">
          <h3>Mail Us</h3>
          <ul className="links-grid">
        
            <li>Outer Ring Road</li>
            <li>Bengaluru, 560103,</li>
            <li>Karnataka, India</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
