import { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
      // etat pour gerer le statut de copie de l'email
  const [hasCopied, setHasCopied] = useState(false);

  const globeRef = useRef();
  const audioRef = useRef();
  const handleCopy = () => {
    // Copie l'email dans le presse-papier
    navigator.clipboard.writeText(' ayoub.aitchikh23@ump.ac.ma');
    setHasCopied(true);
   // Réinitialise l'état après 2 seconde
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };


  // Initialisation du globe et des interactions
  useEffect(() => {
    if (!globeRef.current) return;


    // Gestionnaire de survol générique
    const handleGlobeHover = () => {
      if (audioRef.current) {
        // Réinitialiser et jouer le son
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(e => console.log("Audio play failed:", e));
      }
    };

    // Ajouter l'écouteur d'événement sur le conteneur du globe
    const globeContainer = document.querySelector('.globe-container');
    if (globeContainer) {
      globeContainer.addEventListener('mouseenter', handleGlobeHover);
    }

    return () => {
      if (globeContainer) {
        globeContainer.removeEventListener('mouseenter', handleGlobeHover);
      }
    };
  }, []);


  return (
    <section className="c-space my-20 " id="about" >
      {/* Élément audio caché */}
      <audio 
        ref={audioRef} 
        id="click-sound" 
        preload="auto"
        src="textures/project/globe.mp3" // Assurez-vous que ce fichier existe
      />
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container cards-backg">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[200px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Ayoub Ait Chikh</p>
              <p className="grid-subtext">
                A software Engeneering student with experience in frontend (react , next , tailwind ,3js ...),
                Backend (java spring boot , nodejs , python for Ai ) . i developped some interesting projects  ( RAG systems , Ai applications , 3d games and website ...) 
                and solved many problems using my coding skills . And now i am prepared to help your business growing up.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container cards-backg">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                applications
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container cards-backg">
            <div className="globe-container rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center ">
              <Globe
                ref={globeRef}              
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 34.689404, lng: -1.912823, text: 'Ayoub (Oujda, Morocco)', color: 'white', size: 200 }]}
                onGlobeClick={() => {
                  if (audioRef.current) {
                    audioRef.current.currentTime = 0;
                    audioRef.current.play().catch(e => console.log("Audio play failed:", e));
                  }
                }}
              />
            </div>
            <div>
              <p className="grid-headtext">I speak arabic (native), french and english (professional)</p>
              <p className="grid-subtext">I&apos;m based in Oujda, Morocco and open to work worldwide.</p>
              <Button name="Zoom in " isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3 ">
          <div className="grid-container cards-backg">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2 ">
          <div className="grid-container cards-backg">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top mb-5"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">ayoub.aitchikh23@ump.ac.ma</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;