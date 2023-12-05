/*File: script.js
    GUI Assignment: HW4 Part 1
    Jordy Guzman, UMass Lowell Computer Science, Jordy_guzmanalcaraz@student.uml.edu (c) 2023 
    by Guzman. All rights reserved. May be freely copied or excerpted for educational 
    purposes with credit to the author.
*/
$(document).ready(function() {
    //Create a greater than or equal to validator rule
    $.validator.addMethod("greaterThanOrEqualTo", function(value, element, param) {
        var otherValue = $(param).val();
        return parseInt(value) >= parseInt(otherValue);
      }, "Maximum must be greater than or equal to Minimum");
      $.validator.addMethod("noFloats", function(value, element) {
        return this.optional(element) || /^\d+$|^-\d+$/.test(value);
      }, "Please enter a valid integer (positive or negative)");
    $("#TableForm").validate({
      rules: {
        //Sets rules for user input
        MinCol: {
            required: true,
            min: -50,
            max: 50,
            noFloats: true
        },
        MaxCol: {
            required: true, 
            min: -50, 
            max: 50,
            greaterThanOrEqualTo: "#MinCol",
            noFloats: true
        },
        MinRow: {
            required: true,
            min: -50,
            max: 50,
            noFloats: true
        },
        MaxRow: {
            required: true,
            min: -50,
            max: 50,
            greaterThanOrEqualTo: "#MinRow",
            noFloats: true
        }
      },
      //Error messages that are printed with invalid input
      messages: {
        MinCol: {
            required: "Please enter an integer value",
            min: "Value must be between -50 to 50",
            max: "Value must be between -50 to 50",
            noFloats: "Please enter a valid integer"
        },
        MaxCol: {
            required: "Please enter an integer value", 
            min: "Value must be between -50 to 50",
            max: "Value must be between -50 to 50",
            noFloats: "Please enter a valid integer"
        },
        MinRow: {
            required: "Please enter an integer value",
            min: "Value must be between -50 to 50",
            max: "Value must be between -50 to 50",
            noFloats: "Please enter a valid integer"
        },
        MaxRow: {
            required: "Please enter an integer value",
            min: "Value must be between -50 to 50",
            max: "Value must be between -50 to 50",
            noFloats: "Please enter a valid integer"
        },
        errorClass: "error",
      },
      //if valid input, create multiplication table
      submitHandler: function(form) {
        var MinCol = document.getElementById('MinCol').value;
        var MaxCol = document.getElementById('MaxCol').value;
        var MinRow = document.getElementById('MinRow').value;
        var MaxRow = document.getElementById('MaxRow').value;
        //Create variable that stores table
        const tableContainer = document.getElementById('MultTable');
        //Dynamically Create table based on user input values
        let table = '<table>';
        for (let i = MinRow - 1; i <= MaxRow; i++) {
            table += '<tr>';
            for (let j = MinCol - 1; j <= MaxCol; j++) {
                if (i === MinRow - 1 && j === MinCol - 1) {
                    table += `<th></th>`;
                } else if (i === MinRow - 1) {
                    table += `<th>${j}</th>`;
                } else if (j === MinCol - 1) {
                    table += `<th>${i}</th>`;
                } else {
                    table += `<td>${(i * j)}</td>`;
            }
            }
            table += '</tr>';
        }
        table += '</table>';
        tableContainer.innerHTML = table;
      }
    });
  });