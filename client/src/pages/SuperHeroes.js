import React, {useContext, useEffect, useState} from 'react';
import {Card, Col, Container, Button, Image} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useNavigate} from "react-router-dom";
import {fetchHero} from "../http/HeroApi";
import CreateHero from "../components/modals/CreateHero";
import Pages from "../components/Pages";

const SuperHeroes = observer(() => {
    const {hero} = useContext(Context)
    const history = useNavigate()

    const [heroVisible, setHeroVisible] = useState(false)

    useEffect(() => {
        fetchHero(1, 5).then(data => {
            hero.setHero(data.rows)
            hero.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchHero(hero.page, 5).then(data => {
            hero.setHero(data.rows)
            hero.setTotalCount(data.count)
        })
    }, [hero.page])

    return (
        <Container>
            <Col className={"d-flex"}>
                {hero.hero.map(hero =>
                    <Card
                        style={{cursor: "pointer"}}
                        key={hero.id}
                        className={"p-3"}
                        onClick={() => hero.setSelectedHero(hero)}
                    >
                        <Image width={150} height={150} src={process.env.REACT_APP_API_URL + hero.images} onClick={() => history("/hero" + "/" + hero.id)}/>
                        {hero.nickname}
                    </Card>
                )}
            </Col>
            <Pages/>

            <Button onClick={() => setHeroVisible(true)}>Add</Button>
            <CreateHero show={heroVisible} onHide={() => setHeroVisible(false)} />

        </Container>
    );
});

export default SuperHeroes;
