import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';

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
        <div className="grid grid-cols-3 gap-4">
            <div className="card col-span-3">
                <DataTable value={kunden}>
                    <Column field="Name" header="Name"></Column>
                    <Column field="Telefon" header="Telefon"></Column>
                    <Column field="Email" header="Email"></Column>
                </DataTable>
            </div>
        </div>
    );

};

export default KundenList;
