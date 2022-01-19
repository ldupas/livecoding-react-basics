import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AnimalDetails = () => {
    const [animalInfos, setAnimalInfos] = useState([]);
    const params = useParams();

    useEffect(() => {
        axios
        .get(`https://a.nacapi.com/zoolive/${params.id}`)
        .then((res) => {
            setAnimalInfos(res.data)
        })
    }, [params.id])

    return (
        <div>
            <h1>Coucou</h1>
            {animalInfos.name}
        </div>
    )
}

export default AnimalDetails
