import React, { useState } from 'react';
import './FoodMenu.css';
import { Card } from 'react-bootstrap';
import { FaStar } from "react-icons/fa";
import BookMarkBtn from '../BookMarkBtn/BookMarkBtn';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const FoodMenu = ({ dishes }) => {

    return (
        <div className='food-menu-section'>
            <div className="section-title text-center">
                <h1>TASTY RECIPE</h1>
                <div className='section-title-bottom'>
                    <span className='slt'></span>
                    <span style={{ color: 'var(--primary-color' }}> CHEF'S CHOICE </span>
                    <span className='srt'></span>
                </div>
            </div>
            <div className="food-menu-container container">

                {
                    dishes.map(dish =>

                        <Card className='shadow foodCard' key={dish.id}>
                            <Card.Img variant="top" src={dish.image} />
                            <Card.Body>
                                <Card.Title>{dish.name}</Card.Title>
                                <div>
                                    <h6 className='chef-position'>Cooking Method: {dish.cooking_method}</h6>
                                </div>
                                <div><strong>Ingredients:</strong>
                                    <ul>
                                        {
                                            dish.ingredients.map((item, index) => <li key={index}>{item}</li>)
                                        }
                                    </ul>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div className='rating-div'>
                                        <Rating style={{ maxWidth: 150 }} value={dish.rating} readOnly />
                                    </div>
                                    <BookMarkBtn key={dish.id} />
                                </div>
                            </Card.Body>
                        </Card>
                    )
                }

            </div>
        </div>
    );
};

export default FoodMenu;