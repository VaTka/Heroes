import React, {useEffect, useState} from 'react';
import {Col, Container, Image} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {fetchOneHero} from "../http/HeroApi";

const HeroPage = () => {
    const [hero, setHero] = useState({info: []})

    const {id} = useParams()

    useEffect(() => {
        fetchOneHero(id).then(data => setHero(data))
    }, [])

    console.log(hero)

    return (
        <Container className={"mt-3"}>
            <Col>
                <Image height={300} src={ process.env.REACT_APP_API_URL + hero.images}/>
                <h2>{hero.nickname}</h2>
                <div>{hero.origin_description}</div>
                <div>{hero.superpowers}</div>
                <div>{hero.catch_phrase}</div>
            </Col>
        </Container>
    );
};

export default HeroPage;
