$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("net/xeric/demos/adder.feature");
formatter.feature({
  "line": 1,
  "name": "Addition Feature",
  "description": "",
  "id": "addition-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Add two positive numbers",
  "description": "",
  "id": "addition-feature;add-two-positive-numbers",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on the demo page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I add the numbers 2 and 3",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the result is 5",
  "keyword": "Then "
});
formatter.match({
  "location": "DemoSteps.i_am_on_the_demo_page()"
});
formatter.result({
  "duration": 482412651,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    },
    {
      "val": "3",
      "offset": 24
    }
  ],
  "location": "DemoSteps.i_add_the_numbers_and(int,int)"
});
formatter.result({
  "duration": 272826320,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 14
    }
  ],
  "location": "DemoSteps.the_result_is(int)"
});
formatter.result({
  "duration": 42036153,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Add a negative and positive number",
  "description": "",
  "id": "addition-feature;add-a-negative-and-positive-number",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I am on the demo page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I add the numbers -2 and 3",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "the result is 1",
  "keyword": "Then "
});
formatter.match({
  "location": "DemoSteps.i_am_on_the_demo_page()"
});
formatter.result({
  "duration": 195548143,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-2",
      "offset": 18
    },
    {
      "val": "3",
      "offset": 25
    }
  ],
  "location": "DemoSteps.i_add_the_numbers_and(int,int)"
});
formatter.result({
  "duration": 203575887,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 14
    }
  ],
  "location": "DemoSteps.the_result_is(int)"
});
formatter.result({
  "duration": 28294773,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Add two negative numbers",
  "description": "",
  "id": "addition-feature;add-two-negative-numbers",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I am on the demo page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I add the numbers -2 and -3",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "the result is -5",
  "keyword": "Then "
});
formatter.match({
  "location": "DemoSteps.i_am_on_the_demo_page()"
});
formatter.result({
  "duration": 191424456,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-2",
      "offset": 18
    },
    {
      "val": "-3",
      "offset": 25
    }
  ],
  "location": "DemoSteps.i_add_the_numbers_and(int,int)"
});
formatter.result({
  "duration": 178157637,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-5",
      "offset": 14
    }
  ],
  "location": "DemoSteps.the_result_is(int)"
});
formatter.result({
  "duration": 28153143,
  "status": "passed"
});
formatter.uri("net/xeric/demos/counter.feature");
formatter.feature({
  "line": 1,
  "name": "Counter feature",
  "description": "",
  "id": "counter-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "The counter increments",
  "description": "",
  "id": "counter-feature;the-counter-increments",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on the demo page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the counter is called",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the count increases",
  "keyword": "Then "
});
formatter.match({
  "location": "DemoSteps.i_am_on_the_demo_page()"
});
formatter.result({
  "duration": 186711671,
  "status": "passed"
});
formatter.match({
  "location": "DemoSteps.the_counter_is_called()"
});
formatter.result({
  "duration": 102031794,
  "status": "passed"
});
formatter.match({
  "location": "DemoSteps.the_count_increases()"
});
formatter.result({
  "duration": 20909494,
  "status": "passed"
});
formatter.uri("net/xeric/demos/romanNumber.feature");
formatter.feature({
  "line": 1,
  "name": "Roman Number Conversion Feature",
  "description": "",
  "id": "roman-number-conversion-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Convert a number",
  "description": "",
  "id": "roman-number-conversion-feature;convert-a-number",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on the demo page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I convert number 10",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the conversion result is X",
  "keyword": "Then "
});
formatter.match({
  "location": "DemoSteps.i_am_on_the_demo_page()"
});
formatter.result({
  "duration": 177903525,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 17
    }
  ],
  "location": "DemoSteps.i_convert_number(int)"
});
formatter.result({
  "duration": 115536713,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "X",
      "offset": 25
    }
  ],
  "location": "DemoSteps.the_conversion_result_is(String)"
});
formatter.result({
  "duration": 19211166,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Convert a number",
  "description": "",
  "id": "roman-number-conversion-feature;convert-a-number",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I am on the demo page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I convert number -19",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "the conversion result is Please enter a postive number that is greater than zero",
  "keyword": "Then "
});
formatter.match({
  "location": "DemoSteps.i_am_on_the_demo_page()"
});
formatter.result({
  "duration": 161659607,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-19",
      "offset": 17
    }
  ],
  "location": "DemoSteps.i_convert_number(int)"
});
formatter.result({
  "duration": 122670753,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter a postive number that is greater than zero",
      "offset": 25
    }
  ],
  "location": "DemoSteps.the_conversion_result_is(String)"
});
formatter.result({
  "duration": 17866299,
  "status": "passed"
});
});