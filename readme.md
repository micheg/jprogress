# Simple jquery plugin to create a progressbar


* tested on IE7 +, webkit, firefox
* html, css minimal
* see example [here](http://micheg.altervista.org/progress/ "progressbar sample").

HTML:

        <!doctype html>
        <html>
            <head>
                <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.js"></script>
                <script type="text/javascript" src="./progressbar.js"></script>
                <link rel="stylesheet" type="text/css" href="./progressbar.css">
            </head>
            <body>
                <div id="progressBar">
                <script>
                    $('#progressBar').progressBar();
                </script>
            </body>
        </html>

## Options:

* animate_speed => in millisecond, speed of progressbar animation.
* color => for now 3 simple theme: red, blue, green.
* step => in percentage, ex: 5
* percent => initial percentage, ex 40%

ex:

        $('#progressBar').progressBar({
            step : 2,
            color : 'green',
            percent : 50
        });


## Methods:

* set, setting a percentage, ex: $('#progressBar').progressBar('set', 50);
* inc, incement bar by step, ex $('#progressBar').progressBar('inc');
* dec, decrement bar by step, ex $('#progressBar').progressBar('dec');