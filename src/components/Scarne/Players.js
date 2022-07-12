import React, { useState, useEffect } from "react";

function Players({ playerOneTotal, playerTwoTotal }) {
    return (
        <section id="players-wrapper">
            <section>
                <h1>Player 1</h1>
                <p>Total: {playerOneTotal}</p>
            </section>
            <section>
                <h1>Player 2</h1>
                <p>Total: {playerTwoTotal}</p>
            </section>
        </section>
    );
}

export default Players;
