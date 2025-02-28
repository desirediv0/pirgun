import React, { useEffect, useRef } from 'react';

const AnimatedDots = ({ dotCount = 50, dotColor = '#87BD2B', speed = 1 }) => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const dots = [];

        // Set canvas to match container size with proper pixel ratio
        const handleResize = () => {
            const container = canvas.parentElement;
            const rect = container.getBoundingClientRect();

            // Get device pixel ratio for sharp rendering
            const dpr = window.devicePixelRatio || 1;

            // Set display size (CSS pixels)
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${rect.height}px`;

            // Set actual size in memory (scaled to device)
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;

            // Scale context to match
            ctx.scale(dpr, dpr);

            // Set dimensions for calculations
            canvas.dispWidth = rect.width;
            canvas.dispHeight = rect.height;

            initializeDots();
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        // Initialize dots with random positions and speeds
        function initializeDots() {
            dots.length = 0;
            for (let i = 0; i < dotCount; i++) {
                dots.push({
                    x: Math.random() * canvas.dispWidth,
                    y: Math.random() * canvas.dispHeight,
                    radius: Math.random() * 4 + 2, // Slightly larger dots
                    speedX: (Math.random() - 0.5) * speed,
                    speedY: (Math.random() - 0.5) * speed,
                    opacity: Math.random() * 0.7 + 0.3 // More visible opacity
                });
            }
        }

        // Animation loop with proper scaling
        function animate() {
            ctx.clearRect(0, 0, canvas.dispWidth, canvas.dispHeight);

            // Draw and update each dot
            dots.forEach(dot => {
                ctx.beginPath();
                ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
                ctx.fillStyle = dotColor + Math.floor(dot.opacity * 255).toString(16).padStart(2, '0');
                ctx.fill();

                // Update position
                dot.x += dot.speedX;
                dot.y += dot.speedY;

                // Bounce off edges
                if (dot.x < 0 || dot.x > canvas.dispWidth) dot.speedX *= -1;
                if (dot.y < 0 || dot.y > canvas.dispHeight) dot.speedY *= -1;
            });

            requestAnimationFrame(animate);
        }

        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [dotCount, dotColor, speed]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 10,
                pointerEvents: 'none'
            }}
        />
    );
};

export default AnimatedDots;