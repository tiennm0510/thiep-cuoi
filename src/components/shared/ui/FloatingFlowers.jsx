import React, { useEffect, useState } from 'react';
import './FloatingFlowers.css';

const symbols = ['🌸', '🍀', '☘️', '💕', '💞', '💖', '💗', '💘', '💝'];

function countNumberOfFlowers() {
  if (typeof window === 'undefined') return 25; // Default for SSR
  
  const width = window.innerWidth;
  if (width < 480) return 6;      // Mobile nhỏ
  if (width < 768) return 10;     // Mobile
  if (width < 1024) return 20;
  return 30;
}

function createFlower(id) {
  const emoji = symbols[Math.floor(Math.random() * symbols.length)];
  let type = 'flower';
  if (['🍀', '☘️'].includes(emoji)) type = 'leaf';
  else if (['💕', '💞', '💖', '💗', '💘', '💝', '❤️'].includes(emoji)) type = 'heart';

  const animations = ['naturalFall', 'naturalFallWithSway', 'zigzagFall', 'heartFloat'];
  const animationType = animations[Math.floor(Math.random() * animations.length)];

  return {
    id,
    emoji,
    type,
    size: 0.25 + Math.random() * 0.65,
    leftPosition: Math.random() * 100,
    animationDelay: Math.random() * 1,
    animationDuration: 6 + Math.random() * 12,
    animationType,
  };
}

const FloatingFlowers = () => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {  
    const numberOfFlowers = countNumberOfFlowers();
    setFlowers(Array.from({ length: numberOfFlowers }, (_, i) => createFlower(i)));
  }, []);

  const handleAnimationEnd = (id) => {
    // Khi hoa rơi xong, tạo lại một bông mới ở vị trí khác
    setFlowers((prev) =>
      prev.map((flower) => (flower.id === id ? createFlower(id) : flower))
    );
  };

  return (
    <div className="global-floating-flowers">
      {flowers.map((flower) => (
        <div
          key={flower.id}
          className={`global-flower ${flower.type}`}
          style={{
            fontSize: `${flower.size * 2}rem`,
            opacity: 0.6 + (flower.size * 0.3),
            left: `${flower.leftPosition}%`,
            animationDelay: `${flower.animationDelay}s`,
            animationDuration: `${flower.animationDuration}s`,
            animationName: flower.animationType,
            animationIterationCount: 1,
          }}
          onAnimationEnd={() => handleAnimationEnd(flower.id)}
        >
          {flower.emoji}
        </div>
      ))}
    </div>
  );
};

export default FloatingFlowers;