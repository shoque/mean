'use strict';


angular.module('core').controller('SudokuController', ['$scope',
    function($scope) {




        $scope.generateTableRows = function() {

            var rows = [];

            for (var i = 0; i < 9; i++) {

                rows.push(i);
            }

            //  console.log("length : " + rows);
            return rows;


        }


        $scope.generateTableColumns = function() {

            var columns = [];

            for (var i = 0; i < 9; i++) {

                columns.push(i);
            }

            //console.log("length : " + columns);
            return columns;


        }





        var range = [1, 2, 3, 4, 5, 6, 7, 8, 9];


        var fillTheBlockCounter = 0;



        var board = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
        ];






        function fillFirstBlock() {


            var commonArray = [];

            do {

                var randomNumber = Math.ceil(Math.random() * range.length);

                if (commonArray.indexOf(randomNumber) == -1) {

                    commonArray.push(randomNumber);

                }

            } while (commonArray.length < 9)


            var fillTheBlockCounter = 0;

            for (var i = 0; i < 3; i++) {
                for (var j = 0; j < 3; j++) {

                    board[i][j] = commonArray[fillTheBlockCounter];

                    fillTheBlockCounter++;

                }

            }

        }






        function fillSecondBlock() {


            var commonArray = [];

            do {

                var randomNumber = Math.ceil(Math.random() * range.length);

                if (commonArray.indexOf(randomNumber) == -1) {

                    commonArray.push(randomNumber);

                }

            } while (commonArray.length < 9)


            var fillTheBlockCounter = 0;

            for (var i = 3; i < 6; i++) {
                for (var j = 3; j < 6; j++) {

                    board[i][j] = commonArray[fillTheBlockCounter];

                    fillTheBlockCounter++;

                }

            }

        }





        function fillThirdBlock() {


            var commonArray = [];

            do {

                var randomNumber = Math.ceil(Math.random() * range.length);

                if (commonArray.indexOf(randomNumber) == -1) {

                    commonArray.push(randomNumber);
                }


            } while (commonArray.length < 9)


            var fillTheBlockCounter = 0;

            for (var i = 6; i < 9; i++) {
                for (var j = 6; j < 9; j++) {

                    board[i][j] = commonArray[fillTheBlockCounter];

                    fillTheBlockCounter++;

                }

            }

        }













        function saveEmptyPositions(board) {


            // Create an array to save the positions
            var emptyPositions = [];

            // Check every square in the puzzle for a zero
            for (var i = 0; i < board.length; i++) {
                for (var j = 0; j < board[i].length; j++) {
                    // If a zero is found, save that position
                    if (board[i][j] == 0) {
                        emptyPositions.push([i, j]);
                    }
                }
            }

            // Return the positions
            return emptyPositions;
        };



        function checkRow(board, row, value) {
            // Iterate through every value in the row
            for (var i = 0; i < board[row].length; i++) {
                // If a match is found, return false
                if (board[row][i] === value) {
                    return false;
                }
            }
            // If no match was found, return true
            return true;
        };



        function checkColumn(board, column, value) {
            // Iterate through each value in the column
            for (var i = 0; i < board.length; i++) {
                // If a match is found, return false
                if (board[i][column] === value) {
                    return false;
                }
            }
            // If no match was found, return true
            return true;
        };



        function check3x3Square(board, column, row, value) {
            // Save the upper left corner
            var columnCorner = 0,
                rowCorner = 0,
                squareSize = 3;

            // Find the left-most column
            while (column >= columnCorner + squareSize) {
                columnCorner += squareSize;
            }

            // Find the upper-most row
            while (row >= rowCorner + squareSize) {
                rowCorner += squareSize;
            }

            // Iterate through each row
            for (var i = rowCorner; i < rowCorner + squareSize; i++) {
                // Iterate through each column
                for (var j = columnCorner; j < columnCorner + squareSize; j++) {
                    // Return false is a match is found
                    if (board[i][j] === value) {
                        return false;
                    }
                }
            }
            // If no match was found, return true
            return true;
        };



        function checkValue(board, column, row, value) {
            if (checkRow(board, row, value) &&
                checkColumn(board, column, value) &&
                check3x3Square(board, column, row, value)) {
                return true;
            } else {
                return false;
            }
        };



        function solvePuzzle(board, emptyPositions) {
            // Variables to track our position in the solver
            var limit = 9,
                i, row, column, value, found;
            for (i = 0; i < emptyPositions.length;) {
                row = emptyPositions[i][0];
                column = emptyPositions[i][1];
                // Try the next value
                value = board[row][column] + 1;
                // Was a valid number found?
                found = false;
                // Keep trying new values until either the limit
                // was reached or a valid value was found
                while (!found && value <= limit) {
                    // If a valid value is found, mark found true,
                    // set the position to the value, and move to the
                    // next position
                    if (checkValue(board, column, row, value)) {
                        found = true;
                        board[row][column] = value;
                        i++;
                    }
                    // Otherwise, try the next value
                    else {
                        value++;
                    }
                }
                // If no valid value was found and the limit was
                // reached, move back to the previous position
                if (!found) {
                    board[row][column] = 0;
                    i--;
                }
            }

            console.log('Board with solution looks: ');

            // A solution was found! Log it
            board.forEach(function(row) {

                console.log(row.join());
            });

            // return the solution
            return board;
        };




        $scope.solveSudoku = function(board) {

            var emptyPositions = saveEmptyPositions(board);

            return solvePuzzle(board, emptyPositions);

            //process.stdout.write('board array now looks: \n\n\n');

            for (var i = 0; i < 9; i++) {
                for (var j = 0; j < 9; j++) {

                    //process.stdout.write(board[i][j] + ', ');

                }
                //process.stdout.write('\n');
            }

            //process.stdout.write('\n\n\n\n');

        };





        //process.stdout.write('board array with solution looks: \n\n\n');

        //exports.solveSudoku(board);

        //process.stdout.write('\n\n\n\n');




        function makeRandomIndexEmpty(board) {

            var recordPreviousIndicesArray = [];

            var count = 0;

            do {

                var range = [0, 1, 2, 3, 4, 5, 6, 7, 8];


                var i = Math.floor(Math.random() * range.length);
                var j = Math.floor(Math.random() * range.length);


                if (recordPreviousIndicesArray.indexOf(i + "" + j) == -1) {

                    recordPreviousIndicesArray.push(i + "" + j);

                    board[i][j] = 0;
                }

            } while (recordPreviousIndicesArray.length < 62)



            var str = "";

            for (var a = 0; a < 9; a++) {
                for (var b = 0; b < 9; b++) {

                    //process.stdout.write(board[a][b] + ', ');


                    str = str + board[a][b] + ', ';
                    //console.log(board[a][b] + ', ');

                }

                str = str + '\n';
                //process.stdout.write('\n');
            }

            console.log("board array after making random index empty : \n" + str);

            return board;

        }












        fillFirstBlock();
        fillSecondBlock();
        fillThirdBlock();


        //saveEmptyPositions(board);
        solvePuzzle(board, saveEmptyPositions(board));
        makeRandomIndexEmpty(board);
        /*  checkRow(board, row, value);
          checkColumn(board, column, value);
          check3x3Square(board, column, row, value);
          checkValue(board, column, row, value);
          
          solveSudoku(board);


          makeRandomIndexEmpty(board);*/





        var strBoard = "";


        for (var a = 0; a < 9; a++) {
            for (var b = 0; b < 9; b++) {

                //process.stdout.write(board[a][b] + ', ');
                strBoard = strBoard + board[a][b] + ', ';
                //console.log(board[a][b] + ', ');

            }
            strBoard = strBoard + '\n';
        }


        console.log("board array : \n" + strBoard);





        $scope.returnAllBoardElements = function () {


            var singleDarray = [];


            for (var i = 0; i < 9; i++) {
                for (var j = 0; j < 9; j++) {

                    singleDarray.push(board[i][j]);

                }
            }

            return singleDarray;


            /*var str = "";

            for (var i = 0; i < singleDarray.length; i++) {



                str = str + singleDarray[i] + ', ';

                if (str.length % 9 == 0){

                    str = str + '\n';
                }


                
            }


            console.log("singleDarray array looks : \n" + str);*/



        }















    }


]);
