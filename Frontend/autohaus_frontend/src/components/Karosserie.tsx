import React, {useState, useEffect} from 'react';
import axios from 'axios';

interface Karosserie {
    Bauform: string
    Material: string
    Farbe: string
}

const KarosserieList = () => {
    const [karosserie, setKarosserie] = useState([]);

    useEffect(() => {
        const fetchKarosserie = async () => {
            try {
                const response = await axios.get('http://localhost:9000/karosserie');
                setKarosserie(response.data.karosserie);
                console.log(response)
            } catch (error) {
                console.error('Error fetching karosserie:', error);
            }
        };

        fetchKarosserie();
    }, []);


    return (
        <div>
            <h2>Karosserie List</h2>
            <table>
                <thead>
                <tr>
                    <th>Bauform</th>
                    <th>Material</th>
                    <th>Farbe</th>
                </tr>
                </thead>
                <tbody>
                {karosserie.map((karosserie: Karosserie, index) => (
                    <tr key={index}>
                        <td>{karosserie.Bauform}</td>
                        <td>{karosserie.Material}</td>
                        <td>{karosserie.Farbe}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default KarosserieList;