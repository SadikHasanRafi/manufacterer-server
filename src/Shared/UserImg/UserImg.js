import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const UserImg = () => {
    const [user] = useAuthState(auth);
    return (
        <div> <label tabIndex="0" class="m-3" style={{}}>
            <div class="avatar mr-8">
              <div class="w-12 rounded-full border-4">
                <img srcSet={user.photoURL} />
              </div>
            </div>
          </label>
          </div>
    );
};

export default UserImg;