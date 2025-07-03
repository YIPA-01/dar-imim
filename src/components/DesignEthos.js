import React from 'react';

const DesignEthos = () => {
  return (
    <section className="design-ethos-noma">
      <div className="ethos-statement-section">
        <h2 className="section-title-large">DESIGN ETHOS</h2>
        <p className="ethos-subtitle">Crafted by hand, inspired by place</p>
      </div>
      
      <div className="ethos-content-grid">
        <div className="ethos-large-image"></div>
        
        <div className="ethos-materials-section">
          <div className="material-showcase">
            <div className="material-item">
              <h4>Tadelakt Walls</h4>
              <p className="material-description">Ancient Moroccan lime plaster technique, polished with black soap and river stones</p>
            </div>
            
            <div className="material-item">
              <h4>Berber Textiles</h4>
              <p className="material-description">Hand-woven by women's cooperatives in the Atlas Mountains</p>
            </div>
            
            <div className="material-item">
              <h4>Reclaimed Eucalyptus</h4>
              <p className="material-description">Weathered wood from old fishing boats, given new life as furniture</p>
            </div>
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default DesignEthos; 