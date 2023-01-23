// 1678. Goal Parser Interpretation

/**
 * @param {string} command
 * @return {string}
 */
 var interpret = function(command) {
    return command.replaceAll('()','o').replaceAll('(al)','al');
};

 var interpret2 = function(command){
     return command.split('()').join('o').split('(al)').join('al');
 }

 command = "G()()()()(al)";

 console.log(interpret(command));
 console.log(interpret2(command));