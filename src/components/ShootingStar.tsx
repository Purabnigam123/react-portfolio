import { useEffect, useState } from 'react';

interface StarConfig {
  id: number;
  animation: string;
  delay: number;
  duration: number;
  top: number;
}

export const ShootingStar = () => {
  const [stars, setStars] = useState<StarConfig[]>([]);

  useEffect(() => {
    const starConfigs: StarConfig[] = [
      { id: 1, animation: 'shooting-star', delay: 0, duration: 10, top: 0 },
      { id: 2, animation: 'shooting-star-2', delay: 2, duration: 10, top: 15 },
      
    ];

    setStars(starConfigs);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute"
          style={{
            top: `${star.top}%`,
            left: '-100px',
            width: '75px',
            height: '2px',
            animation: `${star.animation} ${star.duration}s linear infinite`,
            animationDelay: `${star.delay}s`,
          }}
        >
          {/* Bright star core with gradient */}
          <div 
            className="absolute w-1 h-1 rounded-full"
            style={{
              right: '0',
              top: '-6px',
              background: 'linear-gradient(135deg, #ffffff, #ffffff, #ffffff)',
              boxShadow: '0 0 8px rgba(96, 165, 250, 1), 0 0 16px rgba(59, 130, 246, 0.8)',
              zIndex: 10,
            }}
          />
          
          {/* Star trail (now extending upward) */}
          <div
            style={{
              position: 'absolute',
              right: '-1px',
              top: '-80px',
              width: '4px',
              height: '80px',
              background: 'linear-gradient(to top, rgba(252, 252, 252, 0.85), rgba(114, 168, 255, 0.35), transparent)',
              filter: 'blur(1px)',
              zIndex: 5,
              borderRadius: '999px',
            }}
          />
        </div>
      ))}
    </div>
  );
};
