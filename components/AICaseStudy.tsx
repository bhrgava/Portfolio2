
import React from 'react';
import { 
    ArrowRightIcon, 
    CheckCircleIcon, 
    SearchIcon, 
    TargetIcon, 
    DatabaseIcon,
    RobotIcon,
    ModernDatabaseIcon,
    ModernTroubleshootingIcon,
    ModernAIIcon,
    IllusLitReview,
    IllusStakeholders,
    IllusPrototypes,
    IllusAction,
    IllusEvaluative,
    IllusSurvey,
    IllusRelease,
    IllusAnalytics,
    IllusHeuristic,
    IllusProduction,
    IllusSocialising,
    ChatIcon,
    BriefcaseIcon,
    BookOpenIcon,
    LayoutIcon,
    ChartBarIcon,
    AlertIcon,
    UsersIcon,
    ClockIcon
} from './Icons';

const Section: React.FC<{
    id: string;
    title?: string;
    subtitle?: string;
    children: React.ReactNode;
    className?: string;
  }> = ({ id, title, subtitle, children, className = "" }) => (
    <section id={id} className={`min-h-screen flex flex-col justify-center py-24 px-6 border-b border-slate-100 relative ${className}`}>
      <div className="max-w-5xl mx-auto w-full z-10">
        {(title || subtitle) && (
          <div className="mb-16">
             {subtitle && <span className="text-cyan-600 font-mono text-xs uppercase tracking-widest mb-3 block font-bold">{subtitle}</span>}
             {title && <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter">{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  );

const CalendarDate: React.FC<{ date: string }> = ({ date }) => {
    // Input: "Mar '24"
    const parts = date.split(' ');
    const month = parts[0].substring(0, 3).toUpperCase();
    const year = parts.length > 1 ? parts[1].replace("'", "20") : "2025";

    return (
        <div className="w-16 h-20 border-2 border-slate-900 bg-white flex flex-col items-center overflow-hidden flex-shrink-0 shadow-[4px_4px_0px_0px_rgba(8,145,178,1)]">
            <div className="w-full bg-cyan-600 py-1 text-center border-b-2 border-slate-900">
                <span className="text-[10px] font-mono font-black text-white uppercase tracking-widest">
                    {year}
                </span>
            </div>
            <div className="flex-1 flex items-center justify-center">
                <span className="text-xl font-black text-slate-900 tracking-tighter">
                    {month}
                </span>
            </div>
        </div>
    );
};

const ProgrammeSummaryCard: React.FC = () => {
    const milestones = [
        { 
            phase: "FOUNDATION", 
            items: [
                "Literature reviews of past research", 
                "Stakeholder Concept Definition"
            ], 
            period: "H1 2024" 
        },
        { 
            phase: "VALIDATION", 
            items: [
                "Concept testing", 
                "Sharing findings and taking action", 
                "Evaluative testing before release"
            ], 
            period: "H2 2024" 
        },
        { 
            phase: "LAUNCH", 
            items: [
                "In-product survey integration", 
                "Feature Release"
            ], 
            period: "H1 2025" 
        },
        { 
            phase: "OPTIMIZATION", 
            items: [
                "Analytics and sentiment analysis", 
                "Heuristic Adoption Audit", 
                "Production Evaluative Testing", 
                "Socialising findings and driving action"
            ], 
            period: "H2 2025" 
        },
    ];

    return (
        <div className="w-full bg-white border-2 border-slate-900 p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(8,145,178,1)] relative overflow-hidden mb-20">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <ClockIcon className="w-40 h-40 text-slate-900" />
            </div>
            
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                    <span className="w-3 h-3 bg-cyan-600 rounded-full animate-pulse" />
                    <h3 className="font-mono text-sm font-bold uppercase tracking-widest text-slate-900">Programme Architecture Summary</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {milestones.map((m, idx) => (
                        <div key={idx} className="relative">
                            {idx < milestones.length - 1 && (
                                <div className="hidden md:block absolute top-4 left-full w-full h-[1px] border-t-2 border-dashed border-slate-200 -z-10" />
                            )}
                            <div className="bg-slate-50 border border-slate-200 p-6 h-full flex flex-col group hover:border-cyan-400 transition-colors">
                                <span className="text-[10px] font-mono text-cyan-600 font-bold tracking-widest mb-1">{m.period}</span>
                                <h4 className="font-black text-lg text-slate-900 tracking-tighter mb-4">{m.phase}</h4>
                                <ul className="space-y-2 mt-auto">
                                    {m.items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-[10px] text-slate-500 font-medium leading-tight">
                                            <div className="w-1 h-1 bg-slate-300 rounded-full flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between gap-6">
                    <div className="flex gap-10">
                        <div>
                            <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1">Total Duration</span>
                            <span className="font-bold text-slate-900">20 Months</span>
                        </div>
                        <div>
                            <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1">Methodologies</span>
                            <span className="font-bold text-slate-900">11 Key Activities</span>
                        </div>
                    </div>
                    <div className="max-w-xs">
                        <p className="text-xs text-slate-500 font-light leading-relaxed">
                            A multi-phase research effort spanning foundational concept testing through post-release performance auditing.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CalendarItem: React.FC<{
    date: string;
    title: string;
    description: string;
    illustration: React.ReactNode;
    isLink?: boolean;
    onClick?: () => void;
}> = ({ date, title, description, illustration, isLink, onClick }) => (
    <div className={`relative flex gap-6 lg:gap-10 pb-20 group ${isLink ? 'cursor-pointer' : ''}`} onClick={onClick}>
        {/* Connection Line */}
        <div className="absolute left-8 top-20 bottom-0 w-[2px] bg-slate-100 group-last:bg-transparent" />
        
        {/* Date Block */}
        <div className="relative z-10">
            <CalendarDate date={date} />
        </div>

        {/* Card Content */}
        <div className="flex-1">
            <div className="bg-white border-2 border-slate-900 p-8 shadow-[4px_4px_0px_0px_rgba(8,145,178,0.1)] group-hover:shadow-[8px_8px_0px_0px_rgba(8,145,178,1)] group-hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Illustration Overlay/Side */}
                    <div className="w-32 h-32 bg-slate-50 border border-slate-200 p-4 flex-shrink-0 flex items-center justify-center relative overflow-hidden group-hover:border-cyan-200 transition-colors">
                        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0891b2_1px,transparent_1px)] [background-size:10px_10px]" />
                        <div className="relative z-10 w-full h-full">
                            {illustration}
                        </div>
                    </div>
                    
                    <div className="flex-1">
                        <h3 className={`text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-3 ${isLink ? 'group-hover:text-cyan-600' : ''}`}>
                            {title}
                            {isLink && <ArrowRightIcon className="w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300" />}
                        </h3>
                        <p className="text-slate-600 font-light leading-relaxed text-base mt-4 whitespace-pre-line">
                            {description}
                        </p>
                        {isLink && (
                            <div className="mt-6 inline-flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-600 border-b-2 border-cyan-100 group-hover:border-cyan-600 transition-all">
                                View Case Detail
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

interface AICaseStudyProps {
    onNavigate?: (page: string) => void;
}

const AICaseStudy: React.FC<AICaseStudyProps> = ({ onNavigate }) => {
    return (
        <div className="bg-white">
            <Section id="hero" className="items-start pt-40 relative overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <div className="absolute -top-1/4 -left-1/4 w-1/2 h-full bg-gradient-to-br from-cyan-400 to-pink-300 opacity-30 mix-blend-multiply rotate-12" />
                    <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-full bg-gradient-to-tl from-cyan-500 to-rose-400 opacity-20 mix-blend-multiply -rotate-12" />
                </div>

                <div className="relative z-10">
                    <div className="flex flex-wrap gap-4 mb-6">
                        <div className="inline-block px-3 py-1 border-2 border-slate-900 bg-white text-slate-900 text-xs font-mono uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(236,72,153,1),8px_8px_0px_0px_rgba(8,145,178,1)]">
                            Research Programme
                        </div>
                        <div className="inline-block px-3 py-1 border-2 border-slate-900 bg-slate-800 text-white text-xs font-mono uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(236,72,153,1),8px_8px_0px_0px_rgba(8,145,178,1)]">
                            Google Cloud
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-slate-900 mb-8 leading-[0.9]">
                        ENABLING AI<br/>TROUBLESHOOTING
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl mb-12 bg-white/80 backdrop-blur-sm p-4 border-l-4 border-cyan-500 font-light leading-relaxed">
                        In 2024, the product team behind Database Troubleshooting faced a crucial strategic decision: how to leverage AI to simplify database troubleshooting. Simplifying troubleshooting was already one of the highest value goals for this team to work on, given that most of their users were not experts at troubleshooting. I served as the research partner for every phase of the development process for this feature.
                    </p>
                </div>
            </Section>

            <Section id="context" title="The Context" subtitle="01 / Background">
                <p className="text-2xl font-light text-slate-700 leading-relaxed mb-12 max-w-3xl">
                    AI Troubleshooting is about a couple of things: <span className="text-cyan-600 font-bold">Cloud Databases</span>, <span className="text-rose-600 font-bold">Troubleshooting</span> and <span className="text-slate-900 font-bold">AI</span>.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Pillar 1: Cloud Databases */}
                    <div className="bg-white border-2 border-slate-900 p-8 shadow-[4px_4px_0px_0px_rgba(8,145,178,1)] flex flex-col group hover:-translate-y-1 transition-transform">
                        <div className="w-12 h-12 bg-cyan-50 border border-cyan-100 flex items-center justify-center mb-6 group-hover:bg-cyan-100 transition-colors">
                            <ModernDatabaseIcon className="w-8 h-8 text-cyan-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight uppercase">Cloud Databases</h3>
                        <p className="text-slate-600 font-light leading-relaxed text-sm">
                            Complex softwares maintained automatically by providers like Google Cloud. They promise security and easy maintenance, while offering unique features like automatic scalability and availability.
                        </p>
                    </div>

                    {/* Pillar 2: Troubleshooting */}
                    <div className="bg-white border-2 border-slate-900 p-8 shadow-[4px_4px_0px_0px_rgba(236,72,153,1)] flex flex-col group hover:-translate-y-1 transition-transform">
                        <div className="w-12 h-12 bg-rose-50 border border-rose-100 flex items-center justify-center mb-6 group-hover:bg-rose-100 transition-colors">
                            <ModernTroubleshootingIcon className="w-8 h-8 text-rose-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight uppercase">Troubleshooting</h3>
                        <p className="text-slate-600 font-light leading-relaxed text-sm">
                            The act of finding, understanding, and fixing issues with performance. A slow database can drag an entire application down—a process so complex that users have always requested tools to make it simpler.
                        </p>
                    </div>

                    {/* Pillar 3: AI */}
                    <div className="bg-white border-2 border-slate-900 p-8 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] flex flex-col group hover:-translate-y-1 transition-transform">
                        <div className="w-12 h-12 bg-slate-100 border border-slate-200 flex items-center justify-center mb-6 group-hover:bg-slate-200 transition-colors">
                            <ModernAIIcon className="w-8 h-8 text-slate-900" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight uppercase">AI Capabilities</h3>
                        <p className="text-slate-600 font-light leading-relaxed text-sm">
                            A blanket term for LLM-driven features and traditional capabilities like neural networks. While not every feature requires an LLM, the focus is on augmenting human expertise with data-driven insights.
                        </p>
                    </div>
                </div>
            </Section>

            <Section id="programme-timeline" title="Research Roadmap" subtitle="02 / Programme Architecture">
                <div className="max-w-5xl mx-auto">
                    {/* Programme Summary View */}
                    <ProgrammeSummaryCard />

                    <CalendarItem 
                        date="March '24"
                        title="Literature reviews of past research"
                        description={`Synthesizing 5 years of troubleshooting research to define primary users, their needs, and common friction points. Many of these studies were conducted by me, establishing the baseline requirements for AI assistance.`}
                        illustration={<IllusLitReview />}
                    />
                    
                    <CalendarItem 
                        date="August '24"
                        title="Stakeholder Concept Definition"
                        description={`Collaborating to finalize three distinct interaction models (chat vs. modal, conversational vs. direct, visual vs. text-only). These were mocked using consistent data to enable rigorous within-subject testing.`}
                        illustration={<IllusStakeholders />}
                    />

                    <CalendarItem 
                        date="September '24"
                        title="3-Prototype Concept Testing"
                        description={`Rigorous testing to establish key principles for how users expect AI to function. Identified the most helpful concept, providing clear justification for the subsequent feature direction.`}
                        illustration={<IllusPrototypes />}
                        isLink={true}
                        onClick={() => onNavigate && onNavigate('ai-detail')}
                    />

                    <CalendarItem 
                        date="October '24"
                        title="Sharing findings and taking action"
                        description={`Disseminating findings and finalizing the decision to proceed with the guided interaction model identified during testing.`}
                        illustration={<IllusAction />}
                    />

                    <CalendarItem 
                        date="February '25"
                        title="Evaluative testing before release"
                        description={`Testing the actual implementation against established trust principles. Validated that specific UI logic was correctly carried through to the production-ready build.`}
                        illustration={<IllusEvaluative />}
                    />

                    <CalendarItem 
                        date="February '25"
                        title="In-product survey integration"
                        description={`Embedding UI elements to capture immediate user sentiment during troubleshooting sessions, enabling a continuous feedback loop from day one.`}
                        illustration={<IllusSurvey />}
                    />

                    <CalendarItem 
                        date="April '25"
                        title="Feature Release"
                        description={`The AI-assisted troubleshooting feature officially launches to the public console.`}
                        illustration={<IllusRelease />}
                    />

                    <CalendarItem 
                        date="June '25"
                        title="Analytics and sentiment analysis"
                        description={`Analysing adoption funnels to identify drop-off points. Cross-referencing usage data with qualitative sentiment from the in-product survey.`}
                        illustration={<IllusAnalytics />}
                    />

                    <CalendarItem 
                        date="August '25"
                        title="Heuristic Adoption Audit"
                        description={`Conducting a "PURE" heuristic analysis of the adoption flow to resolve friction points identified in the funnel data.`}
                        illustration={<IllusHeuristic />}
                    />

                    <CalendarItem 
                        date="October '25"
                        title="Production Evaluative Testing"
                        description={`Pinpointing key gaps in solution accuracy and perceived usefulness in complex, real-world production scenarios.`}
                        illustration={<IllusProduction />}
                    />

                    <CalendarItem 
                        date="October '25"
                        title="Socialising findings and driving action"
                        description={`Spelling out the requirements for continuous improvement to reach the feature's full potential.`}
                        illustration={<IllusSocialising />}
                    />
                </div>
            </Section>

            <Section id="programme-impact" title="The Impact" subtitle="03 / Results">
                <div className="bg-white border-2 border-slate-900 p-12 shadow-[4px_4px_0px_0px_rgba(236,72,153,1),8px_8px_0px_0px_rgba(8,145,178,1)] text-slate-900">
                    <p className="text-2xl font-light leading-relaxed text-slate-700 max-w-4xl">
                        The combined aim of all the activities in the research programme was to <span className="font-bold text-cyan-600">move the needle on organisationally difficult decisions</span> on where to shift development focus - right from deciding what to build to how to improve it with ongoing user feedback.
                    </p>
                    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-100 pt-12">
                        <div>
                            <span className="block text-[10px] font-mono text-slate-400 uppercase mb-2 tracking-widest">Decision Model</span>
                            <span className="font-bold text-slate-900">Research-Backed</span>
                        </div>
                        <div>
                            <span className="block text-[10px] font-mono text-slate-400 uppercase mb-2 tracking-widest">Interface</span>
                            <span className="font-bold text-slate-900">Validated Flow</span>
                        </div>
                        <div>
                            <span className="block text-[10px] font-mono text-slate-400 uppercase mb-2 tracking-widest">Lifecycle</span>
                            <span className="font-bold text-slate-900">Continuous Audit</span>
                        </div>
                        <div>
                            <span className="block text-[10px] font-mono text-slate-400 uppercase mb-2 tracking-widest">Focus</span>
                            <span className="font-bold text-slate-900">User Trust</span>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default AICaseStudy;
