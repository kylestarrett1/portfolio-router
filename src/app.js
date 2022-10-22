console.log("App.js is running!");

// create app object title/subtitle
// use title/subtitle in the template
// render template

// only render the subtitle (and p tag) if subtitle exist - logical and operator
// render new p tag - if options.length > 0 "Here are your options" / "No options"

const app = {
  title: "Indecision App",
  subtitle: "put your life in the hands of a computer",
  options: ["One", "Two"],
};

// JSX - JavaScript XML
const template = (
  <div id='wrapper'>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

const user = {
  name: "Kyle",
  age: 29,
  location: "San Diego",
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

const templateTwo = (
  <div id='container'>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {user.age && user.age >= 18 && <p>Age : {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
