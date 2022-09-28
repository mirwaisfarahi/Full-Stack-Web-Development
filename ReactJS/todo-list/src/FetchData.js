import Axios from "axios";
import { useEffect, useState } from "react";

const FetchData = () => {

    // Using fetch method
    // fetch("https://catfact.ninja/fact")
    // .then((res) => res.json())
    // .then((data) => {
    //     console.log(data)
    // });
    
    // using axois library
    const [catFact, setCatFact] = useState("");
    const fetchCatData = () => {
            Axios.get("https://catfact.ninja/fact").then(res => {
            setCatFact(res.data.fact)
        });
    }

    useEffect(() => {
        fetchCatData();
    }, []);

    // Predict Age from name
    const [name, setName] = useState("");
    const [predictedAge, setPredictedAge] = useState(null); // setting it to null we can return all values of API object or use {} instead of null

    const fetchAgeData = () => {
        Axios.get(`https://api.agify.io/?name=${name}`).then(res => {
            setPredictedAge(res.data);
        })
    }

    return (
        <div className="App">
            <div>
                <h3>Fetch Data from an API</h3>
                <h4>Cat Fact Data</h4>
                <button onClick={fetchCatData}>Fetch Cat Data</button>
                <p>{catFact}</p>
            </div>

            <div>
                <h3>Predict Age from Name API</h3>
                <input onChange={(event) => setName(event.target.value)} />
                <button onClick={fetchAgeData}>Predict Age</button>
                <p>Name: {predictedAge?.name}</p>
                <p>Predicted Age: {predictedAge?.age}</p>
            </div>
        </div>
    );
};

export default FetchData;