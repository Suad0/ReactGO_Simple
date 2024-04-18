import React, {useState, useEffect} from 'react';
import axios from 'axios';

interface Bereifung {
    ReifenHersteller: string
    ReifenModell: string
    FelgenHersteller: string
    FelgenModell: string
    FelgenMaterial: string
    ReifenDimensionen: string
}

const BereifungList = () => {
    const [bereifung, setBereifung] = useState([]);

    useEffect(() => {
        const fetchBereifung = async () => {
            try {
                const response = await axios.get('http://localhost:9000/bereifung');
                setBereifung(response.data.bereifung);
                console.log(response)
            } catch (error) {
                console.error('Error fetching bereifung:', error);
            }
        };

        fetchBereifung();
    }, []);


    return (
        <div>
            <h2>Bereifung List</h2>
            <table>
                <thead>
                <tr>
                    <th>Reifen Hersteller</th>
                    <th>Reifen Modell</th>
                    <th>Felgen Hersteller</th>
                    <th>Felgen Modell</th>
                    <th>Felgen Material</th>
                    <th>Reifen Dimension</th>
                </tr>
                </thead>
                <tbody>
                {bereifung.map((bereifung: Bereifung, index) => (
                    <tr key={index}>
                        <td>{bereifung.ReifenHersteller}</td>
                        <td>{bereifung.ReifenModell}</td>
                        <td>{bereifung.FelgenHersteller}</td>
                        <td>{bereifung.FelgenModell}</td>
                        <td>{bereifung.FelgenMaterial}</td>
                        <td>{bereifung.ReifenDimensionen}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default BereifungList;