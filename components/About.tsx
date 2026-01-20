
import React, { useState, useEffect } from 'react';
import { MailIcon, LinkedinIcon, LinkIcon, ArrowRightIcon, BriefcaseIcon, RobotIcon } from './Icons';

interface AboutProps {
  onNavigate: (page: string) => void;
}

const ParallaxBackground: React.FC = () => {
    const [offset, setOffset] = useState(0);

    const handleScroll = () => {
        setOffset(window.pageYOffset);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
            {/* Shape 1 */}
            <div 
                className="absolute top-[5%] left-[-25%] w-1/2 h-1/2 bg-gradient-to-br from-blue-400 to-sky-300 rounded-full opacity-40 mix-blend-multiply"
                style={{ transform: `translateY(${offset * 0.3}px)` }}
            />
            {/* Shape 2 */}
            <div 
                className="absolute bottom-[-15%] right-[-25%] w-1/2 h-1/2 bg-gradient-to-tl from-pink-400 to-rose-300 rounded-full opacity-40 mix-blend-multiply"
                style={{ transform: `translateY(${offset * -0.2}px)` }}
            />
            {/* Shape 3 */}
            <div 
                className="absolute top-[60%] left-[20%] w-1/3 h-1/3 bg-gradient-to-tr from-cyan-200 to-blue-300 opacity-30 mix-blend-multiply"
                style={{ transform: `translateY(${offset * 0.1}px) rotate(30deg)` }}
            />
        </div>
    );
};


const ExperienceItem: React.FC<{
  role: string;
  company: string;
  period: string;
  description: string;
  tags?: string[];
}> = ({ role, company, period, description, tags }) => (
    <div className="relative pl-10 pb-12 group">
        {/* Timeline Dot & Line */}
        <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-slate-200 border-2 border-white group-hover:bg-blue-600 transition-colors" />
        <div className="absolute left-[5px] top-1.5 bottom-0 w-px bg-slate-200" />
        
        <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1 mb-1">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">{role}</h3>
            <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">{period}</span>
        </div>
        <div className={`font-bold text-xs uppercase tracking-widest mb-4 text-blue-600`}>{company}</div>
        <p className="text-slate-600 leading-relaxed max-w-3xl font-light mb-6">{description}</p>
        
        {tags && (
            <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
                <span key={tag} className="text-[10px] font-mono text-blue-700 bg-blue-50 border border-blue-200 uppercase px-2 py-1 rounded-sm">
                {tag}
                </span>
            ))}
            </div>
        )}
    </div>
);

const CaseStudyCard: React.FC<{
    onClick: () => void;
    caseNumber: string;
    title: string;
    description: string;
    client: string;
}> = ({ onClick, caseNumber, title, description, client }) => (
    <button 
        onClick={onClick} 
        className="group text-left bg-white rounded-lg transition-all duration-200 relative p-8 shadow-[4px_4px_0px_0px_rgba(236,72,153,1),8px_8px_0px_0px_rgba(37,99,235,1)] hover:shadow-[2px_2px_0px_0px_rgba(236,72,153,1),4px_4px_0px_0px_rgba(37,99,235,1)] hover:-translate-x-1 hover:-translate-y-1 border-2 border-slate-900 h-full flex flex-col justify-between"
    >
        <div>
            <div className="flex justify-between items-center mb-2">
                <span className={`text-[10px] font-mono text-blue-600 uppercase tracking-widest block font-bold`}>Case Study {caseNumber}</span>
                <span className="text-[10px] font-mono bg-slate-100 text-slate-500 px-2 py-1 rounded-sm">{client}</span>
            </div>
            <span className="text-2xl font-bold text-slate-900">{title}</span>
            <p className="text-slate-500 mt-3 font-light leading-snug">{description}</p>
        </div>
        <div className="flex items-center gap-2 mt-6 text-blue-600 text-xs font-mono uppercase tracking-widest font-bold">
            <span>View Case</span>
            <ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </div>
    </button>
);

const LabsCard: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <button 
        onClick={onClick} 
        className="group text-left bg-white rounded-lg transition-all duration-200 relative p-8 shadow-[4px_4px_0px_0px_rgba(236,72,153,1),8px_8px_0px_0px_rgba(147,51,234,1)] hover:shadow-[2px_2px_0px_0px_rgba(236,72,153,1),4px_4px_0px_0px_rgba(147,51,234,1)] hover:-translate-x-1 hover:-translate-y-1 border-2 border-slate-900 h-full flex flex-col justify-between overflow-hidden"
    >
        <div className="absolute -top-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <RobotIcon className="w-32 h-32 text-slate-900" />
        </div>
        <div className="relative z-10">
            <div className="flex justify-between items-center mb-2">
                <span className={`text-[10px] font-mono text-purple-600 uppercase tracking-widest block font-bold`}>Experimental Lab</span>
                <span className="text-[10px] font-mono bg-purple-50 text-purple-600 px-2 py-1 rounded-sm border border-purple-100">R&D</span>
            </div>
            <span className="text-2xl font-bold text-slate-900">AI Labs</span>
            <p className="text-slate-500 mt-3 font-light leading-snug">A collection of experiments using AI at various stages of a research study—from literature reviews to automated reporting.</p>
        </div>
        <div className="flex items-center gap-2 mt-6 text-purple-600 text-xs font-mono uppercase tracking-widest font-bold relative z-10">
            <span>Enter Lab</span>
            <ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </div>
    </button>
);

const StarburstSmall: React.FC<{ color: string }> = ({ color }) => (
  <g transform="translate(50, 50)">
    {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
      <line 
        key={deg} 
        x1="0" y1="0" 
        x2="10" y2="0" 
        stroke={color} 
        strokeWidth="2.5" 
        transform={`rotate(${deg})`} 
      />
    ))}
  </g>
);

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <>
      <ParallaxBackground />
      <div className="pt-24 pb-20 px-6 relative z-10">
        
        {/* Header / Title Card */}
        <section className="min-h-[80vh] flex flex-col items-center justify-center text-center py-20">
          <div className="relative z-10 w-full max-w-5xl">
              {/* Header Image - Shadow removed */}
              <div className="mb-12 flex justify-center">
                <img 
                  src="/images/header.png" 
                  alt="Portfolio Header Visual" 
                  className="w-full h-auto max-w-md object-contain border border-slate-100"
                />
              </div>

              <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-blue-600 leading-none">
                  Arpit Bhargava
              </h1>
              <p className="mt-6 text-2xl md:text-3xl font-light text-slate-600 tracking-tight max-w-3xl mx-auto">
                  A UX Researcher specializing in the translation of complex technical systems into human-centered product strategies.
              </p>
              <p className="mt-8 text-lg font-light text-slate-500 max-w-3xl mx-auto leading-relaxed">
                  Experienced UX Researcher with 9+ years in high-impact roles, most recently 4 years at Google Cloud (GCP). Specialized in leading foundational and evaluative research to drive product strategy and improve user experiences in enterprise and consumer settings. Proven ability to deliver actionable insights that led to major feature launches.
              </p>
              <div className="mt-12 flex items-center justify-center gap-2">
                  <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <p className="font-mono text-xs text-slate-500 uppercase tracking-widest">Available for new opportunities</p>
              </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto grid grid-cols-1 gap-32">
          {/* Summary */}
          <section>
              <h2 className="text-sm font-bold font-mono uppercase text-slate-400 mb-12 tracking-widest text-center">Selected Works</h2>
              
              <div className="grid grid-cols-1 gap-16">
                  {/* Featured Case Study */}
                  <button 
                      onClick={() => onNavigate('ai')}
                      className="group text-left bg-white rounded-lg transition-all duration-200 relative p-12 shadow-[4px_4px_0px_0px_rgba(236,72,153,1),8px_8px_0px_0px_rgba(37,99,235,1)] hover:shadow-[2px_2px_0px_0px_rgba(236,72,153,1),4px_4px_0px_0px_rgba(37,99,235,1)] hover:-translate-x-1 hover:-translate-y-1 border-2 border-slate-900 block w-full"
                  >
                      <div className="grid md:grid-cols-2 gap-12 items-center">
                          <div>
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-[10px] font-mono text-blue-600 uppercase tracking-widest block font-bold">Featured Research Programme</span>
                                <span className="text-[10px] font-mono bg-slate-100 text-slate-500 px-2 py-1 rounded-sm">Google Cloud</span>
                              </div>
                              <span className="text-4xl font-bold text-slate-900">AI Troubleshooting</span>
                              <p className="text-slate-500 mt-4 font-light leading-relaxed">A comprehensive, multi-phase research programme defining the future of AI interaction in high-stakes cloud environments. This initiative synthesized multiple foundational studies, iterative prototyping phases, and production-level audits to establish the definitive interaction models and trust principles for Gemini-assisted troubleshooting.</p>
                              <div className="flex items-center gap-2 mt-8 text-blue-600 text-xs font-mono uppercase tracking-widest font-bold">
                                  <span>Explore Programme</span>
                                  <ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                              </div>
                          </div>
                          <div className="hidden md:flex items-center justify-center">
                               <div className="w-full max-w-xs aspect-square border-2 border-slate-900 bg-white relative flex flex-col p-8 overflow-hidden shadow-[4px_4px_0px_0px_rgba(236,72,153,1),8px_8px_0px_0px_rgba(8,145,178,1)]">
                                  {/* Coherent Timeline Preview */}
                                  <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-slate-200" />
                                  
                                  <div className="relative z-10 flex flex-col gap-10">
                                      {/* Block 1: Lit Review Style */}
                                      <div className="flex gap-4 items-start">
                                          <div className="w-2.5 h-2.5 rounded-full border border-slate-900 bg-white mt-3 -ml-[4.5px] z-20" />
                                          <div className="w-14 h-14 border-2 border-slate-900 bg-slate-50 flex-shrink-0 flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(15,23,42,0.1)]">
                                              <svg viewBox="0 0 100 100" className="w-8 h-8">
                                                <rect x="25" y="25" width="50" height="50" fill="none" stroke="#0f172a" strokeWidth="4" />
                                                <line x1="35" y1="40" x2="65" y2="40" stroke="#0f172a" strokeWidth="2" />
                                                <line x1="35" y1="50" x2="65" y2="50" stroke="#0f172a" strokeWidth="2" />
                                              </svg>
                                          </div>
                                          <div className="flex-1 space-y-2.5 pt-4">
                                              <div className="w-2/3 h-2 bg-slate-900 rounded-sm" />
                                              <div className="w-full h-0.5 bg-slate-100" />
                                          </div>
                                      </div>

                                      {/* Block 2: Concept Test Style (Highlighted) */}
                                      <div className="flex gap-4 items-start">
                                          <div className="w-2.5 h-2.5 rounded-full border-2 border-slate-900 bg-cyan-500 mt-3 -ml-[4.5px] z-20 shadow-[0px_0px_10px_rgba(8,145,178,0.5)]" />
                                          <div className="w-14 h-14 border-2 border-slate-900 bg-white flex-shrink-0 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(8,145,178,1)]">
                                              <svg viewBox="0 0 100 100" className="w-10 h-10">
                                                <rect x="20" y="30" width="60" height="40" fill="none" stroke="#0f172a" strokeWidth="4" />
                                                <StarburstSmall color="#0891b2" />
                                              </svg>
                                          </div>
                                          <div className="flex-1 space-y-2.5 pt-4">
                                              <div className="w-3/4 h-2 bg-cyan-600 rounded-sm" />
                                              <div className="w-full h-0.5 bg-slate-100" />
                                          </div>
                                      </div>

                                      {/* Block 3: Evaluative Style */}
                                      <div className="flex gap-4 items-start">
                                          <div className="w-2.5 h-2.5 rounded-full border border-slate-900 bg-white mt-3 -ml-[4.5px] z-20" />
                                          <div className="w-14 h-14 border-2 border-slate-900 bg-slate-50 flex-shrink-0 flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(15,23,42,0.1)]">
                                              <svg viewBox="0 0 100 100" className="w-8 h-8">
                                                <circle cx="50" cy="50" r="25" fill="none" stroke="#0f172a" strokeWidth="4" />
                                                <path d="M35 50 L45 60 L65 40" stroke="#0f172a" strokeWidth="4" fill="none" strokeLinecap="round" />
                                              </svg>
                                          </div>
                                          <div className="flex-1 space-y-2.5 pt-4">
                                              <div className="w-1/2 h-2 bg-slate-900 rounded-sm" />
                                              <div className="w-full h-0.5 bg-slate-100" />
                                          </div>
                                      </div>
                                  </div>

                                  {/* Grid Texture Overlay */}
                                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:32px_32px]" />
                              </div>
                          </div>
                      </div>
                  </button>

                  {/* Other Case Studies */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      <CaseStudyCard
                          onClick={() => onNavigate('spanner')}
                          caseNumber="01"
                          title="Spanner Hotspots"
                          description="Revealing the invisible mechanics of database latency."
                          client="Google Cloud"
                      />
                      <CaseStudyCard
                          onClick={() => onNavigate('recommendations')}
                          caseNumber="03"
                          title="Dead Clicks"
                          description="Diagnosing the failure of high-value proactive features."
                          client="Google Cloud"
                      />
                      <CaseStudyCard
                          onClick={() => onNavigate('tier1')}
                          caseNumber="04"
                          title="Advanced Observability"
                          description="Reframing the customer definition from 'Who' to 'What'."
                          client="Google Cloud"
                      />
                      <LabsCard onClick={() => onNavigate('labs')} />
                  </div>
              </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-sm font-bold font-mono uppercase text-slate-400 mb-12 tracking-widest text-center">Operational History</h2>
            <div>
              <ExperienceItem 
                role="UX Research Lead"
                company="Google Cloud"
                period="Mar 2022 - Present"
                description="Lead UXR for Cloud Databases Observability. Driving strategy for AI-powered troubleshooting and critical workload management."
                tags={['Enterprise', 'Cloud', 'AI', 'Observability']}
              />
              <ExperienceItem 
                role="UX Researcher"
                company="Google Geo (Contract)"
                period="May 2019 - May 2021"
                description="Evaluative studies for Google Maps & Search. Created continuous feedback loops guiding leadership prioritization."
                tags={['Maps', 'Search', 'Consumer']}
              />
              <ExperienceItem 
                role="Principal Researcher"
                company="Curiosity Research"
                period="July 2018 - May 2019"
                description="Founded a self-funded research firm focusing on experimental projects for Indian SMEs."
                tags={['Entrepreneurship', 'Qualitative']}
              />
            </div>
            
            <div className="mt-12 text-center">
               <a 
                 href="https://docs.google.com/document/d/1kHvC8FlJpJPiUcuIue-TDt2zG2Mfnsw8z3eFXf4cwp8/edit?tab=t.0"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors group"
               >
                 <span className="border-b border-slate-300 group-hover:border-slate-900">View Full Resume</span>
                 <LinkIcon className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
               </a>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-white border-2 border-slate-900 rounded-lg p-12 text-center shadow-[4px_4px_0px_0px_rgba(236,72,153,1),8px_8px_0px_0px_rgba(37,99,235,1)]">
              <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter">Let's Connect</h2>
              <p className="text-slate-600 font-light max-w-xl mx-auto mb-10">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <a href="mailto:arpit_bhargava@outlook.com" className="group flex items-center justify-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/10">
                      <MailIcon className="w-5 h-5" />
                      <span>Email Me</span>
                  </a>
                  <a href="https://linkedin.com/in/bhargavaa" target="_blank" rel="noreferrer" className="group flex items-center justify-center gap-3 px-6 py-3 bg-white text-slate-700 rounded-lg font-bold border border-slate-300 hover:bg-slate-50 hover:border-slate-400 transition-colors">
                      <LinkedinIcon className="w-5 h-5" />
                      <span>LinkedIn</span>
                  </a>
              </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
