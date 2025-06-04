import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import Character from './components/Character';
import Milestone from './components/Milestone';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { label: '🎓 Vet School 2010', content: 'Graduated as Veterinarian' },
  { label: '🎧 Gramafoon 2012', content: 'Launched Arabic Music Radio App', pose: 'headphones' },
  { label: '🎵 Deezer 2018', content: 'Editorial & Artist Relations Manager', pose: 'mic' },
  { label: '📊 EMPIRE 2022', content: 'Territory Manager, Egypt', pose: 'desk' },
  { label: '🏆 Billboard 2024', content: 'Named 40 Under 40 in Music', pose: 'trophy' }
];

export default function App() {
  const trackRef = useRef(null);
  const [pose, setPose] = useState('walk');

  useEffect(() => {
    const sections = gsap.utils.toArray('.milestone');

    sections.forEach((section, i) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'left center',
        end: 'right center',
        scrub: true,
        onEnter: () => setPose(milestones[i].pose || 'walk'),
        onLeaveBack: () => setPose(milestones[i - 1]?.pose || 'walk')
      });
    });

    gsap.to('.character', {
      x: () => window.innerWidth * (milestones.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: trackRef.current,
        start: 'left left',
        end: () => `+=${window.innerWidth * milestones.length}`,
        scrub: true,
        pin: true
      }
    });
  }, []);

  return (
    <div className="track" ref={trackRef}>
      <Character pose={pose} />
      {milestones.map((m, i) => (
        <Milestone key={i} label={m.label} content={m.content} />
      ))}
    </div>
  );
}
