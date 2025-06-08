import headShot from './assets/images/suraj-gopal-headshot.jpeg';

export const WorkCard: React.FC = () => {
    return (
        <div className="border-2 border-white rounded-md">
            <div className="m-5">
                <img className="w-24 h-auto"src={headShot} alt="" />
                <p className="text-3xl">HEAD</p>
                <p>TEXT</p>
                <p>TEXT</p>
                <p>TEXT</p>
                <p>TEXT</p>
                <p>TEXT</p>
            </div>
        </div>
    )
}