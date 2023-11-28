import React, { useState } from 'react';
import PropTypes from 'prop-types';

function InfoCard(props) {
  const { title, content } = props;
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="card p-3 w-auto">
      <div className="d-flex justify-content-between font-style" onClick={handleCollapse}>
        <h4>{title}</h4> 
        <h4>{isCollapsed ? '+' : '-'}</h4>
      </div>
      {!isCollapsed && (
        <p className="info-card-content">
          {content}
        </p>
      )}
    </div>
  );
}

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

export default InfoCard;
