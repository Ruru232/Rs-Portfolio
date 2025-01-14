'use client';
import { usePathname } from 'next/navigation';
import CustomCursor from './components/custom-cursor';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="">
      <CustomCursor />
      <AnimatePresence>
        <div key={pathname}>
          <Navbar />
          <motion.div
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 1, duration: 0.4, ease: 'easeInOut' },
            }}
            className="h-screen w-screen fixed bg-gradient-to-r from-customBlack to-gray-800 top-0 pointer-events-none"
          ></motion.div>
          {children}
        </div>
      </AnimatePresence>
    </div>
  );
}
