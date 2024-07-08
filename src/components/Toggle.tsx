import React, { useState } from 'react';
import styled from 'styled-components';

interface ToggleProps {
  onToggle: (state: boolean) => void;
}

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

const ToggleSwitch = styled.div<{ isOn: boolean }>`
  width: 50px;
  height: 25px;
  border-radius: 15px;
  background-color: ${({ isOn, theme }) => (isOn ? theme.colors.primary : theme.colors.secondary)};
  position: relative;
  transition: background-color 0.3s;

  @media (max-width: 768px) {
    width: 40px;
    height: 20px;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 15px;
  }
`;

const ToggleKnob = styled.div<{ isOn: boolean }>`
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 1px;
  left: ${({ isOn }) => (isOn ? '26px' : '1px')};
  transition: left 0.3s;

  @media (max-width: 768px) {
    width: 18px;
    height: 18px;
    top: 1px;
    left: ${({ isOn }) => (isOn ? '21px' : '1px')};
  }

  @media (max-width: 480px) {
    width: 13px;
    height: 13px;
    top: 1px;
    left: ${({ isOn }) => (isOn ? '16px' : '1px')};
  }
`;

const Toggle: React.FC<ToggleProps> = ({ onToggle }) => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
    onToggle(!isOn);
  };

  return (
    <ToggleContainer onClick={handleToggle} role="switch" aria-checked={isOn}>
      <ToggleSwitch isOn={isOn}>
        <ToggleKnob isOn={isOn} />
      </ToggleSwitch>
    </ToggleContainer>
  );
};

export default Toggle;
