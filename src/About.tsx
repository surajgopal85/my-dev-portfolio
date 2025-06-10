import React from "react";
import reactLogo from './assets/images/langs/reactlogo.webp';
import nodeLogo from './assets/images/langs/node-js.png';
import nodeTwo from './assets/images/langs/node-logo-blk.png';
import nodeThree from './assets/images/langs/node-vector.svg';
import awsLogo from './assets/images/langs/aws-logo.png';
import gatsbyLogo from './assets/images/langs/gatsby-logo.svg';
import podLogo from './assets/images/langs/podbw.webp';
import exprLogo from './assets/images/langs/Expressjs.png';
import fastLogo from './assets/images/langs/FastAPI_logo.svg.png';

import nodeWhite from './assets/images/langs/node-white.png';

export const About: React.FC = () => {
    return (
        <div className="flex flex-col py-6 mt-8">
            <h2 className="text-4xl font-semibold pb-4">Technical Stack</h2>
            <h2 className="text-3xl font-semibold pb-4">Javascript</h2>
            <div className="flex justify-between">
                <img className='w-24 h-auto' src={reactLogo}/>
                <img className='w-24 h-auto' src={nodeWhite}/>
                <img className='w-24 h-auto' src={gatsbyLogo}/>
            </div>
            <h2 className="text-3xl font-semibold pb-4">Infrastructure</h2>
            <div className="flex justify-between">
                <img className='w-24 h-auto' src={awsLogo}/>
                <img className='w-24 h-auto' src={podLogo}/>
            </div>
            <h2 className="text-3xl font-semibold pb-4">Backend</h2>
            <div className="flex justify-between">
                <img className='w-24 h-auto' src={fastLogo}/>
                <img className='w-24 h-auto' src={exprLogo}/>
            </div>
            <p>My name is Suraj. Currently, I work for Scholastic's Alliance for Young Artists & Writers.</p>
            <p>Technical stack: 
            React, Typescript, GatsbyJS, NodeJS, AWS, Wordpress.</p>
        </div>
    )
}