import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Motor from "./Motor";
import Getriebe from "./Getriebe";
import Interieur from "./Interieur";
import Bereifung from "./Bereifung";
import Karosserie from "./Karosserie";

interface Auto {
    Hersteller: string
    Modell: string
    Gebraucht: boolean
    KmStand: number
    Verleihen: boolean
    Preis: number
    Tankvolumen: number
    VMax: number
    Gewicht: number
    MotorID: number
    GetriebeID: number
    InterieurID: number
    BereifungID: number
    KarosserieID: number
}

const AutoList = () => {
    const [auto, setAuto] = useState([]);

    useEffect(() => {
        const fetchAuto = async () => {
            try {
                const response = await axios.get('http://localhost:9000/auto');
                setAuto(response.data.auto);
                console.log(response)
            } catch (error) {
                console.error('Error fetching auto:', error);
            }
        };

        fetchAuto();
    }, []);


    return (
        <div>
            <h2>Auto List</h2>
            <table>
                <thead>
                <tr>
                    <th>Hersteller</th>
                    <th>Modell</th>
                    <th>Gebraucht</th>
                    <th>km Stand</th>
                    <th>Verleihen</th>
                    <th>Preis</th>
                    <th>Tankvolumen</th>
                    <th>V Max</th>
                    <th>Gewicht</th>
                    <th>Motor</th>
                    <th>Getriebe</th>
                    <th>Interieur</th>
                    <th>Bereifung</th>
                    <th>Karosserie</th>
                </tr>
                </thead>
                <tbody>
                {auto.map((auto: Auto, index) => (
                    <tr key={index}>
                        <td>{auto.Hersteller}</td>
                        <td>{auto.Modell}</td>
                        <td>{auto.Gebraucht}</td>
                        <td>{auto.KmStand}</td>
                        <td>{auto.Verleihen}</td>
                        <td>{auto.Preis}</td>
                        <td>{auto.Tankvolumen}</td>
                        <td>{auto.VMax}</td>
                        <td>{auto.Gewicht}</td>
                        <td><Motor></Motor></td>
                        <td><Getriebe></Getriebe></td>
                        <td><Interieur></Interieur></td>
                        <td><Bereifung></Bereifung></td>
                        <td><Karosserie></Karosserie></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default AutoList;