import Topic from './views/topic.vue';
import User from './views/user.vue';

export default function (router) {
    router.map({
        '/': {
            name: 'home',
            component: Topic
        },
        '/:user': {
            name: 'user',
            component: User
        }
    });
}