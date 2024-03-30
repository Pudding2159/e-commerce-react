import React from 'react'
import '../styles/globals.css';

function LoginMenu({ email }) {
    return (
        <div className="h-screen w-screen">
            <div className="grid grid-flow-row">

                <div className="col-start-1">
                    Logged in {email}
                </div>

                <div className="col-start-2">
                    Dashboard
                </div>


                <div className="col-start-4" >
                    Product
                </div>
            </div>
        </div>
    )
}

export default LoginMenu