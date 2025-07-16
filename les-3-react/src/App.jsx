// Dit is de versie waarbij we een object gebruiken.
// Voor de versie met drie aparte useStates ga je naar main.jsx
// en comment dan de ander uit.


import { useState } from "react"

function App() {
    const [user, setUser] = useState({
        name: "John",
        age: 25,
        country: "Frankrijk"
    })

    function updateName(e) {
        setUser({ ...user, name: e.target.value });
    }

    function updateAge() {
        // const newUser = {
        //     name: user.name,
        //     country: user.country,
        //     age: user.age + 1
        // }

        // setUser(newUser);
        setUser({ ...user, age: user.age + 1 });
    }

    function updateCountry(e) {
        setUser({ ...user, country: e.target.value });
    }

    return (
        <>
            <p>Ik ben {user.name} ik ben {user.age} en woon in {user.country}.</p>

            <input type="text" onChange={updateName} />
            <input type="button" value="Verhoog leeftijd" onClick={updateAge} />
            <select name="Landen" onChange={updateCountry}>
                <option >Frankrijk</option>
                <option value="Spanje">Spanje</option>
                <option value="djwidjwidjwidwq">Italië</option>
            </select>
        </>
    )
}

export default App
