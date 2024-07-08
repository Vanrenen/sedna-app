import React from 'react';
import Toggle from './Toggle';

const Settings: React.FC = () => {
  const handleToggle = (state: boolean) => {
    console.log('Toggle state:', state);
  };

  return (
    <div>
      <h1>Settings</h1>
      <Toggle onToggle={handleToggle} />
    </div>
  );
};

export default Settings;
