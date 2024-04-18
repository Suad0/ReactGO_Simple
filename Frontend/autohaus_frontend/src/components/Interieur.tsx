import React, {useState, useEffect} from 'react';
import axios from 'axios';

interface Interieur {
    SitzAnzahl: number
    SitzMaterial: string
    SitzArt: string
    Sitzheizung: boolean
    Massagesitze: boolean
    BeluefteteSitze: boolean
    LenkradMaterial: string
}

const InterieurList = () => {
    const [interieur, setInterieur] = useState([]);

    useEffect(() => {
        const fetchInterieur = async () => {
            try {
                const response = await axios.get('http://localhost:9000/interieur');
                setInterieur(response.data.interieur);
                console.log(response)
            } catch (error) {
                console.error('Error fetching interieur:', error);
            }
        };

        fetchInterieur();
    }, []);


    return (
        <div>
            <h2>Interieur List</h2>
            <table>
                <thead>
                <tr>
                    <th>Sitz Anzahl</th>
                    <th>Sitz Material</th>
                    <th>Sitz Art</th>
                    <th>Sitzheizung</th>
                    <th>Massagesitze</th>
                    <th>Belüftete Sitze</th>
                    <th>Lenkrad Material</th>
                </tr>
                </thead>
                <tbody>
                {interieur.map((interieur: Interieur, index) => (
                    <tr key={index}>
                        <td>{interieur.SitzAnzahl}</td>
                        <td>{interieur.SitzMaterial}</td>
                        <td>{interieur.SitzArt}</td>
                        <td>{interieur.Sitzheizung}</td>
                        <td>{interieur.Massagesitze}</td>
                        <td>{interieur.BeluefteteSitze}</td>
                        <td>{interieur.LenkradMaterial}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default InterieurList;