export const Experience: React.FC = () => {
    return (
        <div className="flex flex-row">
            <div className="border-gray-200 mr-16">
                <div className="font-bold translate-y-0.5">Alliance for Young Artists & Writers</div>
                <div><p className="text-xs">GatsbyJS, React, ChakraUI, AWS, Wordpress</p></div>
                <div className="text-black">BOX</div>
                <div>BOX</div>
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
                <div>BOX</div>
                <div className="text-black">BOX</div>
                {/* <div className="text-black">BOX</div> */}
                <div className="mt-2">
                    <div className="font-bold">NYC Department of Education</div>
                    <div className="text-xs">AP Java, Python, Precalculus, Physics, Chemistry</div>
                </div>
            </div>
        </div>
    );
}