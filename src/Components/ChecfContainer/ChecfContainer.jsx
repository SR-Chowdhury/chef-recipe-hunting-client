import React from 'react';
import './ChecfContainer.css'
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChecfContainer = ({ chefInfo }) => {


    return (
        <div className='container checf-container'>
            <div className="section-title text-center">
                <h1>MEET OUR CHEF</h1>
                <div className='section-title-bottom'>
                    <span className='slt'></span>
                    <span style={{ color: 'var(--primary-color' }}> PROFESSIONAL COOK TEAM</span>
                    <span className='srt'></span>
                </div>
            </div>
            <div className="chef-card-container">

                {
                    chefInfo.map(item => 
                    <Card key={item.id}>
                        <Card.Img className='card-img w-50 mx-auto' variant="top" src={item.image} />
                        <Card.Body className='cardBody'>
                            <Card.Title>{item.name}</Card.Title>
                            <p>{item.position}</p><hr />
                            <div className='d-flex justify-content-between g-5'>
                                <p>Experince: {item.experience}Y</p>
                                <p>No. Recipie: {item.recipes}</p>
                            </div>
                            <Link to={`/chef-recipe/${item.id}`}><button className='primaryBtn'>View Recipes</button></Link>
                        </Card.Body>
                    </Card>)
                }

            </div>
        </div>
    );
};

export default ChecfContainer;