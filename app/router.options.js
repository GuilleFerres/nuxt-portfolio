export default {
    scrollBehavior(to, from, savedPosition) {
        // `to` and `from` are both route locations
        // `savedPosition` can be null if there isn't one
        if(savedPosition) {
            return savedPosition;
        }
        if(to.hash) {
            return {
                el: to.hash,
                behaviour: 'smooth',
                top: 30
            }
        }
        return { left: 0, top: 0, behaviour: 'smooth' }
    }
}