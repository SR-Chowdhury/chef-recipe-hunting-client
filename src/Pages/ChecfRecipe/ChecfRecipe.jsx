import React, { Suspense, useEffect, useState } from 'react';
import Banner from '../../Components/Banner/Banner';
// import SingleChef from '../../Components/SingleChef/SingleChef';
import FoodMenu from '../../Components/FoodMenu/FoodMenu';
import { useLoaderData, useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const SingleChef = React.lazy(() => import('../../Components/SingleChef/SingleChef'));

const ChecfRecipe = () => {

    const [chef, setChef] = useState([]);
    const dishes = useLoaderData();
    const { id } = useParams();
    const chef_id = parseInt(id);

    useEffect(() => {
        fetch(`https://chef-recipe-hunting-server-sr-chowdhury.vercel.app/chef-info/${chef_id}`)
            .then(res => res.json())
            .then(data => setChef(data))
            .catch(err => console.log(err.message))
    }, []);

    return (
        <div>
            <Banner chef={chef} />
            <Suspense fallback={<Spinner animation="grow" variant="danger" />}>
                <SingleChef chef={chef} />
            </Suspense>
            <FoodMenu dishes={dishes} />
        </div>
    );
};

export default ChecfRecipe;