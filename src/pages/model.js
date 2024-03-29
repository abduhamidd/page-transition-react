import React, {useEffect, useState} from 'react';
import {useViewportScroll, useTransform} from 'framer-motion';
import {motion} from 'framer-motion';
import Webp from '../images/yasmeen.webp';
//Components
import {ScrollForMore} from '../components/ScrollForMore';
//Ease
const transition = {duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9]};
const firstName = {
  animate: {
    transition: {
      delayChilren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};
const lastName = {
  animate: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};
const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: {duration: 1, ...transition},
  },
};

export const Model = ({imageDetails}) => {
  const [canScroll,setCanScroll]=useState(false);



  const {scrollYProgress} = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);



  useEffect(()=>{
if(canScroll===false){
  document.querySelector('body').classList.add('no-scroll')
}else{
  document.querySelector('body').classList.remove('no-scroll') 

}},[canScroll])
  return (
    <motion.div
      className="single"
      initial="initial"
      animate="animate"
      exit="exit"
      onAnimationComplete={()=>setCanScroll(!canScroll)}
    >
      <div className="container fluid">
        <div className="row center top-row">
          <div className="top">
            <motion.div
              className="details"
              initial={{opacity: 0, y: 20}}
              animate={{
                opacity: 1,
                y: 0,
                transition: {delay: 1.2, ...transition},
              }}
            >
              <div className="location">
                <span>28.538336</span>
                <span>-81.379234</span>
              </div>
              <div className="mua">MUA: @mylifeascrystall</div>
            </motion.div>
            <motion.div className="model">
              <motion.span className="first" variants={firstName}>
                <motion.span variants={letter}>Y</motion.span>
                <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter}>s</motion.span>
                <motion.span variants={letter}>m</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>n</motion.span>
              </motion.span>
              <motion.span className="last" variants={lastName}>
                <motion.span variants={letter}>T</motion.span>
                <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter}>r</motion.span>
                <motion.span variants={letter}>i</motion.span>
                <motion.span variants={letter}>q</motion.span>
              </motion.span>
            </motion.div>
          </div>
        </div>
        <div className="row bottom-row">
          <div className="bottom">
            <div className="image-container-single">
              <motion.div
                className="thumbnail-single"
                initial={{
                  y: '-50%',
                  width: imageDetails.width,
                  height: imageDetails.height,
                }}
                animate={{
                  y: 0,
                  width: '100%',
                  height: window.innerWidth > 1440 ? 800 : 400,
                  transition: {delay: 0.2, ...transition},
                }}
              >
                <div className="frame-single">
                  <motion.img
                    src={Webp}
                    alt="Yasmeen Tariq"
                    initial={{scale: 1}}
                    animate={{
                      transition: {delay: 0.2, ...transition},
                      y: window.innerWidth > 1440 ? -1200 : -600,
                    }}
                    style={{scale: scale}}
                  />
                </div>
              </motion.div>
            </div>
          </div>
          <ScrollForMore />
        </div>
      </div>
      <div className="detailed-information">
        <div className="container">
          <div className="row">
            <h2 className="title">
              The insiration behind the artwork & <br /> what it means.
            </h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Model;
