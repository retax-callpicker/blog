(function() {
    const template = /*html*/`
    <div class="mb-3">

        <b-icon
            v-for="index in starsOn"
            :key="'on-' + index"
            class="mr-1"
            icon="star-fill"
            variant="warning"
        ></b-icon>

        <b-icon
            v-for="index in starsOff"
            :key="'off-' + index"
            class="mr-1"
            icon="star"
            variant="secondary"
        ></b-icon>

    </div>
    `;

    Vue.component('stars', {

        data() {
            return {
                starsOn: 0,
                starsOff: 5
            }
        },

        mounted() {
                this.starsOn = Math.round(this.rating);
                this.starsOff = 5 - this.starsOn;
        },

        watch: {

            rating(newValue) {
                this.starsOn = Math.round(newValue);
                this.starsOff = 5 - this.starsOn;
            }

        },

        props: {
            rating: {
                type: Number,
                required: true
            }
        },

        template

    });

}())