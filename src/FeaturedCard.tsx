import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import taxonomyImg from './assets/images/solution-taxonomy-redacted.png';

export const FeaturedCard: React.FC = () => {
    const navigate = useNavigate();

    const techStack = [
        { label: 'Next.js', color: 'bg-accent-blue/20 text-accent-blue' },
        { label: 'NestJS', color: 'bg-accent-purple/20 text-accent-purple' },
        { label: 'PostgreSQL', color: 'bg-gray-600/20 text-pink-400' },
        { label: 'Supabase', color: 'bg-emerald-500/20 text-emerald-400' },
        { label: 'Vercel', color: 'bg-gray-600/20 text-gray-300' },
    ];

    return (
        <motion.div
            className="w-full mb-10 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            onClick={() => navigate('/projects/autoscapes')}
        >
            <div className="relative bg-dark-surface rounded-xl border border-accent-blue/20 overflow-hidden hover:border-accent-blue/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(79,70,229,0.15)]">
                {/* Featured badge */}
                <div className="absolute top-4 left-4 z-10">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-accent-blue bg-accent-blue/10 px-3 py-1 rounded-full">
                        Featured Project
                    </span>
                </div>

                <div className="flex flex-col md:flex-row">
                    {/* Content side */}
                    <div className="flex-1 p-8 pt-14 md:pt-8 md:pl-8 flex flex-col justify-center">
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-light-text mb-3">
                            AutoScapes
                        </h3>
                        <p className="text-subtle-text text-sm md:text-base leading-relaxed mb-5 max-w-lg">
                            Full-stack data platform for an automotive research consultancy. Replaced legacy spreadsheets with analytics dashboards, taxonomy-driven search, and role-based access — now serving paying subscribers via a VC-led beta.
                        </p>

                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-2 text-xs font-medium mb-6">
                            {techStack.map((tech) => (
                                <span key={tech.label} className={`${tech.color} px-2.5 py-1 rounded-full`}>
                                    {tech.label}
                                </span>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="flex items-center gap-2 text-accent-blue text-sm font-medium group">
                            <span>View Case Study</span>
                            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>

                    {/* Screenshot */}
                    <div className="flex-1 p-6 flex items-center justify-center">
                        <img
                            src={taxonomyImg}
                            alt="AutoScapes taxonomy view showing solution categories across functional groups"
                            className="w-full h-48 md:h-64 object-cover object-top rounded-lg border border-gray-700/50"
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
