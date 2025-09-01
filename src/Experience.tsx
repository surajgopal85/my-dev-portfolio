export const Experience: React.FC = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-center text-light-text mb-2" id='experience'>Work Experience</h1>
            <h4 className="text-md text-center text-light-text mb-8">Hover for more information</h4>
            <div className="relative flex justify-center">
                {/* Left Column */}
                <div className="w-1/2 pr-8 text-right">
                    {/* Dot 1 - Scholastic */}
                    <div className="mb-8 group relative">
                        <div className="font-bold text-light-text cursor-pointer">Scholastic (9/23 - Present)</div>
                        <div className="text-xs text-subtle-text">GatsbyJS, NextJS, React/Typescript, ChakraUI, AWS, Wordpress</div>
                        
                        {/* Hover Popup */}
                        <div className="absolute left-0 top-0 transform -translate-x-full -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto z-20">
                            <div className="bg-dark-surface border border-gray-600 rounded-lg p-4 shadow-xl max-w-xs8">
                                <div className="font-bold text-light-text mb-2">Alliance for Young Artists & Writers</div>
                                <div className="text-sm text-subtle-text mb-3">
                                    Leading product management and technical development for educational applications serving 300k+ users. 
                                    Architected migration of 13+ years of legacy data across multiple database systems, 
                                    while developing React/Next.js features and coordinating directly with business stakeholders to prioritize development. 
                                    Own features end-to-end from discovery sessions through UAT, combining technical expertise with strong communication skills from my teaching background.
                                </div>
                                <div className="text-xs text-accent-blue">
                                    Full-stack development with modern web technologies
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Empty space for Dot 2 */}
                    <div className="mb-8">
                        <div className="text-black">BOX</div>
                    </div>
                    
                    {/* Dot 3 - Project STEM/Amazon */}
                    <div className="mb-8 group relative">
                        <div className="font-bold text-light-text cursor-pointer">Project STEM/Amazon (1/22 - 6/22)</div>
                        <div className="text-xs text-subtle-text">Computer Science Curriculum Design</div>
                        
                        {/* Hover Popup */}
                        <div className="absolute left-0 top-0 transform -translate-x-full -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto z-20">
                            <div className="bg-dark-surface border border-gray-600 rounded-lg p-4 shadow-xl max-w-xs mr-8">
                                <div className="font-bold text-light-text mb-2">Project STEM/Amazon</div>
                                <div className="text-sm text-subtle-text mb-3">
                                    Co-authored Amazon's national Python curriculum for 10,000+ students. 
                                    Created accessible coding projects and lesson plans focused on broadening STEM participation for underrepresented students.
                                </div>
                                <div className="text-xs text-accent-blue">
                                    Coding instruction
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Empty space for Dot 4 */}
                    <div className="mb-8">
                        <div className="text-black">BOX</div>
                    </div>
                </div>

                {/* Center Timeline */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    <div className="rounded-full w-4 h-4 outline-amber-100 outline-2 bg-blue-900 z-10"></div>
                    <div className="h-14 border-l-2 border-amber-100"></div>
                    <div className="rounded-full w-4 h-4 outline-amber-100 outline-2 bg-blue-900 z-10"></div>
                    <div className="h-12 border-l-2 border-amber-100"></div>
                    <div className="rounded-full w-4 h-4 outline-amber-100 outline-2 bg-blue-900 z-10"></div>
                    <div className="h-12 border-l-2 border-amber-100"></div>
                    <div className="rounded-full w-4 h-4 outline-amber-100 outline-2 bg-blue-900 z-10"></div>
                </div>

                {/* Right Column */}
                <div className="w-1/2 pl-8 text-left">
                    {/* Empty space for Dot 1 */}
                    <div className="mb-8">
                        <div className="text-black">BOX</div>
                    </div>
                    
                    {/* Dot 2 - NYC Dept of Education */}
                    <div className="mb-8 group relative">
                        <div className="font-bold text-light-text cursor-pointer">NYC Dept of Education (6/11 - 9/22)</div>
                        <div className="text-xs text-subtle-text">AP Java, Python, Precalculus, Physics, Chemistry</div>
                        
                        {/* Hover Popup */}
                        <div className="absolute right-0 top-0 transform translate-x-full -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto z-20">
                            <div className="bg-dark-surface border border-gray-600 rounded-lg p-4 shadow-xl max-w-xs ml-8">
                                <div className="font-bold text-light-text mb-2">NYC Department of Education</div>
                                <div className="text-sm text-subtle-text mb-3">
                                    Taught Advanced Placement courses in Computer Science and Mathematics, developing curriculum and preparing students for college-level coursework.
                                    Fulfilled special education services for annual population of 30+ students with disabilities; maintained IEPs, liaised with families, differentiated material, provided small group instruction.
                                </div>
                                <div className="text-xs text-accent-blue">
                                    Educational leadership and curriculum development
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Empty space for Dot 3 */}
                    <div className="mb-8">
                        <div className="text-black">BOX</div>
                    </div>
                    
                    {/* Dot 4 - Upperline Code */}
                    <div className="mb-8 group relative">
                        <div className="font-bold text-light-text cursor-pointer">Upperline Code (6/19 - 6/22)</div>
                        <div className="text-xs text-subtle-text">JavaScript, HTML, CSS, Education</div>
                        
                        {/* Hover Popup */}
                        <div className="absolute right-0 top-0 transform translate-x-full -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto z-20">
                            <div className="bg-dark-surface border border-gray-600 rounded-lg p-4 shadow-xl max-w-xs ml-8">
                                <div className="font-bold text-light-text mb-2">Upperline Code</div>
                                <div className="text-sm text-subtle-text mb-3">
                                    Taught full-stack development (Python, Flask, MongoDB, JavaScript, HTML/CSS) to 200+ high school students through intensive summer bootcamp programs. 
                                    Achieved 95%+ completion rates by integrating project-based learning and real-world application development, demonstrating strong mentoring and technical communication skills.
                                </div>
                                <div className="text-xs text-accent-blue">
                                    Web development and education
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* OLD CODE - COMMENTED OUT FOR REFERENCE */}
            {/*
            <>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-center text-light-text mb-16">Experience</h1>
            <div className="flex flex-row justify-center">
                <div className="border-gray-200 mr-16">
                    <div className="font-bold translate-y-0.5">Alliance for Young Artists & Writers (9/23 - Present)</div>
                    <div><p className="text-xs">GatsbyJS, React, ChakraUI, AWS, Wordpress</p></div>
                    <div className="text-black">BOX</div>
                    <div className="text-black">BOX</div>
                    <div className="text-black">BOX</div>
                </div>
                <div className="flex justify-center flex-col gap-0">
                    <div className="rounded-full w-4 h-4 outline-amber-100 outline-2 bg-blue-900"></div>
                    <div className="h-14 border-l-2 translate-x-2 border-amber-100"></div>
                    <div className="rounded-full w-4 h-4 outline-amber-100 outline-2 bg-blue-900"></div>
                    <div className="h-12 border-l-2 translate-x-2 border-amber-100"></div>
                    <div className="rounded-full w-4 h-4 outline-amber-100 outline-2 bg-blue-900"></div>
                    <div className="h-12 border-l-2 translate-x-2 border-amber-100"></div>
                    <div className="rounded-full w-4 h-4 outline-amber-100 outline-2 bg-blue-900"></div>
                </div>
                <div className="border-gray-200 ml-16">
                    <div className="text-black">BOX</div>
                    <div className="text-black">BOX</div>
                    <div className="mt-2">
                        <div className="font-bold">NYC Department of Education (6/11 - 9/22)</div>
                        <div className="text-xs">AP Java, Python, Precalculus, Physics, Chemistry</div>
                    </div>
                </div>
            </div>
            </>
            */}
        </div>
    );
}