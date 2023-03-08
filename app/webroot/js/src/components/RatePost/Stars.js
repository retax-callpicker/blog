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

        <span class="text-muted">({{ fixedRating }})</span>

    </div>
    `;

    Vue.component('stars', {

        data() {
            return {
                starsOn: 0,
                starsOff: 5,
                fixedRating: 0
            }
        },

        mounted() {
            this.calculateRating();
        },

        methods: {

            calculateRating() {

                let rating = 0;

                if(this.users_who_rated > 0)
                    rating = this.users_rating / this.users_who_rated;

                this.starsOn = Math.round(rating);
                this.starsOff = 5 - this.starsOn;
                this.fixedRating = rating.toFixed(2);
            }

        },

        watch: {

            users_rating() {
                this.calculateRating();
            }

        },

        props: {
            users_rating: {
                type: Number,
                required: true
            },
            users_who_rated: {
                type: Number,
                required: true
            },
        },

        template

    });

}())