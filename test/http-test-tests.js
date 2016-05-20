var o = require('atom').o(module).main
var _o = require('bond')._o(module)
var __ = require('fiber').__
var _ = require('lodash')
var assert = require('assert')

/******************************************************************************
 * http-test-tests
 */
var visited = []

var test = o({

  /**********************************************************************
   * _type
   */
  _type: '../lib/HttpTest',

  /**********************************************************************
   * name
   */
  name: "httptest",

  /**********************************************************************
   * tests
   */
  tests: [
    {
      reqSpec: {
        url: "https://raw.githubusercontent.com/carbon-io/test-tube/master/test/fixtures/test1.json?token=AAtDzfV-iOqjMHHVTkjx0tnK2AfC64NPks5XR9NYwA%3D%3D",
        method: "GET"
      },
      resSpec: {
        statusCode: 200,
        body: {
          a: 1,
          b: "hello",
          c: [ true, false ]
        }
      }
    }
  ]
})

