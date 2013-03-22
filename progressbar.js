(function($)
{

    $.fn.extend(
    {
        // constructor
        progressBar: function(options, arg)
        {
            if (
                    (options && typeof(options) === 'object') ||
                    ( typeof(arg) === 'undefined' && typeof(options) === 'undefined')
                )
            {
                options = $.extend( {}, $.progressBar.defaults, options );
            }
            this.each(function ()
            {
                new $.progressBar(this, options, arg );
            });
            return;
        }
    });

    // internet object

    $.progressBar = function( elem, options, arg )
    {
        if (options && typeof(options) === 'string')
        {
           if (options == 'set')
           {
               progressBar_set( arg );
           }
           else if (options == 'inc')
           {
               progressBar_inc( arg );
           }
           else if (options == 'dec')
           {
               progressBar_dec( arg );
           }
           return;
        }
        else
        {
            if(options.percent < 0 || options.percent > 100)
            {
                return -1;
            }
            var percent = options.percent,
                cur = $(elem),
                progressBarWidth = parseInt(percent * cur.width() / 100, 10);
            
            // init, let's make html
            cur.children().remove();
            $('<span>').appendTo(cur);
            $('<div>').appendTo(cur);
            cur.addClass('micheg_progress');
            cur.find('div').addClass(options.color);
            cur.find('div').width(progressBarWidth).html("&nbsp;");
            cur.find('span').text(percent + '%');
            cur.data('progress', percent);
            cur.data('options', options);
            cur.data('init', true);
        }

        function progressBar_set (arg)
        {
            check();
            if(arg > -1 && arg < 101)
            {
                var cur = $(elem),
                    options = cur.data('options'),
                    progressBarWidth = parseInt(arg * cur.width() / 100, 10);
                cur.find('div').animate({ width: progressBarWidth }, options.animate_speed).html("&nbsp;");
                cur.find('span').text(arg + '%');
                cur.data('progress', arg);
            }
        }

        function progressBar_inc (arg)
        {
            check();
            var cur = $(elem),
                options = cur.data('options'),
                pro = parseInt(cur.data('progress'),10),
                tot = pro + parseInt(options.step, 10);
            progressBar_set(tot);
        }

        function progressBar_dec (arg)
        {
            check();
            var cur = $(elem),
                options = cur.data('options'),
                pro = parseInt(cur.data('progress'),10),
                tot = pro - parseInt(options.step, 10);
            progressBar_set(tot);
        }

        function check ()
        {
            if(! $(elem).data('init') )
            {
                throw {
                    name: "Plugin Error",
                    message: "Error detected. Plugin not inizialized"
                };
            }
        }
    };

    $.progressBar.defaults =
    {
        animate_speed: 500,
        color : 'blue',
        step : 5,
        percent: 0
    };

})(jQuery);