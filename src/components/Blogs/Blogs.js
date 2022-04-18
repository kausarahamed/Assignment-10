import React from "react";

const Blogs = () => {
  return (
    <div className="pt-10 grid md:grid-cols-3 gap-5 py10 ">
      <div className="mx-5 mb-10 bg-white rounded-xl h-[500px] relative shadow-2xl p-3 ">
        <h2 className="text-2xl">
          01. Difference between authorization and authentication?
        </h2>
        <p className="text-xl mt-4  ">
          Authentication confirms who the client is but Authorization decides
          what assets a client can get to.Authentication works through
          passwords, one-time pins, biometric data, and other data given or
          entered by the client but Authorization works through settings that
          are implemented and maintained by the organization.Authentication is
          unmistakable to and in part changeable by the client but Authorization
          isn not unmistakable to or changeable by the client.
        </p>
      </div>
      <div className="mx-5 mb-10 bg-white rounded-xl h-[500px] relative shadow-2xl p-3">
        <h2 className="text-2xl">
          02. Why are you using firebase? What other options do you have to
          implement authentication?
        </h2>
        <p className="text-xl mt-4 ">
          I am using firebase because it is very easy to use for a devoloper and
          also easy to use for a user.Firebase made by google so that it provide
          a top level secruity for a user and develpoer.Firebase oversees all
          information real-time within the database.More often than not,
          verification by a server involves the utilize of a client title and
          watchword. other options is to implement authentication are
          AppWrite,AWS Amplify,Kuzzle,Parse.
        </p>
      </div>
      <div className="mx-5 mb-10 bg-white rounded-xl h-[500px] relative shadow-2xl p-3">
        <h2 className="text-2xl">
          03. What other services does firebase provide other than
          authentication?
        </h2>
        <p className="text-xl mt-4 ">
          There are many services which Firebase provides, Most useful of them
          are: Cloud Firestore, Cloud Functions, Hosting, Cloud Storage, Google
          Analytics, Predictions, Cloud Messaging, Dynamic Links, Remote Config.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
