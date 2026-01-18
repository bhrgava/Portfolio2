
import React from 'react';

// Basic Icons (Unchanged for consistency)
export const ServerIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" className={className}>
    <rect width="20" height="8" x="2" y="2" rx="0" ry="0" />
    <rect width="20" height="8" x="2" y="14" rx="0" ry="0" />
    <line x1="6" x2="6.01" y1="6" y2="6" />
    <line x1="6" x2="6.01" y1="18" y2="18" />
  </svg>
);

export const DatabaseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" className={className}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s 9-1.34 9-3V5" />
  </svg>
);

export const UsersIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" className={className}>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

export const AlertIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" className={className}>
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <path d="M12 9v4" />
    <path d="M12 17h.01" />
  </svg>
);

export const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="m9 11 3 3L22 4" />
  </svg>
);

export const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" className={className}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const ChartBarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" className={className}>
    <line x1="12" x2="12" y1="20" y2="10" />
    <line x1="18" x2="18" y1="20" y2="4" />
    <line x1="6" x2="6" y1="20" y2="16" />
  </svg>
);

export const XCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="m15 9-6 6" />
    <path d="m9 9 6 6" />
  </svg>
);

export const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" className={className}>
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

export const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" className={className}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export const BriefcaseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" className={className}>
    <rect width="20" height="14" x="2" y="7" rx="0" ry="0" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

export const BookOpenIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" className={className}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

export const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" className={className}>
    <rect width="20" height="16" x="2" y="4" rx="0" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export const LinkedinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const LinkIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" className={className}>
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

export const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export const TargetIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" className={className}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

export const RobotIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" className={className}>
    <rect x="3" y="11" width="18" height="10" rx="0" />
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v4" />
    <line x1="8" y1="16" x2="8" y2="16" />
    <line x1="16" y1="16" x2="16" y2="16" />
  </svg>
);

export const ChatIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" className={className}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

export const LayoutIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" className={className}>
    <rect width="18" height="18" x="3" y="3" rx="0" ry="0" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="9" y1="21" x2="9" y2="9" />
  </svg>
);

export const ClockIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" className={className}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" className={className}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export const CodeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

// Unified Illustration Motif: Starburst / Insight Spark
const Starburst: React.FC<{ x: number; y: number; size: number; color: string }> = ({ x, y, size, color }) => (
  <g transform={`translate(${x}, ${y})`}>
    {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
      <line 
        key={deg} 
        x1="0" y1="0" 
        x2={size} y2="0" 
        stroke={color} 
        strokeWidth="1.5" 
        transform={`rotate(${deg})`} 
      />
    ))}
  </g>
);

// Timeline Illustrations - Unified Language: Thick outlines, thin details, symmetrical compositions
export const IllusLitReview: React.FC = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <rect x="25" y="25" width="50" height="60" fill="none" stroke="#0f172a" strokeWidth="2.5" />
    <line x1="35" y1="40" x2="65" y2="40" stroke="#0f172a" strokeWidth="1" />
    <line x1="35" y1="50" x2="65" y2="50" stroke="#0f172a" strokeWidth="1" />
    <line x1="35" y1="60" x2="55" y2="60" stroke="#0f172a" strokeWidth="1" />
    {/* Fix: Pass numeric values to Starburst props instead of strings */}
    <Starburst x={75} y={25} size={10} color="#0891b2" />
  </svg>
);

export const IllusStakeholders: React.FC = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <circle cx="50" cy="50" r="30" fill="none" stroke="#0f172a" strokeWidth="2.5" />
    <circle cx="50" cy="50" r="8" fill="#3b82f6" />
    {[0, 60, 120, 180, 240, 300].map(deg => (
      <g key={deg} transform={`rotate(${deg}, 50, 50)`}>
        <line x1="50" y1="10" x2="50" y2="20" stroke="#0f172a" strokeWidth="1" />
        <circle cx="50" cy="8" r="4" fill="none" stroke="#0f172a" strokeWidth="1.5" />
      </g>
    ))}
    {/* Fix: Pass numeric values to Starburst props instead of strings */}
    <Starburst x={50} y={50} size={6} color="white" />
  </svg>
);

export const IllusPrototypes: React.FC = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <rect x="10" y="35" width="25" height="40" fill="none" stroke="#94a3b8" strokeWidth="1" />
    <rect x="65" y="35" width="25" height="40" fill="none" stroke="#94a3b8" strokeWidth="1" />
    <rect x="35" y="30" width="30" height="50" fill="none" stroke="#0f172a" strokeWidth="2.5" />
    {/* Fix: Pass numeric values to Starburst props instead of strings */}
    <Starburst x={50} y={55} size={12} color="#0891b2" />
  </svg>
);

export const IllusAction: React.FC = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <path d="M15 50 L45 50" stroke="#0f172a" strokeWidth="1" strokeDasharray="4" />
    <rect x="50" y="30" width="35" height="40" fill="#ec4899" fillOpacity="0.1" stroke="#ec4899" strokeWidth="2.5" />
    {/* Fix: Pass numeric values to Starburst props instead of strings */}
    <Starburst x={50} y={50} size={15} color="#ec4899" />
    <path d="M70 45 L70 55 M65 50 L75 50" stroke="white" strokeWidth="2" />
  </svg>
);

export const IllusEvaluative: React.FC = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <rect x="20" y="25" width="60" height="50" rx="4" fill="none" stroke="#0f172a" strokeWidth="2.5" />
    <path d="M35 50 L45 60 L65 40" stroke="#0891b2" strokeWidth="4" fill="none" strokeLinecap="round" />
    <line x1="25" y1="35" x2="75" y2="35" stroke="#94a3b8" strokeWidth="0.5" />
    {/* Fix: Pass numeric values to Starburst props instead of strings */}
    <Starburst x={75} y={30} size={8} color="#0891b2" />
  </svg>
);

export const IllusSurvey: React.FC = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <path d="M20 30 H80 V70 H35 L20 85 Z" fill="none" stroke="#0f172a" strokeWidth="2.5" />
    {/* Fix: Pass numeric values to Starburst props instead of strings */}
    <Starburst x={40} y={50} size={4} color="#3b82f6" />
    <Starburst x={50} y={50} size={4} color="#3b82f6" />
    <Starburst x={60} y={50} size={4} color="#3b82f6" />
  </svg>
);

export const IllusRelease: React.FC = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <circle cx="50" cy="50" r="10" fill="#ec4899" />
    {/* Fix: Pass numeric values to Starburst props instead of strings */}
    <Starburst x={50} y={50} size={40} color="#ec4899" />
    <circle cx="50" cy="50" r="45" fill="none" stroke="#ec4899" strokeWidth="0.5" strokeDasharray="2" />
  </svg>
);

export const IllusAnalytics: React.FC = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    {/* Explicit Left-to-Right Flow */}
    <circle cx="15" cy="40" r="3" fill="#94a3b8" />
    <circle cx="15" cy="60" r="3" fill="#94a3b8" />
    <circle cx="10" cy="50" r="4" fill="#94a3b8" />
    
    <path d="M25 50 L70 50" stroke="#0f172a" strokeWidth="2.5" markerEnd="url(#arrowhead)" />
    
    <rect x="75" y="30" width="15" height="40" fill="#0891b2" />
    <rect x="75" y="45" width="10" height="25" fill="#0891b2" fillOpacity="0.5" />
    
    {/* Fix: Pass numeric values to Starburst props instead of strings */}
    <Starburst x={50} y={50} size={12} color="#0891b2" />
    
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#0f172a" />
      </marker>
    </defs>
  </svg>
);

export const IllusHeuristic: React.FC = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <rect x="25" y="35" width="50" height="30" fill="none" stroke="#0f172a" strokeWidth="2.5" />
    <line x1="20" y1="75" x2="80" y2="75" stroke="#3b82f6" strokeWidth="2" />
    {[25, 35, 45, 55, 65, 75].map(x => (
      <line key={x} x1={x} y1="75" x2={x} y2="68" stroke="#3b82f6" strokeWidth="1" />
    ))}
    {/* Fix: Pass numeric values to Starburst props instead of strings */}
    <Starburst x={50} y={50} size={10} color="#3b82f6" />
  </svg>
);

export const IllusProduction: React.FC = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <rect x="20" y="30" width="60" height="45" fill="none" stroke="#0f172a" strokeWidth="2.5" />
    <circle cx="30" cy="40" r="3" fill="#0891b2" />
    <circle cx="30" cy="52" r="3" fill="#0891b2" />
    <circle cx="30" cy="64" r="3" fill="#0891b2" />
    <rect x="40" y="38" width="30" height="4" fill="#94a3b8" opacity="0.3" />
    <rect x="40" y="50" width="20" height="4" fill="#94a3b8" opacity="0.3" />
    <rect x="40" y="62" width="25" height="4" fill="#94a3b8" opacity="0.3" />
    {/* Fix: Pass numeric values to Starburst props instead of strings */}
    <Starburst x={80} y={30} size={8} color="#0891b2" />
  </svg>
);

export const IllusSocialising: React.FC = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <circle cx="50" cy="50" r="12" fill="#ec4899" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
      <g key={deg} transform={`rotate(${deg}, 50, 50)`}>
        <line x1="50" y1="50" x2="50" y2="15" stroke="#0f172a" strokeWidth="1" strokeDasharray="3" />
        <circle cx="50" cy="15" r="4" fill="none" stroke="#0f172a" strokeWidth="1.5" />
      </g>
    ))}
    {/* Fix: Pass numeric values to Starburst props instead of strings */}
    <Starburst x={50} y={50} size={6} color="white" />
  </svg>
);
