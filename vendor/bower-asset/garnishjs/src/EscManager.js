/** global: Garnish */
/**
 * ESC key manager class
 */
Garnish.EscManager = Garnish.Base.extend(
    {
        handlers: null,

        init: function() {
            this.handlers = [];

            this.addListener(Garnish.$bod, 'keyup', function(ev) {
                if (ev.keyCode == Garnish.ESC_KEY) {
                    this.escapeLatest(ev);
                }
            });
        },

        register: function(obj, func) {
            this.handlers.push({
                obj: obj,
                func: func
            });
        },

        unregister: function(obj) {
            for (var i = this.handlers.length - 1; i >= 0; i--) {
                if (this.handlers[i].obj == obj) {
                    this.handlers.splice(i, 1);
                }
            }
        },

        escapeLatest: function(ev) {
            if (this.handlers.length) {
                var handler = this.handlers.pop();

                if (typeof handler.func == 'function') {
                    var func = handler.func;
                }
                else {
                    var func = handler.obj[handler.func];
                }

                func.call(handler.obj, ev);

                if (typeof handler.obj.trigger == 'function') {
                    handler.obj.trigger('escape');
                }
            }
        }
    }
);

Garnish.escManager = new Garnish.EscManager();
