import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import TransferForm from './TransferForm';
import TransferList from './TransferList';

function Example() {
    const [money, setMoney] = useState(0.0);
    const [transfers, setTransfers] = useState([]);
    const [error, setError] = useState();
    const [form, setForm] = useState({
        description: "",
        mount: "",
        wallet_id: 1,
    });

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

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            let config = {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form),
            }
            let res = await fetch("http://localhost:8000/api/transfer", config);
            let data = await res.json();
            setTransfers([data, ...transfers])
            setMoney( parseInt(money) + parseInt(data.mount));
            setForm({
                description: "",
                mount: "",
                wallet_id: 1,
            });
        } catch (error) {
            setError(error);
        }
        console.log("sending...");
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
                    <TransferForm form={form} setForm={setForm} onSubmit={handleOnSubmit} />
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
