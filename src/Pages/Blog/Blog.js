import React from "react";

const Blog = () => {
  return (
    <div className="sm:mx-32 mx-2 mb-5">
      {/* Question 1 */}
      <div className="mt-3">
        <h1 className="text-xl sm:text-3xl font-serif font-semibold mb-3  ">
          What are the different ways to manage a state in a React application?
        </h1>
        <h3 className="text-lg sm:text-xl  font-semibold">
          There are four main types of state you need to properly manage in your
          React apps: <br />
          1. Local state <br />
          2. Global state <br /> 3. Server state <br />
          4. URL state
        </h3>
        <p className="sm:text-lg">
          <strong className="text-xl"> Local state</strong> is most often
          managed in React using the useState hook. For example, local state
          would be needed to show or hide a modal component or to track values
          for a form component, such as form submission, when the form is
          disabled and the values of a form’s inputs.
        </p>
        <p className="sm:text-lg">
          <strong className="text-xl"> Global state</strong> is necessary when
          we want to get and update data anywhere in our app, or in multiple
          components at least. A common example of global state is authenticated
          user state. If a user is logged into our app, it is necessary to get
          and change their data throughout our application.
        </p>
        <p className="sm:text-lg">
          <strong className="text-xl">Server state </strong> is a simple
          concept, but can be hard to manage alongside all of our local and
          global UI state. There are several pieces of state that must be
          managed every time you fetch or update data from an external server,
          including loading and error state.
        </p>
        <p className="sm:text-lg">
          <strong className="text-xl">URL state </strong>is often missing as a
          category of state, but it is an important one. In many cases, a lot of
          major parts of our application rely upon accessing URL state. Try to
          imagine building a blog without being able to fetch a post based off
          of its slug or id that is located in the URL!
        </p>
      </div>
      {/* Question 2 */}
      <div className="mt-8">
        <h1 className="text-xl sm:text-3xl font-serif font-semibold mb-3  ">
          How does prototypical inheritance work?
        </h1>
        <p className="sm:text-lg">
          The Prototypal Inheritance is a feature in javascript used to add
          methods and properties in objects. It is a method by which an object
          can inherit the properties and methods of another object.
          Traditionally, in order to get and set the [[Prototype]] of an object,
          we use Object.getPrototypeOf and Object.
        </p>
      </div>
      {/* Question 3 */}
      <div className="mt-8">
        <h1 className="text-xl sm:text-3xl font-serif font-semibold mb-3  ">
          What is a unit test? Why should we write unit tests?
        </h1>
        <p className="sm:text-lg">
          The main objective of <strong>unit testing</strong> is to isolate
          written code to test and determine if it works as intended. Unit
          testing is an important step in the development process, because if
          done correctly, it can help detect early flaws in code which may be
          more difficult to find in later testing stages.
        </p>
        <p className="sm:text-lg">
          <strong> Advantages and disadvantages of unit testing:</strong>
          <br /> <strong>Advantages to unit testing include:</strong> The
          earlier a problem is identified, the fewer compound errors occur.
          Costs of fixing a problem early can quickly outweigh the cost of
          fixing it later. Debugging processes are made easier. Developers can
          quickly make changes to the code base. Developers can also re-use
          code, migrating it to new projects. <br />
          <strong>Disadvantages include:</strong>
          Tests will not uncover every bug. Unit tests only test sets of data
          and its functionality—it will not catch errors in integration. More
          lines of test code may need to be written to test one line of
          code—creating a potential time investment. Unit testing may have a
          steep learning curve, for example, having to learn how to use specific
          automated software tools.
        </p>
      </div>
      {/* Question 4 */}
      <div className="mt-8">
        <h1 className="text-xl sm:text-3xl font-serif font-semibold mb-3  ">
          React vs. Angular vs. Vue?
        </h1>
        <h3 className="text-lg sm:text-xl  font-semibold">React</h3>
        <p className="sm:text-lg">
          React, developed by Facebook, was initially released in 2013. Facebook
          uses React extensively in their products (Facebook, Instagram, and
          WhatsApp). Similar to Vue, the React developers also announce their
          newest version on the blog section of the React website.
        </p>
        <h3 className="text-lg sm:text-xl  font-semibold">Angular</h3>
        <p className="sm:text-lg">
          Angular, developed by Google, was first released in 2010, making it
          the oldest of the lot. It is a TypeScript-based JavaScript framework.
          A substantial shift occurred in 2016 on the release of Angular 2 (and
          the dropping of the “JS” from the original name – AngularJS). Angular
          2+ is known as just Angular. Although AngularJS (version 1) still gets
          updates, we will focus the discussion on Angular.
        </p>
        <h3 className="text-lg sm:text-xl  font-semibold">Vue</h3>
        <p className="sm:text-lg">
          Vue, also known as Vue.js, is the youngest member of the group. It was
          developed by ex-Google employee Evan You in 2014. Over the last
          several years, Vue has seen a substantial shift in popularity, even
          though it doesn’t have the backing of a large company. The most
          current version is always announced on the official Vue website on
          their releases page. Contributors for Vue are supported by Patreon. It
          should be noted that Vue also has its own GitHub repo, and functions
          using TypeScript. Further reading: Vue.js Tutorial for Beginner
          Developers
        </p>
      </div>
    </div>
  );
};

export default Blog;
