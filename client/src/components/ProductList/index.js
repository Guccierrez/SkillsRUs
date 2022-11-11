import React, { useEffect } from 'react';
import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';

function ProductList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    console.log(data)
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        skills: data.skills,
      });
      data.skills.forEach((skill) => {
        idbPromise('skills', 'put', skill);
      });
    } else if (!loading) {
      idbPromise('skills', 'get').then((skills) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          skills: skills,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (skill) => skill.category._id === currentCategory
    );
  }

  return (
    <div className="my-2">
      <h2>Our Products:</h2>
      {state.products.length ? (
        <div className="flex-row">
          {filterProducts().map((skill) => (
            <ProductItem
              key={skill._id}
              _id={skill._id}
              image={skill.image}
              name={skill.name}
              price={skill.price}
              quantity={skill.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any skills yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ProductList;
