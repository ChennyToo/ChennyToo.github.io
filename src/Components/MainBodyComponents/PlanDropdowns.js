import React, { useState } from 'react';

const PlanDropdowns = () => {
const [isDropdownOpen, setIsDropdownOpen] = useState(false);
const dropdownStyle = {
    position: 'relative',
    backgroundColor: 'blue',
    width: '15%',
    height: '10%',
  };
const mealPlanButtonStyle = {
    backgroundColor: isDropdownOpen ? 'orange' : '#f5c453',
    width: '100%',
    height: '100%',
    fontSize: '16px',
    cursor: 'pointer',
  };

  const dropdownContentStyle = {
    display: isDropdownOpen ? 'block' : 'none',
    position: 'absolute',
    backgroundColor: '#f9f9f9',
    minWidth: '100%',
  };

  const dropdownItemStyle = {
    color: 'black',
    width: '100%',
    height: '100%',
    display: 'block',
    paddingTop: '10px',
    paddingBottom: '10px',
  };

  const mealPlans = [
    { name: 'Roar (Basic) Plan'},
    { name: 'Roar Plus Plan'},
    { name: 'Custom Amount'},
  ];


  return (
    <div
      className="dropdown"
      style={dropdownStyle}
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
      
    >
      <button style={mealPlanButtonStyle}>Select Meal Plan</button>
      <div style={dropdownContentStyle}>
      {mealPlans.map((mealPlans, index) => (
          <a
            key={index}
            style={dropdownItemStyle}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'gray'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
          >
            {mealPlans.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default PlanDropdowns;