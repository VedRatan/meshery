/**
 * @generated SignedSource<<421f4334a6a6f8ba072a28874d1839a3>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type Status = "ENABLED" | "CONNECTED" | "DISABLED" | "PROCESSING" | "UNKNOWN" | "%future added value";
export type OperatorStatusQuery$variables = {|
  k8scontextID: string,
|};
export type OperatorStatusQuery$data = {|
  +operator: ?{|
    +status: Status,
    +version: string,
    +controllers: $ReadOnlyArray<{|
      +name: string,
      +version: string,
      +status: Status,
    |}>,
    +error: ?{|
      +code: string,
      +description: string,
    |},
  |},
|};
export type OperatorStatusQuery = {|
  variables: OperatorStatusQuery$variables,
  response: OperatorStatusQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "k8scontextID"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "version",
  "storageKey": null
},
v3 = [
  {
    "alias": "operator",
    "args": [
      {
        "kind": "Variable",
        "name": "k8scontextID",
        "variableName": "k8scontextID"
      }
    ],
    "concreteType": "OperatorStatus",
    "kind": "LinkedField",
    "name": "getOperatorStatus",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      (v2/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "OperatorControllerStatus",
        "kind": "LinkedField",
        "name": "controllers",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          (v2/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Error",
        "kind": "LinkedField",
        "name": "error",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "code",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "description",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "OperatorStatusQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "OperatorStatusQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "841b7f336722e3bf6a6c57a9aba6ddd2",
    "id": null,
    "metadata": {},
    "name": "OperatorStatusQuery",
    "operationKind": "query",
    "text": "query OperatorStatusQuery(\n  $k8scontextID: String!\n) {\n  operator: getOperatorStatus(k8scontextID: $k8scontextID) {\n    status\n    version\n    controllers {\n      name\n      version\n      status\n    }\n    error {\n      code\n      description\n    }\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "ee746a7c43a6c4b8aa38b143e8a5b01e";

module.exports = ((node/*: any*/)/*: Query<
  OperatorStatusQuery$variables,
  OperatorStatusQuery$data,
>*/);
