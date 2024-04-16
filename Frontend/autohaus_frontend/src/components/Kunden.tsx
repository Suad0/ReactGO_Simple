import React, {useState, useEffect} from 'react';
import axios from 'axios';

interface Kunde {
    name: string,
    telefon: string,
    email: string
}

const KundenList = () => {
    const [kunden, setKunden] = useState([]);

    useEffect(() => {
        const fetchKunden = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/kunden');
                setKunden(response.data.kunden);
            } catch (error) {
                console.error('Error fetching kunden:', error);
            }
        };

        fetchKunden();
    }, []);


    return (
        <div>
            <h2>Kunden List</h2>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Telefon</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {kunden.map((kunde: Kunde, index) => (
                    <tr key={index}>
                        <td>{kunde.name}</td>
                        <td>{kunde.telefon}</td>
                        <td>{kunde.email}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default KundenList;
