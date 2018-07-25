$(document).ready(function () {
    //Opening button clears all values
    $("#openmodal, #open1, #open2, #open3, #open4").trigger("onclick");

    $("#openmodal, #open1, #open2, #open3, #open4").click(function () {
        $("#ex1output1").text("");
        $("#ex1output2").text("");
        $("#ex1output3").text("");
        $("#ex1output4").text("");
        $("#ex1output5").text("");

        $("#reveal1").text("");
        $("#reveal2").text("");
        $("#reveal3").text("");
        $("#reveal4").text("");
        $("#reveal5").text("");

        $("#ex1num1").val("");
        $("#ex1num2").val("");
        $("#ex1num3").val("");
        $("#ex1num4").val("");
        $("#ex1num5").val("");

        $("#ex2num1").val("");
        $("#ex2output1").text("");

        $("#ex3input1").val("");
        $("#ex3input2").val("");
        $("#ex3output1").text("");

        $("#ex4input1").val("");
        $("#ex4output1").text("");

    })

    //Functions for Exercise 1
    $('#ex1num1, #ex1num2, #ex1num3, #ex1num4, #ex1num5').on('keypress', function (event) {
        var x = event.charCode || event.which;
        if (x >= 97 && x <= 122)
            return false;
    });
    $("#btnEx1").click(function () {
        //Step 1: Collect the data
        var num1 = +($("#ex1num1").val());
        var num2 = +($("#ex1num2").val());
        var num3 = +($("#ex1num3").val());
        var num4 = +($("#ex1num4").val());
        var num5 = +($("#ex1num5").val());

        //Step 2: Do the math
        var Smallest = Math.min(num1, num2, num3, num4, num5);
        var Largest = Math.max(num1, num2, num3, num4, num5);
        var Sum = (num1 + num2 + num3 + num4 + num5);
        var Mean = Sum / 5;
        var Product = (num1 * num2 * num3 * num4 * num5);

        //Step 3: Output the results
        $("#reveal1").text("Smallest:");
        $("#reveal2").text("Largest:");
        $("#reveal3").text("Sum:");
        $("#reveal4").text("Mean:");
        $("#reveal5").text("Product:");

        $("#ex1output1").text(Smallest);
        $("#ex1output2").text(Largest);
        $("#ex1output3").text(Sum);
        $("#ex1output4").text(Mean);
        $("#ex1output5").text(Product);

    })

    //Functions for Exercise 2
    $('#ex2num1').on('keypress', function (event) {
        var x = event.keyCode || event.which;
        if (x < 48 || x > 57)
            return false;
    });
    $("#btnEx2").click(function () {
        //Step 1: Get number
        var fact = Number($("#ex2num1").val());
        var result = 1;
        //Step 2: Write a loop
        for (var loop = fact; loop > 0; loop--) {
            result = result * loop;
        }
        //Step 3: Output results
        $("#ex2output1").html(fact + "<span id='padding'>!: </span>" + result);
    })
    
    //Functions for Exercise 3
    $('#ex3input1, #ex3input2').on('keypress', function (event) {
        var x = event.keyCode || event.which;
        if (x < 48 || x > 57)
            return false;
    });
    $("#btnEx3").click(function () {
        var result = [];
        //Step 1: Get the user input
        var input1 = +($("#ex3input1").val());
        var input2 = +($("#ex3input2").val());

        //Step 2: Write a loop
        for (var loop = 1; loop <= 100; loop++) {

            if (loop % input1 == 0 && loop % input2 == 0)
                result.push("<span id='FizzBuzz'>FizzBuzz</span>");
            else if (loop % input1 == 0)
                result.push("<span id='Fizz'>Fizz</span>");
            else if (loop % input2 == 0)
                result.push("<span id='Buzz'>Buzz</span>");
            else
                result.push(loop);
        }

        //Step 3: Write out Fizz Buzz string
        $("#ex3output1").html(result.join(", "));
    })


    //Functions for Exercise 4
    $('#ex4input1').on('keypress', function (event) {
        var x = event.keyCode || event.which;
        if (x >= 48 && x <= 57)
            return false;
    });
    $("#btnEx4").click(function () {
        //Step 1: Get word or phrase
        var word = $("#ex4input1").val();
        //Step 2: Remove any extraneous characters
        var lower = word.toLowerCase();
        var nospace = lower.replace(/\s+/g, '');
        var nochar = nospace.replace(/[^a-zA-Z ]/g, "")
        //Step 3: Reverse word
        var revword = nochar.split("").reverse().join("");
        //Step 4: Check to see if palindrome
        var result = word + " is not a palindrome";
        if (nochar == revword) {
            result = word + " is a palindrome";
        }
        //Step 5: Output results
        $("#ex4output1").html(result);
    });

});