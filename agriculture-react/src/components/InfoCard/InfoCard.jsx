import React, { useState } from 'react';

function InfoCard(props) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="card p-2">
      <div className="d-flex justify-content-around font-style" onClick={handleCollapse}>
        <h6>Informasi Penanganan Hama</h6>
        <h6>{isCollapsed ? '+' : '-'}</h6>
      </div>
      {!isCollapsed && (
        <div className="mx-auto info-card-content">
          {content}
        </div>
      )}
    </div>
  );
}

export default InfoCard;
