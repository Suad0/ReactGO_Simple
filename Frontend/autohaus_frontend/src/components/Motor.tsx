import React, {useState, useEffect} from 'react';
import axios from 'axios';

interface Motor {
    Hubraum: number
    Kraftstoff: string
    ZylinderAnzahl: number
    Bauform: string
    Ansaugung: string
    Kuehlung: string
    Drehmoment: number
    Leistung: number
    MaxDrehzahl: number
}

const MotorList = () => {
    const [motor, setMotor] = useState([]);

    useEffect(() => {
        const fetchMotor = async () => {
            try {
                const response = await axios.get('http://localhost:9000/motor');
                setMotor(response.data.motor);
                console.log(response)
            } catch (error) {
                console.error('Error fetching motor:', error);
            }
        };

        fetchMotor();
    }, []);


    return (
        <div>
            <h2>Motor List</h2>
            <table>
                <thead>
                <tr>
                    <th>Hubraum</th>
                    <th>Kraftstoff</th>
                    <th>Zylinder Anzahl</th>
                    <th>Bauform</th>
                    <th>Ansaugung</th>
                    <th>Kuehlung</th>
                    <th>Drehmoment</th>
                    <th>Leistung</th>
                    <th>Max Drehzahl</th>
                </tr>
                </thead>
                <tbody>
                {motor.map((motor: Motor, index) => (
                    <tr key={index}>
                        <td>{motor.Hubraum}</td>
                        <td>{motor.Kraftstoff}</td>
                        <td>{motor.ZylinderAnzahl}</td>
                        <td>{motor.Bauform}</td>
                        <td>{motor.Ansaugung}</td>
                        <td>{motor.Kuehlung}</td>
                        <td>{motor.Drehmoment}</td>
                        <td>{motor.Leistung}</td>
                        <td>{motor.MaxDrehzahl}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default MotorList;