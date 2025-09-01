import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Developer from '../components/Developer.jsx';
import CanvasLoader from '../components/Loading.jsx';
import { workExperiences } from '../constants/index.js';

const WorkExperience = () => {
  const [animationName, setAnimationName] = useState('idle');


  const audioRefs = useRef([]);
  const experienceRef = useRef();

   // Fonction pour jouer le son spécifique à un index
  const emoteSoundPlay = (index) => {
    // Arrêter tous les autres audios d'abord
    audioRefs.current.forEach((audio, i) => {
      if (audio && i !== index) {
        audio.pause();
        audio.currentTime = 0;
      }
      else {
      audioRefs.current[index].currentTime = 0;
      audioRefs.current[index].play().catch(e => console.log("Audio play failed:", e));
      }
    });}
    
    




  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <p className="head-text">My Work Experience</p>

        <div className="work-container">
          <div className="work-canvas cards-backg">
            <Canvas>
              <ambientLight intensity={6} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={.5} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              <Suspense fallback={<CanvasLoader />}>
                <Developer position-y={-3} scale={3} animationName={animationName} />
              </Suspense>
            </Canvas>
          </div>

          <div className="work-content cards-backg">
           
            <div className="sm:py-10 py-5 sm:px-5 px-2.5" ref={experienceRef}>
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() => 
                    {setAnimationName(item.animation.toLowerCase());
                    emoteSoundPlay(index);}
                    }
                  onPointerOut={() => setAnimationName('idle')}
                  className="work-content_container group">
                   {/* Élément audio pour chaque expérience */}
                  <audio 
                    ref={el => audioRefs.current[index] = el}
                    preload="auto"
                    src={item.sound} 
                  />
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full" src={item.icon} alt="" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="text-sm mb-5">
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;