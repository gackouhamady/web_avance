import React from 'react';
import PropTypes from 'prop-types';
 import './../styles/Statcard.css'

const StatCard = ({ title, value }) => {
  return (
    <div className="stat-card">
      <h3 className="stat-title">{title}</h3>
      <div className="stat-value">{value}</div>
    </div>
  );
};

StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default StatCard;