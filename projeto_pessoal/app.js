const app = document.getElementById("app");

function Header({ title }) {
    return <h1>{title ? title : 'Default Title 2'}</h1>;
}

function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    return (
        <div>
            <Header title="Develop. Preview. Ship."/>
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
        </div>
    );
}

const root = ReactDOM.createRoot(app);
root.render(<HomePage/>);
