import { useState } from "react"

function AppSimple() {
    const [name, setName] = useState("John");
    const [age, setAge] = useState(250);
    const [country, setCountry] = useState("Frankrijk");

    function updateName(e) {
        setName(e.target.value);
    }

    function updateAge() {
        setAge(age + 1);
    }

    function updateCountry(e) {
        setCountry(e.target.value);
    }

    return (
        <>
            <p>Ik ben {name} ik ben {age} en woon in {country}.</p>

            <input type="text" value={name} onChange={updateName} />
            <input type="button" value="Verhoog leeftijd" onClick={updateAge} />
            <select name="Landen" onChange={updateCountry}>
                <option >Frankrijk</option>
                <option value="Spanje">Spanje</option>
                <option value="djwidjwidjwidwq">Italië</option>
            </select>

        </>
    )
}

export default AppSimple
