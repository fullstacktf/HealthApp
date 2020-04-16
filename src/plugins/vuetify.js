import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false,
        themes: {
            dark: {
                primary: '#8bc34a',
                secondary: '#cddc39',
                accent: '#795548',
                error: '#f44336',
                warning: '#ffc107',
                info: '#009688',
                success: '#4caf50'
            },
            light: {
                primary: '#8bc34a',
                secondary: '#cddc39',
                accent: '#795548',
                error: '#f44336',
                warning: '#ffc107',
                info: '#009688',
                success: '#4caf50'
            },
        },
    },
});
