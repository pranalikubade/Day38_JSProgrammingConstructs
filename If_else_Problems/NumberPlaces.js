const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter a number: ', number => {let unit = number % 10;
        let ten = (number / 10) % 10;
        let hundred = (number / 100) % 10;
        let thousand = (number / 1000) % 10;
       let tenThousand = (number / 10000) % 10;
        console.log("Unit digit: " + unit);
        console.log("ten digit: " + ten);
        console.log("hundred digit: " + hundred);
        console.log("tenThousand digit: " + tenThousand);

    readline.close();
      return;
    });
  
   