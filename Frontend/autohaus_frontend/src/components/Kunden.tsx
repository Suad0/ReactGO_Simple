import React, {useState, useEffect} from 'react';
import axios from 'axios';

interface Kunde {
    Name: string,
    Telefon: string,
    Email: string
}

const KundenList = () => {
    const [kunden, setKunden] = useState([]);

    useEffect(() => {
        const fetchKunden = async () => {
            try {
                const response = await axios.get('http://localhost:9000/kunden');
                setKunden(response.data.kunden);
                console.log(response)
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
                        <td>{kunde.Name}</td>
                        <td>{kunde.Telefon}</td>
                        <td>{kunde.Email}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default KundenList;
