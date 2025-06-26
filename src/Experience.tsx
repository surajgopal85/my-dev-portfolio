export const Experience: React.FC = () => {
    return (
        <div className="flex flex-row">
            <div className="border-gray-200 mr-16">
                <div>BOX</div>
                <div>BOX</div>
                <div>BOX</div>
                <div>BOX</div>
                <div>BOX</div>
            </div>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                <li className="mb-10 ms-4">
                    <p>text</p>
                </li>
                <li className="mb-10 ms-4">
                    <p>text</p>
                </li>
                <li className="mb-10 ms-4">
                    <p>text</p>
                </li>
            </ol>
            {/* <ol className="relative border-e border-gray-200 dark:border-gray-700">
                <li className="mb-10 ms-4">
                    <p>text</p>
            </li>
            </ol> */}
            <div className="border-gray-200 ml-16">
                <div>BOX</div>
                <div className="text-black">BOX</div>
                <div>BOX</div>
                <div className="text-black">BOX</div>
                <div>BOX</div>
            </div>
        </div>
    );
}