interface User {
    name: string;
}

const Greetings: React.FC<User> = ({ name }) => {
    

    return (
        <div>
            <h1>Hello, {name}!</h1>
        </div>
    )
}

export default Greetings
