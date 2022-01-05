//THERE ARE TWO WAYS TO WRITE COMPONENTS:
//using a CLASS and using a FUNCTION

class Hello extends React.Component {
    render() {
        return (
        <div>
            <h1>Hello there!</h1>
            <h1>Hello there!</h1>
            <h1>Hello there!</h1>
        </div>
        );
    }
}

//historically, function components couldn't use important features such as STATE and LIFECYCLE METHODS
//with the introduction of HOOKS, we can now write full-featured function components (this course covers hooks!)

/* function Hello() {
    return (
        <div>
            <h1>Hello there!</h1>
            <h1>Hello there!</h1>
            <h1>Hello there!</h1>
        </div>
    );
} */

//NOTE THAT THE CLASS HAS A SEPARATE RENDER METHOD, WHILE THE FUNCTION DOES NOT

ReactDOM.render(<Hello/>, document.getElementById('root'));