import { WorkCard } from "./WorkCard";
import { motion } from 'framer-motion';
import portfolio from './portfolio_details/repo-details.json';

export const PortfolioMain: React.FC = () => {
    // build animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Delay between each card animation
            },
        },
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
         <section className="py-24 px-4 sm:px-8 max-w-6xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-center text-light-text mb-16">
                My Portfolio
            </h2>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {portfolio.map((project, index) => (
                    <WorkCard 
                        key={index}
                        variants={itemVariants}
                        project={project}
                    />
                ))}
            </motion.div>
            
         </section>
    )
}