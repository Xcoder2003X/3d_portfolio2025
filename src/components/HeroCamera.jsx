import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

const HeroCamera = ({ isMobile, children }) => {
  const group = useRef();
  const [isInside, setIsInside] = useState(false);

  const clickSound = document.getElementById('click-sound');
  // Outside position: [0, 0, 20]
  // Inside position: [0, 2, 5] // Adjust these values based on your room's layout
  
  useFrame((state, delta) => {
    // Target position changes based on isInside state
    //const targetPosition = isInside ? [2, -1.5, 6] : [0, 0, 20];
    const targetPosition = isInside ? [0, -1.8, 2] : [0, 0, 20];
    // Define target rotation - only when inside
    const targetRotation = isInside ? [0, Math.PI *.72, 0] : [0, 0, 0];

    // Smooth camera position transition
    easing.damp3(state.camera.position, targetPosition, 0.25, delta);

    // Smooth rotation transition, only for room entry/exit
    
      easing.dampE(group.current.rotation, targetRotation, 0.25, delta);
    
  });

  const handleRoomClick = () => {
    setIsInside(!isInside);
    clickSound.play();
  };

  return (
    <group 
      ref={group}
      onClick={handleRoomClick}
      style={{ cursor: 'pointer' }}
    >
      {children}
    </group>
  );
};

export default HeroCamera;