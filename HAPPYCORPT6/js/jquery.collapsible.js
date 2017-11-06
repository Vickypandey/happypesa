
(function($) {
    $.fn.collapsible = function (cmd, arg) {

       
        if (!this || this.length < 1) {
            return this;                           
        }

       
        if (typeof cmd == 'string') {
            return $.fn.collapsible.dispatcher[cmd](this, arg);
        }
        
       
        return $.fn.collapsible.dispatcher['_create'](this, cmd);
    };

   
    $.fn.collapsible.dispatcher = {

       
        _create : function(obj, arg) {
            createCollapsible(obj, arg);
        },

       
        toggle: function(obj) {
            toggle(obj, loadOpts(obj));
            return obj;
        },

       
        open: function(obj) {
            open(obj, loadOpts(obj));
            return obj;
        },

       
        close: function(obj) {
            close(obj, loadOpts(obj));
            return obj;
        },

       
        collapsed: function(obj) {
            return collapsed(obj, loadOpts(obj));
        },

       
        openAll: function(obj) {
            return openAll(obj, loadOpts(obj));
        },

       
        closeAll: function(obj) {
            return closeAll(obj, loadOpts(obj));
        }
    };

   
    function createCollapsible(obj, options)
    {

       
        var opts = $.extend({}, $.fn.collapsible.defaults, options);
        
       
        var opened = [];
        
       
        obj.each(function() {

            var $this = $(this);
            saveOpts($this, opts);
            
            
            if (opts.bind == 'mouseenter') {

                $this.bind('mouseenter', function(e) {
                    e.preventDefault(); 
                    toggle($this, opts);
                });
            }
            
            
            if (opts.bind == 'mouseover') {

                $this.bind('mouseover',function(e) {
                    e.preventDefault(); 
                    toggle($this, opts); 
                });
            }
            
            
            if (opts.bind == 'click') {

                $this.bind('click', function(e) {
                    e.preventDefault();
                    toggle($this, opts);
                });

            }
            
            
            if (opts.bind == 'dblclick') {

                $this.bind('dblclick', function(e) {

                    e.preventDefault();
                    toggle($this, opts);
                });

            }
            
            
            
            var id = $this.attr('id');
            
            
            if (!useCookies(opts)) {

                
                var dOpenIndex = inDefaultOpen(id, opts);
                
                
                if (dOpenIndex === false) {

                    $this.addClass(opts.cssClose);
                    opts.loadClose($this, opts);

                } else { 

                    $this.addClass(opts.cssOpen);
                    opts.loadOpen($this, opts);
                    opened.push(id);
                }

            } else { 

                
                if (issetCookie(opts)) {

                    var cookieIndex = inCookie(id, opts);

                    if (cookieIndex === false) {

                        $this.addClass(opts.cssClose);
                        opts.loadClose($this, opts);

                    } else {

                        $this.addClass(opts.cssOpen);
                        opts.loadOpen($this, opts);
                        opened.push(id);
                    }

                } else { 

                    dOpenIndex = inDefaultOpen(id, opts);

                    if (dOpenIndex === false) {

                        $this.addClass(opts.cssClose);
                        opts.loadClose($this, opts);

                    } else {

                        $this.addClass(opts.cssOpen);
                        opts.loadOpen($this, opts);
                        opened.push(id);
                    }
                }
            }
        });
        
        
        if (opened.length > 0 && useCookies(opts)) {

            setCookie(opened.toString(), opts);

        } else { 

            setCookie('', opts);
        }
        
        return obj;
    }
    
    
    function loadOpts($this) {
        return $this.data('collapsible-opts');
    }
    
    
    function saveOpts($this, opts) {
        return $this.data('collapsible-opts', opts);
    }
    
    
    function collapsed($this, opts) {
        return $this.hasClass(opts.cssClose);
    }
    
    
    function close($this, opts) {

        
        $this.addClass(opts.cssClose).removeClass(opts.cssOpen);
        
        
        opts.animateClose($this, opts);
        
        
        if (useCookies(opts)) {
            
            var id = $this.attr('id');
            unsetCookieId(id, opts);
        }
    }
    
    
    function open($this, opts) {

        
        $this.removeClass(opts.cssClose).addClass(opts.cssOpen);
        
        
        opts.animateOpen($this, opts);
        
        
        if (useCookies(opts)) {

            
            var id = $this.attr('id');
            appendCookie(id, opts);
        }
    }
    
   
    function toggle($this, opts) {

        if (collapsed($this, opts)) {

           
            open($this, opts);

        } else {

           
            close($this, opts);
        }
        
        return false;
    }

   
    function openAll($this, opts) {

       
        $.each($this, function(elem, value) {

            if (collapsed($(value), opts)) {

               
                open($(value), opts);
            }
        });
    }

   
    function closeAll($this, opts) {

        $.each($this, function(elem, value) {

            if (!collapsed($(value), opts)) {

               
                close($(value), opts);
            }
        });
    }
    
   
    function useCookies(opts) {

       
        if (!$.cookie || opts.cookieName == '') {
            return false;
        }
        
       
        return true;
    }
    
   
    function appendCookie(value, opts) {

       
        if (!useCookies(opts)) {
            return false;
        }
        
       
        if (!issetCookie(opts)) {

           
            setCookie(value, opts);
            return true;
        }
        
       
        if (inCookie(value, opts)) {
            return true;
        }
        
       
        var cookie = decodeURIComponent($.cookie(opts.cookieName));

       
        var cookieArray = cookie.split(',');
        
       
        cookieArray.push(value);
        
       
        setCookie(cookieArray.toString(), opts);
        
        return true;    
    }
    
   
    function unsetCookieId(value, opts)
    {
       
        if (!useCookies(opts)) {
            return false;
        }
        
       
        if (!issetCookie(opts)) {
            return true;
        }
        
       
        var cookieIndex = inCookie(value, opts);
        if (cookieIndex === false) {
            return true;
        }
        
       
        var cookie = decodeURIComponent($.cookie(opts.cookieName));
        
       
        var cookieArray = cookie.split(',');
        
       
        cookieArray.splice(cookieIndex, 1);

       
        setCookie(cookieArray.toString(), opts);

        return true
    }
    
   
    function setCookie(value, opts)
    {
       
        if (!useCookies(opts)) {
            return false;
        }
        
       
        $.cookie(opts.cookieName, value, opts.cookieOptions);

        return true;
    }
    
   
    function inCookie(value, opts)
    {
       
        if (!useCookies(opts)) {
            return false;
        }
        
       
        if (!issetCookie(opts)) {
            return false;
        }

       
        var cookie = decodeURIComponent($.cookie(opts.cookieName));
        
       
        var cookieArray = cookie.split(',');
        
       
        var cookieIndex = $.inArray(value, cookieArray);
        
       
        if (cookieIndex == -1) {
            return false;
        }
        
        return cookieIndex;
    }
    
    
    function issetCookie(opts)
    {
        
        if (!useCookies(opts)) { 
            return false;
        }
        
        
        if ($.cookie(opts.cookieName) === null) { 
            return false;
        }
        
        return true;
    }
    
    
    function inDefaultOpen(id, opts)
    {
        
        var defaultOpen = getDefaultOpen(opts);
        
        
        var index = $.inArray(id, defaultOpen);
        if (index == -1) { 
            return false;
        }
        
        return index;
    }
    
    
    function getDefaultOpen(opts)
    {
        
        var defaultOpen = [];
        
        
        if (opts.defaultOpen != '') {
            defaultOpen = opts.defaultOpen.split(',');
        }
        
        return defaultOpen;
    }
    
    
    $.fn.collapsible.defaults = {
        cssClose: 'collapse-close', 
        cssOpen: 'collapse-open', 
        cookieName: 'collapsible', 
        cookieOptions: { 
            path: '/',
            expires: 7,
            domain: '',
            secure: ''
        },
        defaultOpen: '', 
        speed: 'slow', 
        bind: 'click', 
        animateOpen: function (elem, opts) { 
            elem.next().stop(true, true).slideDown(opts.speed);
        },
        animateClose: function (elem, opts) { 
            elem.next().stop(true, true).slideUp(opts.speed);
        },
        loadOpen: function (elem, opts) { 
            elem.next().show();
        },
        loadClose: function (elem, opts) { 
            elem.next().hide();
        }
    };

})(jQuery);