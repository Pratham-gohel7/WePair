import React from 'react';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div >
      <img src={icon} alt={title} className="" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default ServiceCard;