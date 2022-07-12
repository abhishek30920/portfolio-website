import React from "react";
import {Link} from "react-router-dom"

export default function GotoComponent(){

    return <section>
        <Link to="/material">Material</Link>
        <Link to="/mouse-move">Mouse Move</Link>
        <Link to="/quote">Random Quote</Link>
    </section>
} 