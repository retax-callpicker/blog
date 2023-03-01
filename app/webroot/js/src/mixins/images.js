const imagesMixin = {

    data() {
        return {
            imagePreview: null,
        }
    },

    methods: {

        validateImage(image, file) {

            const result = {
                pass: true,
                message: ""
            }

            const imageWidth = image.naturalWidth;
            const imageHeight = image.naturalHeight;
            const mimeTypesPermitted = ["image/jpeg", "image/png", "image/x-png"];

            if(!mimeTypesPermitted.includes(file.type)) {
                result.pass = false;
                result.message = "El archivo debe de ser una imagen.";
                return result;
            }
        
            if ((imageWidth / imageHeight).toFixed(1) !== (16 / 9).toFixed(1)) {
                result.pass = false;
                result.message = "La imagen debe tener una relación de aspecto de 16:9";
                return result;
            }

            if(imageWidth < 1280) {
                result.pass = false;
                result.message = "La imagen debe tener una anchura mínima de 1280 píxeles.";
                return result;
            }

            return result;

        }

    },

    watch: {

        'form.file': function(image) {
            if (image != null)
                this.imagePreview = URL.createObjectURL(image);
            else
                this.imagePreview = null;
        }

    },

}