import React from 'react';
import {Link} from "react-router-dom";

function Main(props) {
    return (
        <main className={'flow'}>
            <div className="section-initial">
                <div className="container">
                    <div className="container-inner-box">

                        <h1>Try request</h1>
                        <button className={'btn fs-500'}>
                            <a href="http://localhost:4000/users">
                                getUsers
                            </a>
                        </button>
                        <div className={'copy-to-clipboard'}>
                            <h3>Or just copy</h3>
                            <div>http://localhost:4000/users</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-about">
                <div className="container">
                    <div className="container-inner-box">

                        <h2>About this project</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid possimus
                            temporibus
                            voluptatem? At, commodi eveniet laborum minima minus totam.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus enim numquam recusandae
                            veritatis voluptatem.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;