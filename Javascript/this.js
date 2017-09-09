//This on an object. Says in this object, refer to part of this particular object (ie deep_thought)
//the_table ie is saying deep_thought.the_table


// var deep_thought = {
//    the_answer: 54,
// 	 the_table:72,
//    ask_question: function () {
//     return this.the_table;
//    }
//   };
//
// //could be written like this
//
// var deep_thought = {
//    the_answer: 54,
// 	 the_table:72,
//    ask_question: function () {
//     return deep_thought.the_table;
//    }
//   };
//
//  var the_meaning = deep_thought.ask_question();
//
//  console.log("the meaning", the_meaning);
//
//  //"This" on an function as a constructor

 function BigComputer(answer) {
   this.the_answer = answer;
   this.ask_question = function () {
    return this.the_answer;
   }
  }

  var deep_thought = new BigComputer(64);
  var the_meaning = deep_thought.ask_question();
	console.log(the_meaning);

// Function call - this will revert to the window object
function test_this() {
   return this;
  }
  var i_wonder_what_this_is = test_this();

	console.log(i_wonder_what_this_is);
