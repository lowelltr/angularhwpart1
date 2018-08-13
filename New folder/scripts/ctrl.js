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
        
        }]
            vm.addTask =(newTask) =>{
                vm.toDoList.push({task:newTask,completed:false});
        }
            vm.removeTask =(index) =>{
            vm.toDoList.splice(index,1);
        }
            vm.completeTask=(index,completed)=>{
                vm.toDoList[index].completed=true;
            }

    

            }



    angular
    .module("todoApp")
    .controller("TodoController", TodoController)