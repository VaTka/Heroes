import React, {useContext, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createHero} from "../../http/HeroApi";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const CreateHero = observer(({show, onHide}) => {

    const {hero} = useContext(Context)

    const [nickname, setNickname] = useState('')
    const [real_name, setReal_name] = useState('')
    const [origin_description, setOrigin_description] = useState('')
    const [superpowers, setSuperpowers] = useState('')
    const [catch_phrase, setCatch_phrase] = useState('')
    const [images, setImages] = useState(null)

    const addHero = () => {
        createHero({nickname: nickname}).then(data => {
            setNickname('')
            onHide()
        })}

    const selectFile = e => {
        setImages(e.target.files[0])
    }

    const addServerHero = () => {
        const formData = new FormData()
        formData.append('nickname', nickname)
        formData.append('real_name', real_name)
        formData.append('origin_description', origin_description)
        formData.append('superpowers', superpowers)
        formData.append('catch_phrase', catch_phrase)
        formData.append('images', images)
        createHero(formData).then(data => onHide)
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Hero
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={nickname}
                        onChange={e => setNickname(e.target.value)}
                        placeholder={'nickname'}
                    />
                    <Form.Control
                        value={real_name}
                        onChange={e => setReal_name(e.target.value)}
                        placeholder={'real_name'}
                    />
                    <Form.Control
                        value={origin_description}
                        onChange={e => setOrigin_description(e.target.value)}
                        placeholder={'origin_description'}
                    />
                    <Form.Control
                        value={superpowers}
                        onChange={e => setSuperpowers(e.target.value)}
                        placeholder={'superpowers'}
                    />
                    <Form.Control
                        value={catch_phrase}
                        onChange={e => setCatch_phrase(e.target.value)}
                        placeholder={'catch_phrase'}
                    />
                    <Form.Control
                        // value={images}
                        type={'file'}
                        onChange={selectFile}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-danger'} onClick={onHide}>Close</Button>
                <Button variant={'outline-success'} onClick={addServerHero}>Add Hero</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateHero;
