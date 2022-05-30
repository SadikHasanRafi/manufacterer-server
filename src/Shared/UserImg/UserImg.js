import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const UserImg = () => {
    const [user] = useAuthState(auth);
    return (
        <div> <label tabIndex="0" className="m-3" style={{}}>
            <div className="avatar mr-8">
              <div className="w-12 rounded-full border-4">
                <img srcSet={user.photoURL} />
              </div>
            </div>
          </label>
          </div>
    );
};

export default UserImg;