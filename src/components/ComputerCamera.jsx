import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

const ComputerCamera = ({ isMobile, children, onZoomChange }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const computerGroupRef = useRef();

  const handleComputerClick = () => {
    const newZoomState = !isZoomed;
    setIsZoomed(newZoomState);
    
  };

  useFrame((state, delta) => {
    // Animation de la caméra
    const targetPosition = isZoomed ?  [0, 2, 7] : [0, 0, 10] ;
    const targetLookAt = isZoomed ? [0, 2, 0] : [0, 10, 0] ;
    
    // Animation de la position de la caméra
    easing.damp3(state.camera.position, targetPosition, 0.25, delta);
    
    // Animation du point de regard de la caméra
    easing.damp3(state.camera.lookAt, targetLookAt, 0.25, delta);
    
    // Animation de l'échelle de l'ordinateur
    const targetScale = isZoomed ? [3, 3, 3] : [1.5 ,1.7 ,1.7];
    easing.damp3(computerGroupRef.current.scale, targetScale, 0.25, delta);
  });

  return (
    <group 
      ref={computerGroupRef}
      onClick={handleComputerClick}
      onPointerOver={() => document.body.style.cursor = 'pointer'}
      onPointerOut={() => document.body.style.cursor = 'auto'}
    >
      {children}
    </group>
  );
};

export default ComputerCamera;