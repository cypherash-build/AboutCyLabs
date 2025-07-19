// @ts-nocheck
"use client";

import { useEffect, useRef } from 'react';
import { Renderer, Camera, Transform, Program, Mesh, Plane, Vec2, Color } from 'ogl';

const RippleGrid = ({
  gridColor = "#ffffff",
  rippleIntensity = 0.1,
  gridSize = 20,
  gridThickness = 1,
  mouseInteraction = true,
  mouseInteractionRadius = 1.0,
  opacity = 1.0,
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return;

    const renderer = new Renderer({ dpr: 2, alpha: true });
    const gl = renderer.gl;
    containerRef.current.appendChild(gl.canvas);

    const camera = new Camera({ fov: 15 });
    camera.position.z = 15;

    function resize() {
      if (!containerRef.current) return;
      renderer.setSize(containerRef.current.offsetWidth, containerRef.current.offsetHeight);
      camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
    }
    window.addEventListener('resize', resize, false);
    resize();

    const scene = new Transform();

    const plane = new Plane(gl, {
      width: gridSize * 2,
      height: gridSize * 2,
      widthSegments: 1,
      heightSegments: 1,
    });
    
    const mouse = new Vec2(-1);
    const velocity = new Vec2();

    function updateMouse(e) {
      if (e.changedTouches && e.changedTouches.length) {
        e.x = e.changedTouches[0].pageX;
        e.y = e.changedTouches[0].pageY;
      }
      if (e.x === undefined) {
        e.x = e.pageX;
        e.y = e.pageY;
      }

      mouse.set(
        (e.x / gl.canvas.width) * 2 - 1,
        (e.y / gl.canvas.height) * -2 + 1
      );
    }

    if (mouseInteraction && 'ontouchstart' in window) {
      window.addEventListener('touchstart', updateMouse, false);
      window.addEventListener('touchmove', updateMouse, false);
    } else if (mouseInteraction) {
      window.addEventListener('mousemove', updateMouse, false);
    }


    const vertex = /* glsl */ `
            attribute vec2 uv;
            attribute vec2 position;
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = vec4(position, 0, 1);
            }
        `;

    const fragment = /* glsl */ `
            precision highp float;
            uniform float uTime;
            uniform vec3 uColor;
            uniform vec2 uMouse;
            uniform float uRippleIntensity;
            uniform float uGridSize;
            uniform float uGridThickness;
            uniform float uOpacity;
            varying vec2 vUv;

            void main() {
                vec2 res = vec2(1.0);
                vec2 uv = vUv;
                
                // Add time to UV for animation
                uv.y += uTime * 0.1;

                // Create grid
                vec2 grid = abs(fract(uv * uGridSize - 0.5) - 0.5) / fwidth(uv * uGridSize);
                float line = min(grid.x, grid.y);
                
                // Ripple effect
                float dist = distance(uv, uMouse);
                float ripple = 1.0 - smoothstep(0.0, uRippleIntensity * 2.0 + 0.1, dist);
                line -= ripple * uRippleIntensity;

                // Final color
                vec3 color = uColor;
                float alpha = 1.0 - min(1.0, line);
                
                gl_FragColor.rgb = color;
                gl_FragColor.a = alpha * uOpacity;
            }
        `;

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new Color(gridColor) },
        uMouse: { value: mouse },
        uRippleIntensity: { value: rippleIntensity },
        uGridSize: { value: gridSize },
        uGridThickness: { value: gridThickness }, // This is used conceptually in frag shader
        uMouseInteractionRadius: { value: mouseInteractionRadius },
        uOpacity: { value: opacity }
      },
      transparent: true,
    });
    
    const mesh = new Mesh(gl, { geometry: plane, program });
    mesh.setParent(scene);

    let animationFrameId;

    function update(t) {
      animationFrameId = requestAnimationFrame(update);

      program.uniforms.uTime.value = t * 0.0002;
      renderer.render({ scene, camera });
    }
    
    animationFrameId = requestAnimationFrame(update);

    const currentContainer = containerRef.current;

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      if (mouseInteraction && 'ontouchstart' in window) {
        window.removeEventListener('touchstart', updateMouse);
        window.removeEventListener('touchmove', updateMouse);
      } else if (mouseInteraction) {
        window.removeEventListener('mousemove', updateMouse);
      }
      if (currentContainer && gl.canvas) {
        try {
          currentContainer.removeChild(gl.canvas);
        } catch (e) {
          // Ignore error if canvas is already removed
        }
      }
    };
  }, [gridColor, rippleIntensity, gridSize, gridThickness, mouseInteraction, mouseInteractionRadius, opacity]);

  return <div ref={containerRef} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: -1 }} />;
};

export default RippleGrid;
