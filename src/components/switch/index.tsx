import React, { useState } from 'react';
import SwitchButton, { ReactSwitchProps } from 'react-switch';

interface SwitchProps extends ReactSwitchProps {
  id: 'dark' | 'auto';
}

const Switch: React.FC<SwitchProps> = () => {
  const [checked, setChecked] = useState(false);

  return (
    <SwitchButton checked={checked} onChange={() => setChecked(!checked)} />
  );
};

export default Switch;
