import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import TransferForm from './TransferForm';
import TransferList from './TransferList';

function Example() {
    const [ money, setMoney ] = useState(0.0);
    const [ transfers, setTransfers] = useState([]);
    const [ error, setError] = useState();

    const loadWallet = async () => {
        try {
            let res = await fetch("http://localhost:8000/api/wallet");
            let data = await res.json();
            setMoney(data.money);
            setTransfers(data.transfers);
        } catch (error) {
            setError(error);
        }
    }

    useEffect(() => {
        loadWallet();
    }, [])

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <p className='title'> $ {money}</p>
                </div>
                <div className="col-md-12">
                    <TransferForm />
                </div>
                <div className="col-md-12">
                    <TransferList transfers={transfers} />
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    // ReactDOM.render(<Example />, document.getElementById("example"));
    const Index = ReactDOM.createRoot(document.getElementById("example"));

    Index.render(
        <React.StrictMode>
            <Example />
        </React.StrictMode>
    )
}
