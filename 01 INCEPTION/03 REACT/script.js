//CONCEPT: CREATE ELEMENT AND RENDER
const box1 = document.getElementById('box1');
const rootBox1 = ReactDOM.createRoot(box1);
const element = React.createElement(
    'h1',
    {id: 'heading1',  class: 'heading1'},                 //ATTRIBUTES
    'Hello World');
// ============================================ //
    rootBox1.render(element);                                //RENDER THE JS OBJECT INTO BROWSER READABLE HTML.






// HOW TO CREATE NESTED ELEMENTS
const box2 = document.getElementById("box2");
const rootBox2 = ReactDOM.createRoot(box2);
const parent = React.createElement(
    'div',
    {id: 'parent'},
    React.createElement(
        'div',
        {id: 'child'},
        React.createElement(
            'h1',
            {id: "heading2", class: "heading2"},
            'Child Element'
        )
    )
)                                                               //NESTED ELEMENTS.
rootBox2.render(parent);



// HOW TO CREATE MULTIPLE CHILDREN
const box3 = document.getElementById("box3");
const rootBox3 = ReactDOM.createRoot(box3);
const towChildren = React.createElement(
    'div',
    {},
    [
        React.createElement('div', { id: 'child1', class: 'heading3' },
        [
            React.createElement('h1', {}, 'Child Element 1'),
            React.createElement('h1', {}, 'Child Element 2')
        ]),
        React.createElement('div', { id: 'child2', class: 'heading3'},
            [
                React.createElement('h1', {}, 'Child Element 3'),
                React.createElement('h1', {}, 'Child Element 4')
            ]
        )
    ]
)
rootBox3.render(towChildren);


