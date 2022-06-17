// use it zin react

// Through jsx we return components. Functional Components are most famous.
// it is a combination of js and html. Some reserved keyowords of js like class are replaced with className and for with htmlFor.
// we will see jsx favour camelCase
// In jsx we can return one element or one tag only. Means if we want to return more elements like h1, p , a then we have to enclose it within a div or we can also use jsx fragment(<></>).
// JSX fragments(<></>) can also be used. Instead of using div we can use to it to wrap up the elements.
// The tags we dont close in html we have to close it here by <tagname/>. We have to always insert terminated jsx tagname.

// Also after return we can use (fragments to be returned.). This is due to if we use ; after jsx our jsx will give error. So we have to use ();

// To use js expressions or varibles we have to use {} and write codes inside it.
// Babel converts jsx to equivalent js.


// our component for react app.
// We will export this react component so need to import react.


export default function script() {
    let a = "arnab";
    let data = "<b>Here text will not be bold</b>" // Here text will not be bold as the text will be sanitized and then will get inserted as string inside the {}. So it will be safe for user inputs.
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>{a}</li>
            <li>{data}</li>
        </ul>
    </div>;
}


