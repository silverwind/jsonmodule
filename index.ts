#!/usr/bin/env -S node --import @swc-node/register/esm-register
import pkg from "./package.json" with {type: "module"};
console.log(pkg);
