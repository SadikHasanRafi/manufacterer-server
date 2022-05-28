import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <div className="flex items-center justify-center mt-12 flex-wrap">
        <img className="rounded-xl" srcSet={user?.photoURL} />
        <div className="sm:ml-8 mx-26 text-center sm:text-left">
          <strong className="text-3xl capitalize">{user?.displayName}</strong>
          <p>
            Email: <strong>{user?.email}</strong>
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-[50vh]">
        <div className="border-2 rounded-xl p-5">
        <div className="mb-5">
          <label htmlhtmlFor="nation">Nationallity:</label>
          <input
            type="text"
            placeholder="Type here"
            name="nation"
            class="input input-bordered input-secondary w-full max-w-xs"
          />
        </div>
        <div className="my-5">
          <label htmlhtmlFor="id">Facebook ID:</label>
          <input
            type="text"
            name="id"
            placeholder="Type here"
            class="input input-bordered input-secondary w-full max-w-xs"
          />
        </div>
        <button class="btn btn-outline btn-ghost w-full">Button</button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
