import React from 'react';
import NotMatch from './NotMatch'

const User = (props) => {
  const user_id=Number(props.match.params.user);
  const is_not_number=isNaN(user_id)
  console.log(is_not_number)
  if(!is_not_number){
    return (
        <div>
          User profile page.
        </div>
    );
  }
  return <NotMatch/>
};

export default User;