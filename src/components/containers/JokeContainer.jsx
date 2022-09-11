import React, { useState, useEffect } from 'react';
import { getRandomJoke } from '../../services/axios-service';
import { Card, Typography ,Button, Alert, Chip, Badge } from '@mui/material';
import '../../styles/global.scss';

const JokeContainer = () => {

    const [joke, setJoke] = useState('');
    const [likes, setLikes] = useState(0)
    const [dislikes, setDislikes] = useState(0)

    useEffect(() => {
        obtainNewJoke();
    }, []);

    const obtainNewJoke = async() => {
        getRandomJoke()
            .then((response) => {
                if(response.status === 200) {
                    setJoke(response.data.value);
                }
            })
            .catch((error) => {
                return(<Alert>Something went wrong: {error}</Alert>)
            })
            .finally()
    }

    const countLikes = () => {
        setLikes(likes + 1);
    }

    const countDislikes = () => {
        setDislikes(dislikes + 1);
        
    }

    return (
        <>
            <Card className='joke-container'>
                <Typography variant='h5' component='h3' className='joke-item'>The Chuck Norris Generator</Typography>
                <Typography variant='p' component='p' className='joke-item'>{ joke }</Typography>

                <div className="control-handler">
                    <Button onClick={ obtainNewJoke }>Get new joke</Button>
                    <Button onClick={ countLikes } variant='contained'>Like</Button>
                    <Button onClick={ countDislikes } variant='outlined'>Dislike</Button>
                </div>
            </Card>
            <div className="data-display">

            <Badge badgeContent={likes} color="primary">
                <Chip label='Likes' variant='outlined' />
            </Badge>

            <Badge badgeContent={dislikes} color="primary">
                <Chip label='Dislikes' variant='outlined' />
            </Badge>

            </div>
        </>
    );
}

export default JokeContainer;
