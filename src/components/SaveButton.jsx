import React from 'react';
import { Heart } from 'lucide-react';
import { useSavedCourses } from '@/context/SavedCoursesContext';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const SaveButton = ({ courseId, className, showText = false, onSave }) => {
  const { isSaved, toggleSave } = useSavedCourses();
  const saved = isSaved(courseId);

  const handleClick = (e) => {
    e.preventDefault(); // Prevent link navigation if inside a Link
    e.stopPropagation();
    toggleSave(courseId);
    if (onSave) onSave(courseId);
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "group flex items-center justify-center transition-all duration-300 rounded-full",
        showText ? "px-4 py-2" : "p-2",
        className
      )}
      aria-label={saved ? "Remove from saved" : "Save service"}
    >
      <motion.div
        whileTap={{ scale: 0.8 }}
        animate={{ scale: saved ? [1, 1.2, 1] : 1 }}
        transition={{ duration: 0.3 }}
      >
        <Heart
          className={cn(
            "w-5 h-5 transition-colors duration-300",
            saved
              ? "fill-pink-500 text-pink-500"
              : "text-white group-hover:text-pink-400"
          )}
        />
      </motion.div>
      {showText && (
        <span className={cn(
          "ml-2 font-medium transition-colors duration-300",
          saved ? "text-pink-500" : "text-white group-hover:text-pink-400"
        )}>
          {saved ? "Saved" : "Save Service"}
        </span>
      )}
    </button>
  );
};

export default SaveButton;