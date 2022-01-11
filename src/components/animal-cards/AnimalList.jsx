import { useState, useEffect } from 'react';
import axios from 'axios';
import Animal from './Animal';
import './AnimalList.css';

const AnimalList = () => {
    const [animals, setAnimals] = useState([]);

    // useEffect(() => {
    //     fetch("https://a.nacapi.com/zoolivecoding")
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(console.error)
    // }, [])

    const url = "https://a.nacapi.com/zoolivecoding"

    useEffect(() => {
        axios
        .get(url)
        .then((res) => res.data)
        .then((data) => setAnimals(data))
    }, [])

    // const lion = {
    //     name: "Simba",
    //     species: "lion",
    //     age: 6,
    //     image: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
    // };

    // const panda = {
    //     name: "Bambou",
    //     species: "panda",
    //     age: 3,
    //     image: "https://images.unsplash.com/photo-1527118732049-c88155f2107c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
    // };

    // const butterfly = {
    //     name: "Yoni",
    //     species: "butterfly",
    //     age: "unknown",
    //     image: "https://images.unsplash.com/photo-1485842295075-1c7b2037114c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=361&q=80"
    // };

    // const animals = [
    //     {
    //         name: "Simba",
    //         species: "lion",
    //         age: 6,
    //         image: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
    //     },
    //     {
    //         name: "Bambou",
    //         species: "panda",
    //         age: 3,
    //         image: "https://images.unsplash.com/photo-1527118732049-c88155f2107c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
    //     },
    //     {
    //         name: "Yoni",
    //         species: "butterfly",
    //         age: "unknown",
    //         image: "https://images.unsplash.com/photo-1485842295075-1c7b2037114c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=361&q=80"
    //     }
    // ];

    return (
        <div className='AnimalList'>
            <h2 className='section-title AnimalList-title'>Venez faire de belles rencontres !</h2>
            <div className='cards-container'>
                {/* <Animal {...lion} />
                <Animal {...panda} />
                <Animal {...butterfly} /> */}
                {
                    animals &&
                    animals.map((animal) => (
                        <div key={animal.id}>
                            <Animal animal={animal} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AnimalList
