/**
 * The simple component template is used to render simple pages, with
 * one simple component. Content in the page is centered.
 */
const SimpleComponentPage = ({children}) => {
    return (
        <div className="bg-primary-background min-h-screen flex justify-center">
            <div className="flex align-center flex-col justify-center">
                {children}
            </div>
        </div>
    )
};

export default SimpleComponentPage;