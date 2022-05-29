import React from "react";

const Blog = () => {
  return (
    <div className="flex justify-center my-20">
      <div className="  gap-4 grid grid-cols-1 sm:grid-cols-3 sm:gap-24 mx-7 sm:mx-60">
        <div class=" mockup-code shadow-2xl bg-secondary pb-0">
          <div class="card-body rounded-botom-xl bg-info  break-words ">
            <code className=" text-cyan-100">
              <span className=" text-lg font-bold"> $ </span>How will you improve the performance of a React Application?</code>
            <code className="text-green-400">
              <span className=" text-lg font-bold"> </span>To make react web app faster it needs to avoid unnecessary props transfer as it is make a cpu load which creates slow performance. Then in react there are many things to be load or render. Here we need to make a plan so that the slower things can be loaded in background or later and faster things load first. Then avoiding redundancy and duplicating code can boost performance a bit. </code>
          </div>
        </div>

        <div class=" mockup-code shadow-2xl bg-secondary pb-0">
          <div class="card-body rounded-botom-xl bg-info  break-words ">
            <code className=" text-cyan-100">
              <span className=" text-lg font-bold"> $ </span>What are the different ways to manage a state in a React application?</code>
            <code className="text-green-400">
              <span className=" text-lg font-bold"></span>State is used to synced with the changed data in UI. It helps to sync all component with updated data and re-render component if they are needed. Managing this is the hardest part and to solve this problem there are many tools out there. There are so many state management libraries/tools available, including Redux, MobX, Flux, RxJS, and more.</code>
          </div>
        </div>

        <div class=" mockup-code shadow-2xl bg-secondary pb-0">
          <div class="card-body rounded-botom-xl bg-info  break-words ">
            <code className=" text-cyan-100">
              <span className=" text-lg font-bold"> $ </span>How does prototypical inheritance work?</code>
            <code className="text-green-400">
              <span className=" text-lg font-bold"> </span>In js this prototypical inheritance is the way that how js share their object property or method with other object. When a property is read from a object and it's missing value, js automatically takes that from the prototype and this is known as prototypical inheritance.</code>
          </div>
        </div>

        <div class=" mockup-code shadow-2xl bg-secondary pb-0">
          <div class="card-body rounded-botom-xl bg-info  break-words ">
            <code className=" text-cyan-100">
              <span className=" text-lg font-bold"> $ </span>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</code>
            <code className="text-green-400">
              <span className=" text-lg font-bold"> </span>Generally in react hooks return array where it has two element. Among them there is a function known as set function. Hooks normally used to sync state or data with the current value or data and then re-render that component. Here this set function is used to sync with the current state or value and then other element of array is used to get the current or latest data or state.</code>
          </div>
        </div>

        <div class=" mockup-code shadow-2xl bg-secondary pb-0">
          <div class="card-body rounded-botom-xl bg-info  break-words ">
            <code className=" text-cyan-100">
              <span className=" text-lg font-bold"> $ </span>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</code>
            <code className="text-green-400">
              <span className=" text-lg font-bold"> </span>In this case I will use filter method. Filter takes a function as a parameter which has a by default parameter and this parameter gets all the element value of an array. And in this parameter function we can do whatever we want to do with that parameter (which has single element of array). This filter function returns an array.</code>
          </div>
        </div>

        <div class=" mockup-code shadow-2xl bg-secondary pb-0">
          <div class="card-body rounded-botom-xl bg-info  break-words ">
            <code className=" text-cyan-100">
              <span className=" text-lg font-bold"> $ </span>What is a unit test? Why should write unit tests?</code>
            <code className="text-green-400">
              <span className=" text-lg font-bold"> </span>Unit testing is a software development technique in which the smallest testable pieces of a program, referred to as units, are examined separately and independently for correct functioning. Unit tests are written by developers so that they may run them frequently to ensure that no bugs have been introduced. This makes your code's implementation details shorter and simpler to comprehend.</code>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Blog;
