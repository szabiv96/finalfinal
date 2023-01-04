import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react'

export default function Search({artpieces, setSearch, search}) {

    /* console.log(search); */

    return (
        <Form className="d-flex">
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
            />
            <Button variant="outline-success">Search</Button>
        </Form>
    )
}
