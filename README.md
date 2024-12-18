# Hanging HTTP Server in Node.js

This repository demonstrates a common error in Node.js HTTP servers where the server hangs because the response is not properly ended.

## Bug

The `bug.js` file contains a simple HTTP server that sends a 'Hello, World!' message. However, it's missing a call to `res.end()`, causing the server to hang and not close the connection.

## Solution

The `bugSolution.js` file provides the corrected code. The addition of `res.end()` ensures that the response is properly sent and the connection is closed, preventing the server from hanging.