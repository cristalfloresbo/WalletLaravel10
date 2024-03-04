import React from 'react';
import ReactDOM from 'react-dom';

function Example() {
    return (
        // <div className="container">
        //     <div className="row justify-content-center">
        //         <div className="col-md-8">
        //             <div className="card">
        //                 <div className="card-header">Example Component</div>

        //                 <div className="card-body">I'm an example component!</div>
        //             </div>
        //         </div>
        //     </div>
        //     <button type="button" class="btn btn-primary">Primary</button>
        // </div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <p className='title'> $ 1000 </p>
                </div>
                <div className="col-md-12">
                    <form class="row g-3 justify-content-center">
                        <div class="col-auto">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Description"
                            />
                        </div>
                        <div class="col-auto">
                            <div className="input-group mx-sm-2 mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">$</div>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="mount"
                                />
                            </div>
                        </div>
                        <div class="col-auto">
                            <button
                                type="submit"
                                className="btn btn-primary mb-2"
                            >
                                Add
                            </button>
                        </div>
                    </form>
                    <table class="table">
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Example</td>
                                <td>1200</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById("example"));
    // const Index = ReactDOM.createRoot(document.getElementById("example"));

    // Index.render(
    //     <React.StrictMode>
    //         <Example/>
    //     </React.StrictMode>
    // )
}
