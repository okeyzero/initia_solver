const { solver } = require("./initia_solver.js");

const res = {
  algorithm: "SHA-256",
  challenge: "2e1a5667f632cb43efa2796bc2d858a3975a641dc59e80f430163eae138a2cbf",
  maxnumber: 5000000,
  salt: "157139f93ebee9de0cf869b16f0f3002bc17d02eb6e0a5059d727c0dd56b63ca?expires=1716268737",
  signature: "68eaa4b4fe5176b56193e0159cf56fad6e681a390eb18b6bce46c7d201bc7ef6",
};

async function main() {
  let start = Date.now();
  const challenge = Buffer.from(res.challenge, "hex");
  // console.log("challenge:", challenge);
  const result = solver(challenge, Buffer.from(res.salt), res.maxnumber);

  let took = Date.now() - start;
  console.log("找到答案:", result);
  console.log("耗时:", took, "毫秒");
  start = Date.now();
  solver(challenge, Buffer.from(res.salt), res.maxnumber);

  took = Date.now() - start;

  console.log("找到答案:", result);
  console.log("耗时:", took, "毫秒");
  start = Date.now();
  solver(challenge, Buffer.from(res.salt), res.maxnumber);

  took = Date.now() - start;
  console.log("找到答案:", result);
  console.log("耗时:", took, "毫秒");
}
main();
