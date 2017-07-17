/** global: Garnish */
/**
 * Pill
 */
Garnish.Pill = Garnish.Base.extend(
    {
        $outerContainer: null,
        $innerContainer: null,
        $btns: null,
        $selectedBtn: null,
        $input: null,

        init: function(outerContainer) {
            this.$outerContainer = $(outerContainer);

            // Is this already a pill?
            if (this.$outerContainer.data('pill')) {
                Garnish.log('Double-instantiating a pill on an element');
                this.$outerContainer.data('pill').destroy();
            }

            this.$outerContainer.data('pill', this);

            this.$innerContainer = this.$outerContainer.find('.btngroup:first');
            this.$btns = this.$innerContainer.find('.btn');
            this.$selectedBtn = this.$btns.filter('.active:first');
            this.$input = this.$outerContainer.find('input:first');

            Garnish.preventOutlineOnMouseFocus(this.$innerContainer);
            this.addListener(this.$btns, 'mousedown', 'onMouseDown');
            this.addListener(this.$innerContainer, 'keydown', 'onKeyDown');
        },

        select: function(btn) {
            this.$selectedBtn.removeClass('active');
            var $btn = $(btn);
            $btn.addClass('active');
            this.$input.val($btn.attr('data-value'));
            this.$selectedBtn = $btn;
        },

        selectNext: function() {
            if (!this.$selectedBtn.length) {
                this.select(this.$btns[this.$btns.length - 1]);
            }
            else {
                var nextIndex = this._getSelectedBtnIndex() + 1;

                if (this.$btns[nextIndex] !== undefined) {
                    this.select(this.$btns[nextIndex]);
                }
            }
        },

        selectPrev: function() {
            if (!this.$selectedBtn.length) {
                this.select(this.$btns[0]);
            }
            else {
                var prevIndex = this._getSelectedBtnIndex() - 1;

                if (this.$btns[prevIndex] !== undefined) {
                    this.select(this.$btns[prevIndex]);
                }
            }
        },

        onMouseDown: function(ev) {
            this.select(ev.currentTarget);
        },

        _getSelectedBtnIndex: function() {
            if (this.$selectedBtn[0] !== undefined) {
                return $.inArray(this.$selectedBtn[0], this.$btns);
            }
            else {
                return -1;
            }
        },

        onKeyDown: function(ev) {
            switch (ev.keyCode) {
                case Garnish.RIGHT_KEY: {
                    if (Garnish.ltr) {
                        this.selectNext();
                    }
                    else {
                        this.selectPrev();
                    }

                    ev.preventDefault();
                    break;
                }

                case Garnish.LEFT_KEY: {
                    if (Garnish.ltr) {
                        this.selectPrev();
                    }
                    else {
                        this.selectNext();
                    }

                    ev.preventDefault();
                    break;
                }
            }
        },

        /**
         * Destroy
         */
        destroy: function() {
            this.$outerContainer.removeData('pill');
            this.base();
        }
    }
);
