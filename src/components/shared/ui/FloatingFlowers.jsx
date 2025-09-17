import React, { useEffect, useState } from 'react';
import './FloatingFlowers.css';

const FloatingFlowers = () => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    // Simple mix of cherry blossoms and hearts
    const symbols = ['🌸', '🌸', '🌸', '🌸', '🌸', '🌸', '💕', '💕'];
    const newFlowers = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      emoji: symbols[Math.floor(Math.random() * symbols.length)], // Random emoji selection
      size: 0.25 + Math.random() * 0.6, // Random size between 0.25 and 0.85 (half of original)
      type: symbols[i % symbols.length] === '🌸' ? 'flower' : 'heart',
      // Random horizontal position across full screen width
      leftPosition: Math.random() * 100, // 0% to 100%
      // Random animation delay
      animationDelay: Math.random() * 10, // 0 to 10 seconds
      // Random animation duration
      animationDuration: 8 + Math.random() * 12, // 8 to 20 seconds
      // Random animation type
      animationType: Math.random() < 0.5 ? 'naturalFall' : 'naturalFallWithSway',
    }));
    setFlowers(newFlowers);
  }, []);


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
            animationName: flower.type === 'heart' ? 'heartFloat' : flower.animationType,
          }}
        >
          {flower.emoji}
        </div>
      ))}
    </div>
  );
};

export default FloatingFlowers;