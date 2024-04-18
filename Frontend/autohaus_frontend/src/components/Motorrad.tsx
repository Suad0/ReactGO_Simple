import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Motor from "../../../../../../../../Downloads/Motor";
import Getriebe from "../../../../../../../../Downloads/Getriebe";
import Bereifung from "../../../../../../../../Downloads/Bereifung";

interface Motorrad {
    Hersteller: string
    Modell: string
    Tankvolumen: string
    Sitzhoehe: number
    VMax: number
    KmStand: number
    Gebraucht: boolean
    Verleihen: boolean
    Preis: number
    Gewicht: number
    Bauform: string
    MotorID: number
    GetriebeID: number
    BereifungID: number
}

const MotorradList = () => {
    const [motorrad, setMotorrad] = useState([]);

    useEffect(() => {
        const fetchMotorrad = async () => {
            try {
                const response = await axios.get('http://localhost:9000/motorrad');
                setMotorrad(response.data.motorrad);
                console.log(response)
            } catch (error) {
                console.error('Error fetching motorrad:', error);
            }
        };

        fetchMotorrad();
    }, []);


    return (
        <div>
            <h2>Motorrad List</h2>
            <table>
                <thead>
                <tr>
                    <th>Hersteller</th>
                    <th>Modell</th>
                    <th>Tankvolumen</th>
                    <th>Sitzhöhe</th>
                    <th>V Max</th>
                    <th>km Stand</th>
                    <th>Gebraucht</th>
                    <th>Verleihen</th>
                    <th>Preis</th>
                    <th>Gewicht</th>
                    <th>Bauform</th>
                    <th>Motor</th>
                    <th>Getriebe</th>
                    <th>Bereifung</th>
                </tr>
                </thead>
                <tbody>
                {motorrad.map((motorrad: Motorrad, index) => (
                    <tr key={index}>
                        <td>{motorrad.Hersteller}</td>
                        <td>{motorrad.Modell}</td>
                        <td>{motorrad.Tankvolumen}</td>
                        <td>{motorrad.Sitzhoehe}</td>
                        <td>{motorrad.VMax}</td>
                        <td>{motorrad.KmStand}</td>
                        <td>{motorrad.Gebraucht}</td>
                        <td>{motorrad.Verleihen}</td>
                        <td>{motorrad.Preis}</td>
                        <td>{motorrad.Gewicht}</td>
                        <td>{motorrad.Bauform}</td>
                        <td><Motor></Motor></td>
                        <td><Getriebe></Getriebe></td>
                        <td><Bereifung></Bereifung></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default MotorradList;