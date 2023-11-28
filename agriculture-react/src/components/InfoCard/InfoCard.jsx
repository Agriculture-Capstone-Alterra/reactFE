import React, { useState } from 'react';
import PropTypes from 'prop-types';

function InfoCard(props) {
  const { title, content } = props;
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="card p-2">
      <div className="d-flex justify-content-between font-style" onClick={handleCollapse}>
        <h6>{title}</h6> 
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

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

export default InfoCard;
