// WorkCard.tsx
import { motion, Variants } from 'framer-motion';

type WorkCardProps = {
    variants: Variants; // To accept stagger variants from parent
}

export const WorkCard: React.FC<WorkCardProps> = ({ variants }) => {
    return (
        <motion.div
            className="bg-dark-surface p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full max-w-sm"
            variants={variants} // pass animation from parent overview
            whileHover={{ scale: 1.1 }} // enlarge 10% on hover
        >
            <h3 className="text-xl font-semibold text-light-text mb-2">Project Title</h3>
            <p className="text-subtle-text text-sm mb-4">A brief description of the project and its purpose.</p>
            <div className="bg-gray-700 h-40 rounded-lg mb-4 flex items-center justify-center text-subtle-text text-center">
                Project Screenshot
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-medium mb-4">
                <span className="bg-accent-blue/20 text-accent-blue px-2 py-1 rounded-full">React</span>
                <span className="bg-accent-purple/20 text-accent-purple px-2 py-1 rounded-full">Node.js</span>
                <span className="bg-gray-600/20 text-pink-400 px-2 py-1 rounded-full">PostgreSQL</span>
            </div>
            <div className="flex justify-between mt-4">
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline text-sm">Live Demo</a>
            </div>
        </motion.div>
    )
}