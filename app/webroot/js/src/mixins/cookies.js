const cookiesMixin = {

    methods: {

        getCookie(cname) {
            let name = cname + "=";
            //let decodedCookie = decodeURIComponent(document.cookie);
            let ca = document.cookie.split(';');
            for(let i = 0; i <ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
                }
            }
            return "";
        },

        fixedEncodeURI (str) {
            return str.replace(/%5B/g, '[').replace(/%5D/g, ']').replace(/%2C/g, ',');
        }

    }

}