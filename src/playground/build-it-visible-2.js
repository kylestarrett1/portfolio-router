
let notification = "";
let text = "Show Details";

const onShowDetails = () => {
    notification = "Hey. These are some details you can now see!"
    text = "Hide Details"
    render();
}

const onHideDetails = () => {
    notification = "";
    text = "Show Details"
    render();
}

const appRoot = document.getElementById("app");

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={notification.length === 0 ? onShowDetails : onHideDetails}>{text}</button>
            <p>{notification}</p>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render();