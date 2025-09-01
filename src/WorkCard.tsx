// WorkCard.tsx
import { motion, Variants } from 'framer-motion';

type Project = {
    project_title: string;
    project_description: string;
    frontend_language: string;
    backend_language: string;
    database_management_system: string;
    demo_site: string;
    github_repo: string;
};

type WorkCardProps = {
    variants: Variants; // To accept stagger variants from parent
    project: Project;
}

export const WorkCard: React.FC<WorkCardProps> = ({ variants, project }) => {
    return (
        <motion.div
            className="bg-dark-surface p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full max-w-sm"
            variants={variants} // pass animation from parent overview
            whileHover={{ scale: 1.1 }} // enlarge 10% on hover
        >
            <h3 className="text-xl font-semibold text-light-text mb-2">{project.project_title}</h3>
            <p className="text-subtle-text text-sm mb-4">{project.project_description}</p>
            <div className="bg-gray-700 h-40 rounded-lg mb-4 flex items-center justify-center text-subtle-text text-center">
                Project Screenshot
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-medium mb-4">
                <span className="bg-accent-blue/20 text-accent-blue px-2 py-1 rounded-full">{project.frontend_language}</span>
                <span className="bg-accent-purple/20 text-accent-purple px-2 py-1 rounded-full">{project.backend_language}</span>
                <span className="bg-gray-600/20 text-pink-400 px-2 py-1 rounded-full">{project.database_management_system}</span>
            </div>
            <div className="flex justify-between mt-4">
                <a href={project.demo_site} target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline text-sm">Live Demo (Coming Soon)</a>
                <a href={project.github_repo} target="_blank" rel="noopener noreferrer" className="text-subtle-text hover:underline text-sm">GitHub Repo</a>
            </div>
        </motion.div>
    )
}