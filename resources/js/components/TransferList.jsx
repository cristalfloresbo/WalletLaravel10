import React from "react";

const TransferList = ({ transfers }) => (
    <table className="table">
        <tbody>
            {transfers.map((transfer, index) => (
                <tr key={transfer.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{transfer.description}</td>
                    <td className={transfer.mount > 0 ? "text-success": "text-danger"}>
                        {transfer.mount}
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
)

export default TransferList;