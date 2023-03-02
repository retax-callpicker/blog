const stringsMixin = {

    methods: {

        validateLength(event) {

            const permittedKeycodes = [8, 13, 16, 17, 18];

            if (this.form.title.length >= 50 && !permittedKeycodes.includes(event.keyCode))
                event.preventDefault();
                
        },

        trimTitle(title) {
            return title.substring(0, 50);
        },

    },

    watch: {

        'form.title': function(value) {
            this.form.title = this.trimTitle(value);
        }

    },

}