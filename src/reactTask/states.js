

import { useEffect, useState } from "react";

function Count() {
    const countries = [
        { id: "1", name: "India" },
        { id: "2", name: "USA" }
    ];

    const states = [
        { id: "1", countryId: "1", name: "A.P" },
        { id: "2", countryId: "1", name: "T.S" },
        { id: "3", countryId: "2", name: "Texas" },
        { id: "4", countryId: "2", name: "California" },

    ]

    const [country, setCountry] = useState([]);
    const [state, setState] = useState([]);

    useEffect(() => {
        setCountry(countries);
    }, [])

    const handleCountry = (id) => {
        const dt = states.filter(x => x.countryId === id);
        setState(dt);
    }
    const handleState =(id) =>{
        const dt = states.filter(x => x.countryId === id);
        setState(dt);
    }


    return (
        <div >
            <h1>Based on Countries</h1>
            <select onChange={(e) => (handleCountry(e.target.value))}>
                <option>Select Country</option>
                {
                    country &&
                        country !== undefined ?
                        country.map((ctr, index) => {
                            return (
                                <option key={index} value={ctr.id}>{ctr.name}</option>
                            )
                        })
                        : "No Country"
                }
            </select>
            <br></br>
            <select onChange={(e) => handleState(e.target.value)}>
                <option>Select State</option>
                {
                    state &&
                        state !== undefined ?
                        state.map((ctr, index) => {
                            return (
                                <option key={index} value={ctr.id}>{ctr.name}</option>
                            )
                        })
                        : "No Country"
                }
            </select>
        </div>
    )
}
export default Count;

