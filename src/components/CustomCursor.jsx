import { useEffect, useRef, useState } from 'react';

const GLYPHS = ['<>', 'GO', 'X', '//', 'OK', '[]', '->', '++'];

export default function CustomCursor() {
  const crossRef = useRef(null);
  const frameRef = useRef(null);
  const glyphRef = useRef(null);
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    // Check if the system has a fine pointer (mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsFinePointer(mediaQuery.matches);

    if (!mediaQuery.matches) return;

    const cross = crossRef.current;
    const frame = frameRef.current;
    const glyph = glyphRef.current;

    let mouse = { x: -100, y: -100 };
    let framePos = { x: -100, y: -100 };
    let active = false;
    let isHovering = false;
    let glyphInterval = null;

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      if (!active) {
        active = true;
        cross.style.opacity = 1;
        frame.style.opacity = 1;
        framePos.x = mouse.x;
        framePos.y = mouse.y;
      }

      // Position the cross immediately (no lag)
      cross.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
    };

    // Frame follows mouse with a smooth lerp
    const tick = () => {
      const ease = 0.16; // physics lag factor
      framePos.x += (mouse.x - framePos.x) * ease;
      framePos.y += (mouse.y - framePos.y) * ease;

      frame.style.transform = `translate3d(${framePos.x}px, ${framePos.y}px, 0)`;
      requestAnimationFrame(tick);
    };

    const startGlyphShuffle = () => {
      if (glyphInterval) clearInterval(glyphInterval);
      glyphInterval = setInterval(() => {
        if (glyph) {
          glyph.textContent = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
      }, 100);
    };

    const stopGlyphShuffle = () => {
      if (glyphInterval) clearInterval(glyphInterval);
      glyphInterval = null;
    };

    const onMouseOver = (e) => {
      const target = e.target;
      const isClickable = target.closest('a, button, select, input, textarea, [role="button"]');
      
      if (isClickable && !isHovering) {
        isHovering = true;
        frame.classList.add('is-hover');
        startGlyphShuffle();
      } else if (!isClickable && isHovering) {
        isHovering = false;
        frame.classList.remove('is-hover');
        stopGlyphShuffle();
      }
    };

    const onMouseDown = () => {
      frame.classList.add('is-down');
    };

    const onMouseUp = () => {
      frame.classList.remove('is-down');
    };

    const onMouseLeaveDoc = () => {
      active = false;
      cross.style.opacity = 0;
      frame.style.opacity = 0;
      stopGlyphShuffle();
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeaveDoc);

    const animationId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeaveDoc);
      cancelAnimationFrame(animationId);
      stopGlyphShuffle();
    };
  }, []);

  if (!isFinePointer) return null;

  return (
    <>
      {/* Absolute center cross */}
      <div ref={crossRef} className="cur-cross" aria-hidden="true">
        <span className="cur-cross-h" />
        <span className="cur-cross-v" />
      </div>

      {/* Lagging frame boxes */}
      <div ref={frameRef} className="cur-frame" aria-hidden="true">
        <span className="cur-corner c-tl" />
        <span className="cur-corner c-tr" />
        <span className="cur-corner c-bl" />
        <span className="cur-corner c-br" />
        <span ref={glyphRef} className="cur-glyph" />
      </div>
    </>
  );
}
