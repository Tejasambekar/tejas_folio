import { motion } from 'framer-motion';
import { useCustomCursor } from '@/hooks/useCustomCursor';

export function CustomCursor() {
  const { position, isHovering, isVisible, isClicking } = useCustomCursor();

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: position.x - 6,
          y: position.y - 6,
          scale: isClicking ? 0.8 : 1
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <div className="w-3 h-3 bg-foreground rounded-full" />
      </motion.div>

      {/* Trailing cursor ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        animate={{
          x: position.x - (isHovering ? 24 : 16),
          y: position.y - (isHovering ? 24 : 16),
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.8 : 0.5
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.5 }}
      >
        <div 
          className="rounded-full border-2 border-primary"
          style={{
            width: isHovering ? 48 : 32,
            height: isHovering ? 48 : 32,
            background: isHovering ? 'hsla(217, 91%, 60%, 0.1)' : 'transparent'
          }}
        />
      </motion.div>
    </>
  );
}
