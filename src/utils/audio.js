// Web Audio API Sound Synthesizer for UI Micro-interactions
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Plays a mechanical interface "tick" sound
 */
export function playTick() {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    // High pitch, extremely short decay for a clean tick/click sound
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1500, ctx.currentTime + 0.04);

    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.045);
  } catch (e) {
    // Fail silently if audio context is blocked
    console.debug('Audio tick failed:', e);
  }
}

/**
 * Plays an interface "whoosh" or slide sound for hover highlights
 */
export function playWhoosh() {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    // Triangle wave, pitch slides down, soft volume
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(180, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(70, ctx.currentTime + 0.12);

    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.13);
  } catch (e) {
    console.debug('Audio whoosh failed:', e);
  }
}

/**
 * Plays a success/loaded chime sound on startup complete
 */
export function playChime() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    
    const playNote = (freq, start, duration) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, start);
      
      gain.gain.setValueAtTime(0.05, start);
      gain.gain.exponentialRampToValueAtTime(0.001, start + duration);
      
      osc.start(start);
      osc.stop(start + duration + 0.05);
    };

    // Arpeggio chime: C5 -> E5 -> G5 -> C6
    playNote(523.25, now, 0.15);
    playNote(659.25, now + 0.08, 0.15);
    playNote(783.99, now + 0.16, 0.15);
    playNote(1046.50, now + 0.24, 0.3);
  } catch (e) {
    console.debug('Audio chime failed:', e);
  }
}
