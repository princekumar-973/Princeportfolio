import React, { useState, useEffect, useRef } from 'react';

const VantaBackground = ({ darkMode }) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    const initVanta = () => {
      // Check if VANTA and CLOUDS are available
      if (window.VANTA && window.VANTA.CLOUDS && vantaRef.current) {
        if (vantaEffect) vantaEffect.destroy();

        setVantaEffect(
          window.VANTA.CLOUDS({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            skyColor: darkMode ? 0x0f172a : 0x189fde, // Deep slate vs Sky Blue
            cloudColor: darkMode ? 0x334155 : 0xadc1de,
            cloudShadowColor: darkMode ? 0x020617 : 0x183550,
            sunColor: 0xff9919,
            sunGlareColor: 0xff6633,
            sunlightColor: 0xff9933,
            speed: 1.00
          })
        );
      } else {
        setTimeout(initVanta, 100);
      }
    };

    initVanta();

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [darkMode]);

  return (
    <div 
      ref={vantaRef} 
      className="fixed inset-0 z-[-1] w-full h-full pointer-events-none"
      id="vanta-bg"
    />
  );
};

export default VantaBackground;
