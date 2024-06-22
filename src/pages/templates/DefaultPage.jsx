import MainHeader from "../../components/MainHeader";

/**
 * The default page template has a header at the top, and limits the width of
 * all children elements.
 */
const DefaultPage = ({children}) => {
    return (
        <div className="bg-primary-background min-h-screen">
            <MainHeader />
            <div className="w-full max-w-7xl text-primary-text pl-2 pr-2 m-auto">
                {children}
            </div>
        </div>
    );
};

export default DefaultPage;