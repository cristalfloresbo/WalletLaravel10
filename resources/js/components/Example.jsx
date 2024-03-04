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
                <div className="col-md-12 m-t-md">
                    <p className='title'> $ 1000 </p>
                </div>
                <div className="col-md-12">
                    <form className="form-inline justify-content-center">
                        <div className='form-group mb-2'>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Description"
                            />
                        </div>
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
                        <button 
                            type="submit"
                            className="btn btn-primary mb-2"
                        >
                            Add
                        </button>
                    </form>
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
