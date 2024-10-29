import React from 'react';
import './styles.scss';

interface FooterProps {
  isTransparent: boolean;
}

const Footer: React.FC<FooterProps> = ({ isTransparent = false }) => {
  return (
    <div className={`footer-wrapper ${isTransparent ? 'transparent' : ''}`}>
      <div className="footer-text">© Yusril Sapta Wardhana</div>
    </div>
  );
};

export default Footer;
