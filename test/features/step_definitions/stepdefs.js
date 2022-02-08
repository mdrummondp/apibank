const assert = require("assert");
const { Given, When, Then } = require("cucumber");
let app = require("../../../src/test");

Given("teste validade {string}", function(givenDay) {
  this.today = givenDay;
});

When("a validade é inválida", function() {
  this.actualAnswer = app.isItFriday(this.today);
});

Then("o dia esperado é {string}", function(expectedAnswer) {
  assert.equal(this.actualAnswer, expectedAnswer);
});
