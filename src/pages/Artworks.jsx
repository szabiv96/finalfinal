import React from 'react';
import Artpiece from '../components/Artpiece';

export default function Artworks({artpieces, search, favPics}) {

    return (
        <Artpiece artpieces={artpieces} search={search} favPics={favPics} ></Artpiece>
    );
}

