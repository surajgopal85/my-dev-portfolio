import React from "react";
import reactLogo from './assets/images/langs/react-logo.png';
import nodeLogo from './assets/images/langs/node-js.png';
import nodeTwo from './assets/images/langs/node-logo-blk.png';
import nodeThree from './assets/images/langs/node-vector.svg';
import awsLogo from './assets/images/langs/aws-logo.png';

export const About: React.FC = () => {
    return (
        <div className="flex flex-col py-6 mt-8">
            <h2 className="text-4xl font-semibold pb-4">Technical Stack</h2>
            <div className="flex justify-between">
                <img className='w-24 h-auto' src={reactLogo}/>
                <img className='w-24 h-auto' src={nodeThree}/>
                <img className='w-24 h-auto' src={awsLogo}/>
            </div>
            <p>My name is Suraj. Currently, I work for Scholastic's Alliance for Young Artists & Writers.</p>
            <p>Technical stack: 
            React, Typescript, GatsbyJS, NodeJS, AWS, Wordpress.</p>
        </div>
    )
}