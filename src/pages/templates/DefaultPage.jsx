import MainHeader from "../../components/MainHeader";

/**
 * The default page template has a header at the top, and limits the width of
 * all children elements.
 */
const DefaultPage = ({children}) => {
    return (
        <>
            <MainHeader />
            <div className="bg-primary-background min-h-screen flex justify-center">
                <div className="w-full max-w-7xl text-primary-text ml-2 mr-2 mb-4">
                    {children}
                </div>
            </div>
        </>
    );
};

export default DefaultPage;