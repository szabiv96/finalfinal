import React from 'react';
import Artpiece from '../components/Artpiece';

export default function Artworks({artpieces, search}) {

    return (
        <Artpiece artpieces={artpieces} search={search} ></Artpiece>
    );
}

