import React, { useEffect } from 'react';
import SkillItem from '../SkillItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_SKILLS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_SKILLS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';

function SkillList({profile, setProfile}) {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_SKILLS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_SKILLS,
        skills: data.skills,
      });
      data.skills.forEach((skill) => {
        idbPromise('skills', 'put', skill);
      });
    } else if (!loading) {
      idbPromise('skills', 'get').then((skills) => {
        dispatch({
          type: UPDATE_SKILLS,
          skills: skills,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterSkills() {
    if (!currentCategory) {
      return state.skills;
    }

    return state.skills.filter(
      (skill) => skill.category._id === currentCategory
    );
  }

  return (
    <div className="my-2">
      <h2>{profile?.firstName ? profile.firstName + "'s" : "Our"} Skills:</h2>
      {state.skills.length ? (
        <div className="flex-row">
          {state.skills.map((skill)=> (
          // {filterSkills().map((skill) => (
            <SkillItem
              key={skill?._id}
              _id={skill?._id}
              image={skill?.image}
              name={skill?.name}
              price={skill?.price}
              quantity={skill?.quantity}
              description={skill?.description}
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

export default SkillList;
