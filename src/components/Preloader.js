// import React, { useRef, useEffect, useState } from "react";
// import '../styles/Preloader.css';

// const Preloader = ({
//   onFinish,
//   duration = 2200,
//   pieceSize = 20,
//   logoSrc,
//   logoScale = 0.3
// }) => {
//   const canvasRef = useRef(null);
//   const [finished, setFinished] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [slideOut, setSlideOut] = useState(false);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     const dpr = window.devicePixelRatio || 1;
//     canvas.width = canvas.clientWidth * dpr;
//     canvas.height = canvas.clientHeight * dpr;
//     ctx.scale(dpr, dpr);

//     const img = new Image();
//     img.src = logoSrc;
//     img.crossOrigin = "anonymous";

//     img.onload = () => {
//       const logoW = img.width;
//       const logoH = img.height;

//       const maxDim = Math.min(
//         canvas.clientWidth * logoScale,
//         canvas.clientHeight * logoScale
//       );
//       const scale = Math.min(maxDim / logoW, maxDim / logoH);
//       const drawW = logoW * scale;
//       const drawH = logoH * scale;
//       const offsetX = (canvas.clientWidth - drawW) / 2;
//       const offsetY = (canvas.clientHeight - drawH) / 2;

//       const cols = Math.ceil(drawW / pieceSize);
//       const rows = Math.ceil(drawH / pieceSize);
//       const pieces = [];

//       for (let y = 0; y < rows; y++) {
//         for (let x = 0; x < cols; x++) {
//           const sx = (x * pieceSize) / scale;
//           const sy = (y * pieceSize) / scale;
//           const sw = Math.min(pieceSize / scale, logoW - sx);
//           const sh = Math.min(pieceSize / scale, logoH - sy);
//           const dx = offsetX + x * pieceSize;
//           const dy = offsetY + y * pieceSize;

//           pieces.push({
//             sx,
//             sy,
//             sw,
//             sh,
//             dx,
//             dy,
//             size: pieceSize,
//             vx: (Math.random() - 0.5) * 4,
//             vy: (Math.random() - 0.5) * 4,
//             rotation: (Math.random() - 0.5) * Math.PI * 2,
//             rotationSpeed: (Math.random() - 0.5) * 0.1,
//             delay: Math.random() * 300,
//           });
//         }
//       }

//       const logoHold = 1200;
//       const startRealTime = performance.now();
//       const startTime = startRealTime + logoHold;
//       const endShatter = startTime + duration * 0.5;
//       const endFade = startTime + duration;

//       const animate = (t) => {
//         ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
//         ctx.fillStyle = "#000";
//         ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

//         if (t < startTime) {
//           // initial hold with rise+fade
//           const holdProgress = Math.min(1, Math.max(0, (t - startRealTime) / logoHold));
//           const ease = Math.sin((holdProgress * Math.PI) / 2); // ease-out
//           const yOffset = (1 - ease) * 100; // start 30px lower, rise to 0
//           ctx.save();
//           ctx.globalAlpha = ease;
//           ctx.drawImage(
//             img,
//             0,
//             0,
//             logoW,
//             logoH,
//             offsetX,
//             offsetY + yOffset,
//             drawW,
//             drawH
//           );
//           ctx.restore();
//           requestAnimationFrame(animate);
//           return;
//         }

//         const totalTime = endFade - startTime;
//         const currentProgress = Math.min(1, (t - startTime) / totalTime);
//         setProgress(Math.floor(currentProgress * 100));

//         pieces.forEach((p) => {
//           if (t < startTime + p.delay) return;

//           if (t < endShatter) {
//             const phase = Math.min(1, (t - startTime - p.delay) / (duration * 0.5));
//             const ease = Math.sin((phase * Math.PI) / 2);
//             const moveX = p.vx * ease * 30;
//             const moveY = p.vy * ease * 30;
//             const rot = p.rotation + p.rotationSpeed * ease * 10;

//             ctx.save();
//             ctx.globalAlpha = 1;
//             ctx.translate(p.dx + p.size / 2 + moveX, p.dy + p.size / 2 + moveY);
//             ctx.rotate(rot);
//             ctx.translate(-p.size / 2, -p.size / 2);
//             ctx.drawImage(img, p.sx, p.sy, p.sw, p.sh, 0, 0, p.size, p.size);
//             ctx.restore();
//           } else {
//             const phase = Math.min(1, (t - endShatter - p.delay) / (duration * 0.5));
//             const easeRev = 1 - Math.pow(1 - phase, 2);
//             const moveX = p.vx * (1 - easeRev) * 30;
//             const moveY = p.vy * (1 - easeRev) * 30;
//             const rot = p.rotation + p.rotationSpeed * (1 - easeRev) * 10;
//             const alpha = 1 - phase;

//             ctx.save();
//             ctx.globalAlpha = alpha;
//             ctx.translate(p.dx + p.size / 2 + moveX, p.dy + p.size / 2 + moveY);
//             ctx.rotate(rot);
//             ctx.translate(-p.size / 2, -p.size / 2);
//             ctx.drawImage(img, p.sx, p.sy, p.sw, p.sh, 0, 0, p.size, p.size);
//             ctx.restore();
//           }
//         });

//         if (t < endFade + 100) {
//           requestAnimationFrame(animate);
//         } else {
//           setSlideOut(true); // trigger background slide
//           setTimeout(() => {
//             setFinished(true);
//             if (onFinish) onFinish();
//           }, 1000); // wait for slide-out animation
//         }
//       };

//       requestAnimationFrame(animate);
//     };
//   }, [logoSrc, duration, pieceSize, logoScale, onFinish]);

//   return (
//     <div className={`preloader-wrapper ${slideOut ? "slide-out" : ""}`}>
//       <canvas
//         ref={canvasRef}
//         className="preloader-canvas"
//         width={window.innerWidth}
//         height={window.innerHeight}
//       />
//       {!finished && (
//         <div className="loader-footer">
//           <span>{progress}</span>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Preloader;




// Preloader with square pieces
// import React, { useRef, useEffect, useState } from "react";
// import '../styles/Preloader.css';

// const Preloader = ({
//   onFinish,
//   duration = 2500,
//   pieceSize = 20,
//   logoSrc,
//   logoScale = 0.3
// }) => {
//   const canvasRef = useRef(null);
//   const [finished, setFinished] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [slideOut, setSlideOut] = useState(false);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     const dpr = window.devicePixelRatio || 1;
//     canvas.width = canvas.clientWidth * dpr;
//     canvas.height = canvas.clientHeight * dpr;
//     ctx.scale(dpr, dpr);

//     const img = new Image();
//     img.src = logoSrc;
//     img.crossOrigin = "anonymous";

//     img.onload = () => {
//       const logoW = img.width;
//       const logoH = img.height;

//       const maxDim = Math.min(
//         canvas.clientWidth * logoScale,
//         canvas.clientHeight * logoScale
//       );
//       const scale = Math.min(maxDim / logoW, maxDim / logoH);
//       const drawW = logoW * scale;
//       const drawH = logoH * scale;
//       const offsetX = (canvas.clientWidth - drawW) / 2;
//       const offsetY = (canvas.clientHeight - drawH) / 2;

//       const centerX = offsetX + drawW / 2;
//       const centerY = offsetY + drawH / 2;

//       const cols = Math.ceil(drawW / pieceSize);
//       const rows = Math.ceil(drawH / pieceSize);
//       const pieces = [];

//       for (let y = 0; y < rows; y++) {
//         for (let x = 0; x < cols; x++) {
//           const sx = (x * pieceSize) / scale;
//           const sy = (y * pieceSize) / scale;
//           const sw = Math.min(pieceSize / scale, logoW - sx);
//           const sh = Math.min(pieceSize / scale, logoH - sy);
//           const dx = offsetX + x * pieceSize;
//           const dy = offsetY + y * pieceSize;

//           const cx = dx + pieceSize / 2;
//           const cy = dy + pieceSize / 2;

//           pieces.push({
//             sx,
//             sy,
//             sw,
//             sh,
//             dx,
//             dy,
//             size: pieceSize,
//             cx,
//             cy,
//             dirX: cx - centerX,
//             dirY: cy - centerY,
//             delay: Math.random() * 300,
//           });
//         }
//       }

//       const logoHold = 2000;
//       const startRealTime = performance.now();
//       const startTime = startRealTime + logoHold;
//       const endFade = startTime + duration;

//       const animate = (t) => {
//         ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
//         ctx.fillStyle = "#000";
//         ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

//         if (t < startTime) {
//           const holdProgress = Math.min(1, Math.max(0, (t - startRealTime) / logoHold));
//           const ease = Math.sin((holdProgress * Math.PI) / 2);
//           const yOffset = (1 - ease) * 100;
//           ctx.save();
//           ctx.globalAlpha = ease;
//           ctx.drawImage(
//             img,
//             0,
//             0,
//             logoW,
//             logoH,
//             offsetX,
//             offsetY + yOffset,
//             drawW,
//             drawH
//           );
//           ctx.restore();
//           requestAnimationFrame(animate);
//           return;
//         }

//         const totalTime = endFade - startTime;
//         const currentProgress = Math.min(1, (t - startTime) / totalTime);
//         setProgress(Math.floor(currentProgress * 100));

//         const distanceMultiplier = 2.2; // controls how far the pieces go
//         const maxScale = 2.8; // how much to magnify

//         pieces.forEach((p) => {
//           if (t < startTime + p.delay) return;

//           const timeSinceStart = t - startTime - p.delay;
//           const shatterDuration = duration * 0.7;

//           const progress = Math.min(1, timeSinceStart / shatterDuration);
//           const ease = Math.sin((progress * Math.PI) / 2);

//           const moveX = p.dirX * ease * distanceMultiplier;
//           const moveY = p.dirY * ease * distanceMultiplier;
//           const scale = 1 + ease * (maxScale - 1);
//           const alpha = 1 - progress;

//           ctx.save();
//           ctx.globalAlpha = alpha;
//           ctx.translate(p.cx + moveX, p.cy + moveY);
//           ctx.scale(scale, scale);
//           ctx.translate(-p.size / 2, -p.size / 2);
//           ctx.drawImage(img, p.sx, p.sy, p.sw, p.sh, 0, 0, p.size, p.size);
//           ctx.restore();
//         });

//         if (t < endFade + 100) {
//           requestAnimationFrame(animate);
//         } else {
//           setSlideOut(true);
//           setTimeout(() => {
//             setFinished(true);
//             if (onFinish) onFinish();
//           }, 1000);
//         }
//       };

//       requestAnimationFrame(animate);
//     };
//   }, [logoSrc, duration, pieceSize, logoScale, onFinish]);

//   return (
//     <div className={`preloader-wrapper ${slideOut ? "slide-out" : ""}`}>
//       <canvas
//         ref={canvasRef}
//         className="preloader-canvas"
//         width={window.innerWidth}
//         height={window.innerHeight}
//       />
//       {!finished && (
//         <div className="loader-footer">
//           <span>{progress}</span>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Preloader;




// Preloader with Shatter Effect (company name shows immediately at explosion start)
import React, { useRef, useEffect, useState } from "react";
import "../styles/Preloader.css";

const Preloader = ({
  onFinish,
  duration = 2000,
  numSlices = 60,
  logoSrc,
  logoScale = 0.3,
}) => {
  const canvasRef = useRef(null);
  const [finished, setFinished] = useState(false);
  const [slideOut, setSlideOut] = useState(false);
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.clientWidth * dpr;
    canvas.height = canvas.clientHeight * dpr;
    ctx.scale(dpr, dpr);

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = logoSrc;

    let rafId = null;
    const timeouts = [];

    img.onload = () => {
      const logoW = img.width;
      const logoH = img.height;

      const maxDim = Math.min(
        canvas.clientWidth * logoScale,
        canvas.clientHeight * logoScale
      );
      const scale = Math.min(maxDim / logoW, maxDim / logoH);
      const drawW = logoW * scale;
      const drawH = logoH * scale;
      const offsetX = (canvas.clientWidth - drawW) / 2;
      const offsetY = (canvas.clientHeight - drawH) / 2;

      const centerX = offsetX + drawW / 2;
      const centerY = offsetY + drawH / 2;
      const radius = drawW / 2;

      const pieces = [];
      for (let i = 0; i < numSlices; i++) {
        const startAngle = (i * 2 * Math.PI) / numSlices;
        const endAngle = ((i + 1) * 2 * Math.PI) / numSlices;
        pieces.push({
          startAngle,
          endAngle,
          cx: centerX,
          cy: centerY,
          radius,
          delay: Math.random() * 300,
        });
      }

      const logoHold = 1200; // hold before explosion
      const startRealTime = performance.now();
      const startTime = startRealTime + logoHold;
      const endFade = startTime + duration;

      let nameShown = false; // flag to avoid multiple triggers

      const animate = (t) => {
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

        // Hold before shatter
        if (t < startTime) {
          const holdProgress = Math.min(1, Math.max(0, (t - startRealTime) / logoHold));
          const ease = Math.sin((holdProgress * Math.PI) / 2);
          const yOffset = (1 - ease) * 100;

          ctx.save();
          ctx.globalAlpha = ease;
          ctx.drawImage(
            img,
            0,
            0,
            logoW,
            logoH,
            offsetX,
            offsetY + yOffset,
            drawW,
            drawH
          );
          ctx.restore();

          rafId = requestAnimationFrame(animate);
          return;
        }

        // 🔑 As soon as explosion starts, show company name
        if (!nameShown) {
          setShowName(true);
          nameShown = true;
        }

        // Shatter pieces
        const distanceMultiplier = 2.8;
        const maxScale = 4.5;

        pieces.forEach((p) => {
          if (t < startTime + p.delay) return;

          const timeSinceStart = t - startTime - p.delay;
          const shatterDuration = duration * 0.7;
          const progress = Math.min(1, timeSinceStart / shatterDuration);
          const ease = Math.sin((progress * Math.PI) / 2);

          const moveDist = ease * radius * distanceMultiplier;
          const scaleFactor = 1 + ease * (maxScale - 1);
          const alpha = 1 - progress;

          const angle = (p.startAngle + p.endAngle) / 2;
          const dx = Math.cos(angle) * moveDist;
          const dy = Math.sin(angle) * moveDist;

          ctx.save();
          ctx.translate(p.cx + dx, p.cy + dy);
          ctx.scale(scaleFactor, scaleFactor);
          ctx.translate(-p.cx, -p.cy);
          ctx.globalAlpha = alpha;

          ctx.beginPath();
          ctx.moveTo(p.cx, p.cy);
          ctx.arc(p.cx, p.cy, p.radius, p.startAngle, p.endAngle);
          ctx.closePath();
          ctx.clip();

          ctx.drawImage(img, 0, 0, logoW, logoH, offsetX, offsetY, drawW, drawH);
          ctx.restore();
        });

        if (t < endFade + 300) {
          rafId = requestAnimationFrame(animate);
        } else {
          setSlideOut(true);
          timeouts.push(
            setTimeout(() => {
              setFinished(true);
              if (typeof onFinish === "function") onFinish();
            }, 600) // slide-out duration
          );
        }
      };

      rafId = requestAnimationFrame(animate);
    };

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      timeouts.forEach((id) => clearTimeout(id));
    };
  }, [logoSrc, duration, logoScale, numSlices, onFinish]);

  const companyName = "LGSTECH";

  return (
    <div className={`preloader-wrapper ${slideOut ? "slide-out" : ""}`}>
      <canvas
        ref={canvasRef}
        className="preloader-canvas"
        width={window.innerWidth}
        height={window.innerHeight}
      />
      {!finished && showName && (
        <div className="loader-footer">
          <span className={`company-gradient ${slideOut ? "hide" : ""}`}>
            {companyName}
          </span>
        </div>
      )}
    </div>
  );
};

export default Preloader;

