    import React from "react";
    import ReactDOM from "react-dom/client";

    const Heading = () => (
        <h1>Hello everyone</h1>
    )

    const FunctionalComp =  () => {
        return (
        
            <>
                {Heading()}
                <h1>This is A Functional Component</h1>
            </>
        );
    };


    

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(<FunctionalComp />);

