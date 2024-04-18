import React, {useState, useEffect} from 'react';
import axios from 'axios';

interface Getriebe {
    GangAnzahl: number
    SchaltArt: string
}

const GetriebeList = () => {
    const [getriebe, setGetriebe] = useState([]);

    useEffect(() => {
        const fetchGetriebe = async () => {
            try {
                const response = await axios.get('http://localhost:9000/getriebe');
                setGetriebe(response.data.getriebe);
                console.log(response)
            } catch (error) {
                console.error('Error fetching getriebe:', error);
            }
        };

        fetchGetriebe();
    }, []);


    return (
        <div>
            <h2>Getriebe List</h2>
            <table>
                <thead>
                <tr>
                    <th>Gang Anzahl</th>
                    <th>Schalt Art</th>
                </tr>
                </thead>
                <tbody>
                {getriebe.map((getriebe: Getriebe, index) => (
                    <tr key={index}>
                        <td>{getriebe.GangAnzahl}</td>
                        <td>{getriebe.SchaltArt}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default GetriebeList;