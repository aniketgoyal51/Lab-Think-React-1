const container = document.getElementById('react-Container');
ReactDOM.render("Hello! Welcome to React",container);

const reactContainer = () =>{
    return React.createElement(`div`,null,`Hey Kalvians! Welcome to React Learning`,
        React.createElement(`div`,null,`Let's rock and roll`)
        );
}
ReactDOM.render(React.createElement(reactContainer),container);