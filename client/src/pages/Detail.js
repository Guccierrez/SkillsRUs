import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {Button} from "semantic-ui-react";
import Cart from '../components/Cart';
import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_SKILLS,
} from '../utils/actions';
import { QUERY_SKILLS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import spinner from '../assets/spinner.gif';

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentSkill, setCurrentSkill] = useState({});

  const { loading, data } = useQuery(QUERY_SKILLS);

  const { skills, cart } = state;

  useEffect(() => {
    // already in global store
    if (skills.length) {
      setCurrentSkill(skills.find((skill) => skill._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_SKILLS,
        skills: data.skills,
      });

      data.skills.forEach((skill) => {
        idbPromise('skills', 'put', skill);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('skills', 'get').then((indexedSkills) => {
        dispatch({
          type: UPDATE_SKILLS,
          skills: indexedSkills,
        });
      });
    }
  }, [skills, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        skill: { ...currentSkill, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...currentSkill, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentSkill._id,
    });

    idbPromise('cart', 'delete', { ...currentSkill });
  };

  return (
    <>
      {currentSkill && cart ? (
        <div className="container my-1">
          <Link to="/">← Back to Skills</Link>

          <h2>{currentSkill.name}</h2>

          <p>{currentSkill.description}</p>

          <p>
            <strong>Price:</strong>${currentSkill.price}{' '}
            <Button onClick={addToCart}  color = "red">Add to Cart</Button>
            <Button color = "red"
              disabled={!cart.find((p) => p._id === currentSkill._id)}
              onClick={removeFromCart}
            >
              Remove from Cart
            </Button>
          </p>

          <img
            src={`/images/${currentSkill.image}`}
            alt={currentSkill.name}
          />
        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
      <Cart />
    </>
  );
}

export default Detail;
