// ES6+ example
import { BraketClient, CancelJobCommand } from "@aws-sdk/client-braket";
/** Here is the AWS SDK for JavaScript, Braket Client for Node.js, Browser, and React Native.
The Amazon Braket API Reference provides information about the operation and structures supported in Amazon Braket.

To install this package, simply type add or install @aws-sdk/client-braket using your favorite package manager:
 * npm install @aws-sdk/client-braket
 * yarn add @aws-sdk/client-braket
 * pnpm add @aws-sdk/client-braket

Getting Started.
Import. The AWS SDK is modulized by clients and commands. To send a request, you only need to import the `BraketClient` and the commands you need, for example `CancelJobCommand`:
// ES5 example
const { BraketClient, CancelJobCommand } = require("@aws-sdk/client-braket");

// ES6+ example
import { BraketClient, CancelJobCommand } from "@aws-sdk/client-braket";

Usage. To send a request, you:
 * Initiate client with configuration (e.g. credentials, region).
 * Initiate command with input parameters.
 * Call `send` operation on client with command object as input.
 * If you are using a custom http handler, you may call `destroy()` to close open connections.

// a client can be shared by different commands.
const client = new BraketClient({ region: "REGION" });

const params = {
  /** input parameters
}
const command = new CancelJobCommand(params);

Async/await
We recommend using await operator to wait for the promise returned by send operation as follows:
// async/await.
try {
  const data = await client.send(command);
  // process data.
} catch (error) {
  // error handling.
} finally {
  // finally.
}
Async-await is clean, concise, intuitive, easy to debug and has better error handling as compared to using Promise chains or callbacks.

Promises

You can also use Promise chaining to execute send operation.
client.send(command).then(
  (data) => {
    // process data.
  },
  (error) => {
    // error handling;
  }
);
Promises can also be called using `.catch()` and `.finally()` as follows:
client
  .send(command)
  .then((data) => {
    // process data.
  })
  catch((error) => {
    // error handling.
  })
  .finally(() => {
    // finally.
  });
Callbacks. We do not recommend using callbacks because of callback hell, but they are supported by the send operation.
// callbacks.
client.send(command, (err, data) => {
  // process err and data.
});

v2 compatible style. The client can also send requests using v2 compatible style. However, it results in a bigger bundle size and may be dropped in next major version. More details in the blog post on modular packages in AWS SDK for JavaScript

import * as AWS from "@aws-sdk/client-braket";
const client = new AWS.Braket({ region: "REGION" });

// async/await.
try {
  const data = await client.cancelJob(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .cancelJob(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.cancelJob(params, (err, data) => {
  // process err and data.
});

Troubleshooting. When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).
try {
  const data = await client.send(command);
  // process data.
} catch (error) {
  const { requestId, cfId, extendedRequestId } = error.$$metadata;
  console.log({ requestId, cfId, extendedRequestId });
  /**
   * The keys within exceptions are also parsed.
   * You can access them by specifying exception names:
   * if (error.name === 'SomeServiceException') {
   *    const value = error.specialKeyInException;
   * }
   *//*
}

Getting Help.
Please use these community resources for getting help. We use the GitHub issues for tracking bugs and feature requests, but have limited bandwidth to address them.
* Visit Developer Guide or API Reference.
* Check out the blog posts tagged with `aws-sdk-js` on AWS Developer Blog.
* Ask a question on StackOverflow and tag it with aws-sdk-js.
* Join the AWS JavaScript community on gitter.
* If it turns out that you may have found a bug, please open an issue.

To test your universal JavaScript code in Node.js, browser and react-native environments, visit our code samples repo.

Contributing. This client code is generated automatically. Any modifications will be overwritten the next time the @aws-sdk/client-braket package is updated. To contribute to client you can check our generate clients scripts.

License. This SDK is distributed under the Apache License, Version 2.0, see LICENSE for more information.
*/



/**
 * Amazon's trademarks and trade dress may not be used in connection with any product or service that is not Amazon's, in any manner
that is likely to cause confusion among customers, or in any manner that disparages or discredits Amazon. All other trademarks not
owned by Amazon are the property of their respective owners, who may or may not be affiliated with, connected to, or sponsored by
Amazon.
 * http://download.iteablue.com/21%E4%B8%AA%E5%BC%80%E5%8F%91%E4%BA%BA%E5%91%98%E5%B7%A5%E5%85%B7%E8%B5%84%E6%96%99%E5%8C%85/AWS%20%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7%E5%8C%85/Getting%20Started%20with%20the%20AWS%20SDK%20for%20JavaScript.pdf
 */

import logo from './logo.svg';
import './App.css';

function App() {
  try {
    // a client can be shared by different commands.
    const client = new BraketClient({ region: "REGION" });
    const params = {
      /** input parameters */
    };
    const command = new CancelJobCommand(params);

    client.send(command).then(
      (data) => {
        // process data.
        console.log("The data is ", data)
      },
      (error) => {
        // error handling.
        console.log("Has there been an error? ", error)
      }
    );

    // callbacks.
    client.send(command, (err, data) => {
      // process err and data.
      console.log("Process err and data. the err and data are ", err, data)
    })
  } catch (error) {
    console.log("There's an error! ", error)
  } finally {
    console.log("Finally!")
  }




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

// https://reactjs.org/docs/create-a-new-react-app.html

// Braket Client - AWS SDK for JavaScript v3
// https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-braket/index.html


/*
List of Common Errors

2App.js:23 Has there been an error?  Error: No value provided for input HTTP label: jobArn.
    at resolvedPath (resolve-path.js:16:1)
    at serializeAws_restJson1CancelJobCommand (Aws_restJson1.js:10:1)
    at async serializerMiddleware.js:8:1


2App.js:30 Process err and data. the err and data are  Error: No value provided for input HTTP label: jobArn.
    at resolvedPath (resolve-path.js:16:1)
    at serializeAws_restJson1CancelJobCommand (Aws_restJson1.js:10:1)
    at async serializerMiddleware.js:8:1 undefined
*/
