import React, {useState, useEffect} from 'react';


const Homepage = props => {
    const [accountData, setAccountData] = useState(JSON.parse(window.localStorage.getItem("accountData")));

    useEffect(() => {
        setAccountData(JSON.parse(window.localStorage.getItem("accountData")));
    }, []);

    return (
        <div>
            <h1>MyAccount</h1>
            <p>
                {accountData.forename
                + " " + accountData.surname
                + " " + accountData.gender
                + " " + accountData.birthdate
                + " " + accountData.email}
            </p>
        </div>
    );
}

export default Homepage;