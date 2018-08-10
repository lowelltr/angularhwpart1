"use strict";
function TodoController(){
let vm = this;
    vm.toDoList =[ 
     
        {
            task:"Cleaning the Kitchen",
            completed: true
        },
        
        {
            task:"Cooking Dinner",
            completed: false
        },

        {
            task:"Reading books",
            completed: true
        }

    ]


}

    angular
    .module("todoApp")
    .controller("TodoController", TodoController);