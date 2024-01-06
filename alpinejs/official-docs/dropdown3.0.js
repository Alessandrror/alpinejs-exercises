function data() {
    return {
        open: null,

        onStart() {
            open = false;
        },

        onToggle() {
            this.open = !this.open;
        },

        clickOutside() {
            this.open = false;
        }
    }
}