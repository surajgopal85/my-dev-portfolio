import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiLayers, FiSearch, FiShield, FiUploadCloud, FiImage } from 'react-icons/fi';
import { TopNav } from './TopNav';
import companiesImg from './assets/images/companies-view-redacted.png';
import multiFilterImg from './assets/images/multi-filter-redacted.png';
import dataCompletenessImg from './assets/images/data-completeness-solutions-sector-view.png';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
    visible: { transition: { staggerChildren: 0.15 } },
};

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    return (
        <motion.section
            className={`mb-16 ${className}`}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {children}
        </motion.section>
    );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="text-2xl md:text-3xl font-display font-bold text-light-text mb-6">
            {children}
        </h2>
    );
}

function FeatureBlock({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <motion.div
            className="bg-dark-surface rounded-xl p-6 border border-gray-800 hover:border-accent-blue/30 transition-colors"
            variants={fadeUp}
        >
            <div className="text-accent-blue mb-3 text-xl">{icon}</div>
            <h3 className="text-lg font-semibold text-light-text mb-2">{title}</h3>
            <p className="text-subtle-text text-sm leading-relaxed">{description}</p>
        </motion.div>
    );
}

export const AutoScapesCaseStudy: React.FC = () => {
    const navigate = useNavigate();

    const handleNavClick = (id: string) => {
        navigate(`/#${id}`);
    };

    const techStack = [
        'Next.js', 'NestJS', 'PostgreSQL', 'Supabase', 'Vercel', 'TypeScript',
    ];

    return (
        <>
            <TopNav onNavLinkClick={handleNavClick} />

            <div className="max-w-4xl mx-auto px-4 sm:px-8 pt-28 pb-20">
                {/* Back link */}
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-subtle-text hover:text-accent-blue text-sm mb-10 transition-colors"
                >
                    <FiArrowLeft /> Back to Portfolio
                </Link>

                {/* Header */}
                <Section>
                    <motion.div variants={stagger} initial="hidden" animate="visible">
                        <motion.span
                            className="text-[10px] font-semibold uppercase tracking-widest text-accent-blue bg-accent-blue/10 px-3 py-1 rounded-full inline-block mb-4"
                            variants={fadeUp}
                        >
                            Case Study
                        </motion.span>
                        <motion.h1
                            className="text-4xl md:text-5xl font-display font-bold text-light-text mb-4"
                            variants={fadeUp}
                        >
                            AutoScapes
                        </motion.h1>
                        <motion.p
                            className="text-subtle-text text-lg leading-relaxed max-w-2xl mb-6"
                            variants={fadeUp}
                        >
                            A full-stack data platform that replaced spreadsheet-driven research workflows for an automotive consultancy — now serving paying subscribers through a VC-led beta.
                        </motion.p>
                        <motion.div className="flex flex-wrap gap-2" variants={fadeUp}>
                            {techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs font-medium bg-accent-blue/10 text-accent-blue px-3 py-1 rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </motion.div>
                </Section>

                {/* Problem */}
                <Section>
                    <SectionTitle>The Problem</SectionTitle>
                    <p className="text-subtle-text leading-relaxed mb-6">
                        An automotive research consultancy was running its entire operation on spreadsheets — tracking thousands of companies across the automotive landscape, manually updating financials, maintaining taxonomy classifications, and sharing findings with clients through exported files. The workflow was slow, error-prone, and couldn't scale as their subscriber base grew.
                    </p>
                    <p className="text-subtle-text leading-relaxed">
                        They needed a purpose-built data platform: something that could ingest and normalize their research data, present it through rich analytics views, and give subscribers self-serve access to slice the market however they needed.
                    </p>
                </Section>

                {/* Architecture */}
                <Section>
                    <SectionTitle>Architecture</SectionTitle>
                    <p className="text-subtle-text leading-relaxed mb-6">
                        The platform is a monorepo with a <strong className="text-light-text">Next.js</strong> frontend and a <strong className="text-light-text">NestJS</strong> API backend, backed by <strong className="text-light-text">PostgreSQL</strong> via <strong className="text-light-text">Supabase</strong>. Authentication and role-based access control run through <strong className="text-light-text">Supabase Auth</strong>, and the frontend is deployed on <strong className="text-light-text">Vercel</strong>.
                    </p>
                    <p className="text-subtle-text leading-relaxed mb-6">
                        NestJS was the right call for the backend — the module system maps cleanly onto the domain (companies, taxonomies, analytics, user management), and the decorator-based approach keeps the API surface consistent as it grows. Next.js on the frontend gives us SSR where it matters for initial loads and static generation for pages that don't change often.
                    </p>
                </Section>

                {/* Key Features */}
                <Section>
                    <SectionTitle>Key Features</SectionTitle>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <FeatureBlock
                            icon={<FiLayers />}
                            title="Analytics Dashboard"
                            description="Data completeness indicators, visual markers for company size and market cap, and summary metrics designed for quick visual ingestion of market data at a glance. Subscribers can assess the landscape without digging into individual records."
                        />
                        <FeatureBlock
                            icon={<FiSearch />}
                            title="Taxonomy & Tag Search"
                            description="Clickable taxonomy tags combined with fuzzy search. Users can click through category hierarchies or type free-form queries — enabling endless recombination to carve out arbitrary subgroupings of players in the industry."
                        />
                        <FeatureBlock
                            icon={<FiShield />}
                            title="RBAC & Onboarding"
                            description="Supabase Auth with an invite-based flow supporting viewer and admin roles. Admins manage the data pipeline and user access; viewers (subscribers) get a curated, read-only experience."
                        />
                        <FeatureBlock
                            icon={<FiUploadCloud />}
                            title="Data Pipeline"
                            description="ETL pipeline for ingesting and normalizing research data, with CSV import/export for reconciliation against the consultancy's existing records. Designed to fit into their current workflow, not replace it overnight."
                        />
                    </motion.div>
                    <div className="mt-6">
                        <img
                            src={dataCompletenessImg}
                            alt="Data completeness indicators showing coverage percentages across fields"
                            className="w-full rounded-lg border border-gray-700/50"
                        />
                        <p className="text-subtle-text text-xs mt-2 text-center">Data completeness tracking across key fields</p>
                    </div>
                </Section>

                {/* Screenshots */}
                <Section>
                    <SectionTitle>In Action</SectionTitle>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <img
                            src={companiesImg}
                            alt="Companies list with taxonomy sidebar and size indicators"
                            className="rounded-lg border border-gray-700/50"
                        />
                        <img
                            src={multiFilterImg}
                            alt="Multi-filter search combining taxonomy tags with fuzzy text search"
                            className="rounded-lg border border-gray-700/50"
                        />
                    </div>
                </Section>

                {/* Engineering Spotlight */}
                <Section>
                    <SectionTitle>Engineering Spotlight: Logo Caching Proxy</SectionTitle>
                    <div className="bg-dark-surface rounded-xl p-6 border border-gray-800">
                        <div className="flex items-center gap-3 mb-4">
                            <FiImage className="text-accent-blue text-xl" />
                            <span className="text-xs font-semibold uppercase tracking-widest text-accent-purple">Mini Story</span>
                        </div>
                        <p className="text-subtle-text leading-relaxed mb-4">
                            The platform displays company logos throughout the UI — in search results, analytics cards, and detail pages. Fetching these directly from third-party sources on every render was slow and unreliable (broken images, rate limits, inconsistent sizing).
                        </p>
                        <p className="text-subtle-text leading-relaxed mb-4">
                            The solution: a lightweight caching proxy that fetches logos on first request, normalizes them (consistent dimensions, format), and serves them from cache on subsequent hits. It handles fallbacks gracefully — generating a styled initial-based placeholder when a logo isn't available.
                        </p>
                        <p className="text-subtle-text leading-relaxed">
                            Small feature, but it's the kind of thing that separates a polished product from a prototype. Every company card renders instantly with a consistent visual, and the consultancy's clients notice the difference.
                        </p>
                    </div>
                </Section>

                {/* Outcome */}
                <Section>
                    <SectionTitle>Outcome</SectionTitle>
                    <p className="text-subtle-text leading-relaxed mb-4">
                        The platform is now onboarding its first paying subscribers through a VC-led beta program. It's positioned to fully replace the consultancy's legacy spreadsheet workflows — giving their team a real tool to manage and publish research, and giving subscribers a self-serve interface to explore the automotive landscape.
                    </p>
                    <p className="text-subtle-text leading-relaxed">
                        What started as "we need to get off spreadsheets" became a product with real revenue and a path to scale.
                    </p>
                </Section>

                {/* Back link bottom */}
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-subtle-text hover:text-accent-blue text-sm transition-colors"
                >
                    <FiArrowLeft /> Back to Portfolio
                </Link>
            </div>
        </>
    );
};
