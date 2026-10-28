import React, { useEffect, useRef } from 'react';

export default function MotionLayer({ activeSection, triggerCounter, stageRef }) {
  const containerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!stageRef?.current || !containerRef?.current) return;

    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const sourceBtn = document.querySelector(`.hotspot[data-id="${activeSection}"]`);
    if (!sourceBtn) return;

    const sourceIcon = sourceBtn.querySelector('.icon');
    if (!sourceIcon) return;

    const r = sourceIcon.getBoundingClientRect();
    const stage = stageRef.current;
    const stageRect = stage.getBoundingClientRect();
    const toLeft = Boolean(sourceBtn.closest('.left'));
    const isMobile = window.matchMedia('(max-width: 920px)').matches;

    // Set stage launch variables for section arrival animation
    const enterX = isMobile ? '0px' : toLeft ? '-160px' : '160px';
    const enterY = isMobile
      ? toLeft ? '-80px' : '80px'
      : `${Math.max(-80, Math.min(80, r.top - stageRect.top))}px`;
    const enterR = isMobile ? '0deg' : toLeft ? '-2.5deg' : '2.5deg';
    const launchOrigin = toLeft ? '0% 45%' : '100% 45%';

    stage.style.setProperty('--enter-x', enterX);
    stage.style.setProperty('--enter-y', enterY);
    stage.style.setProperty('--enter-r', enterR);
    stage.style.setProperty('--launch-origin', launchOrigin);

    // Trigger stage entering animation
    stage.classList.remove('entering');
    void stage.offsetWidth; // Force reflow
    stage.classList.add('entering');

    // Trigger button burst
    sourceBtn.classList.remove('launching');
    void sourceBtn.offsetWidth;
    sourceBtn.classList.add('launching');

    // Clean up previous animations
    cancelAnimationFrame(animationFrameRef.current);
    clearTimeout(timeoutRef.current);
    const container = containerRef.current;
    container.replaceChildren();

    // Flight animation calculations
    const start = {
      x: r.left + r.width / 2,
      y: r.top + r.height / 2
    };

    const end = {
      x: isMobile
        ? stageRect.left + stageRect.width / 2
        : stageRect.left + (toLeft ? Math.min(260, stageRect.width * 0.28) : Math.max(stageRect.width - 260, stageRect.width * 0.72)),
      y: stageRect.top + Math.min(150, stageRect.height * 0.25)
    };

    const curve = isMobile
      ? `M ${start.x} ${start.y} C ${start.x + 40} ${start.y + Math.sign(end.y - start.y) * 60}, ${end.x - 50} ${end.y - 30}, ${end.x} ${end.y}`
      : `M ${start.x} ${start.y} C ${start.x + (end.x - start.x) * 0.35} ${start.y}, ${start.x + (end.x - start.x) * 0.75} ${end.y}, ${end.x} ${end.y}`;

    const ns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('class', 'motion-svg');
    svg.setAttribute('viewBox', `0 0 ${window.innerWidth} ${window.innerHeight}`);
    svg.setAttribute('preserveAspectRatio', 'none');

    const track = document.createElementNS(ns, 'path');
    track.setAttribute('d', curve);
    track.setAttribute('class', 'motion-trail');

    const glow = document.createElementNS(ns, 'path');
    glow.setAttribute('d', curve);
    glow.setAttribute('class', 'motion-trail soft');

    svg.append(glow, track);
    container.append(svg);

    const orb = document.createElement('div');
    orb.className = 'motion-orb';
    container.append(orb);

    const chip = document.createElement('div');
    chip.className = 'flight-chip';
    const sectionTitle = activeSection === 'metalcalc' ? 'MetalCalc' : activeSection[0].toUpperCase() + activeSection.slice(1);
    chip.innerHTML = `<span class="chip-icon">${sourceIcon.innerHTML}</span><span>${sectionTitle}</span>`;
    container.append(chip);

    const pulse = document.createElement('div');
    pulse.className = 'motion-pulse';
    container.append(pulse);

    const length = track.getTotalLength();
    track.style.strokeDasharray = `${length}`;
    glow.style.strokeDasharray = `${length}`;

    const duration = 850;
    const t0 = performance.now();
    const ease = (t) => 1 - Math.pow(1 - t, 3);

    const tick = (now) => {
      const t = Math.min((now - t0) / duration, 1);
      const p = ease(t);
      const pt = track.getPointAtLength(Math.max(0.001, length * p));

      track.style.strokeDashoffset = String(length * (1 - p));
      glow.style.strokeDashoffset = String(length * (1 - p));

      svg.style.opacity = String(t < 0.65 ? 1 : (1 - t) / 0.35);

      orb.style.transform = `translate3d(${pt.x - 10}px, ${pt.y - 10}px, 0) scale(${0.65 + (1 - t) * 0.7})`;
      orb.style.opacity = String(t < 0.74 ? 1 : (1 - t) / 0.26);

      chip.style.transform = `translate3d(${pt.x - 54}px, ${pt.y - 48}px, 0) scale(${0.75 + 0.35 * p})`;
      chip.style.opacity = String(t < 0.65 ? 1 : (1 - t) / 0.35);

      pulse.style.transform = `translate3d(${pt.x - 34}px, ${pt.y - 34}px, 0) scale(${0.35 + 1.5 * p})`;
      pulse.style.opacity = String(0.65 * (1 - t));

      if (t < 1) {
        animationFrameRef.current = requestAnimationFrame(tick);
      }
    };

    animationFrameRef.current = requestAnimationFrame(tick);

    timeoutRef.current = setTimeout(() => {
      container.replaceChildren();
      sourceBtn.classList.remove('launching');
    }, 1000);

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, [activeSection, triggerCounter, stageRef]);

  return <div className="motion-layer" ref={containerRef} aria-hidden="true" />;
}
