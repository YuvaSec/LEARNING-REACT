// VANILA JS CODE.
                // const hello = document.createElement("h1");
                // const boxElement = document.getElementById("box");
                // hello.innerHTML = "Hello World from JavaScript";
                // boxElement.appendChild(hello);

//REACT CODE//
            const hello = React.createElement("h1", null, "Hello World from React");

// Method 1: No more available legacy.
            // const root = ReactDOM.render(hello, document.getElementById("box"));

// Method 2: React 18 and above.
            const root = ReactDOM.createRoot(document.getElementById("box"));
            root.render(hello);                 //Here we are creating root and then rendering all the react code inside root.

