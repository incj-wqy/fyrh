import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface SectionProps {
  title: string;
  moreLink?: string;
  children: React.ReactNode;
}

export default function Section({ title, moreLink, children }: SectionProps) {
  return (
    <motion.div 
      className="section bg-white rounded-[12px] p-4 mb-5 shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="section-header flex justify-between items-center mb-4 pb-3 border-b-[2px] border-[#f0e6d9]">
        <div className="section-title text-lg font-bold text-[#d03b3b]">{title}</div>
        {moreLink && (
          <Link to={moreLink} className="more text-[#a52a2a] text-sm flex items-center hover:text-[#d03b3b] transition-colors duration-300">
            更多 <i className="fas fa-chevron-right ml-1 text-xs"></i>
          </Link>
        )}
      </div>
      {children}
    </motion.div>
  );
}