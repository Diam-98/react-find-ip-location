// import { useState } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [details, setDetails] = useState(null);

  const getUserGeolocalisationDetails = () => {
    fetch(
      "https://geolocation-db.com/json/62d8d690-e7b8-11ed-8c81-cbb990727ab5"
    )
      .then((response) => response.json())
      .then((data) => setDetails(data));
  };

  return (
    <>
      <div className='main'>
        <h1>Trouver mon adresse IP et ma localisation</h1>
        <button onClick={getUserGeolocalisationDetails}>Geolocaliser</button>
        <table>
          <thead>
            <tr>
              <th>Pays && code</th>
              <th>Ville</th>
              <th>IP</th>
            </tr>
          </thead>
          <tbody>
            {details && (
              <tr>
                <td>{`${details.country_name} ${details.country_code}`}</td>
                <td>{details.city}</td>
                <td>{details.IPv4}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
