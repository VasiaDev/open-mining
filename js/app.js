const {createApp} = Vue;

createApp({
    data() {
        return {
            isOpen: false
        };
    },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen;
            document.body.classList.toggle('no-scroll', this.isOpen);
        },
        onLinkClick(event) {
            const href = event.currentTarget.getAttribute('href');

            this.isOpen = false;
            document.body.classList.remove('no-scroll');

            if (window.location.hash == href) {
                event.preventDefault();
                const el = document.querySelector(href);
                if (el) {
                    el.scrollIntoView({behavior: 'smooth'});
                }
            }
        }
    }
}).mount('#app')