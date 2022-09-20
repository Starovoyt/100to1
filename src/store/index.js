import Vuex from 'vuex';
import ClientApi from "@/api";

export default new Vuex.Store({
    state: {
        rounds: [],
        answers: [],
        settings: {},
    },
    mutations: {
        SET_SETTINGS(state, settings) {
            state.settings = settings;
        },

        SET_ROUNDS(state, rounds) {
            state.rounds = rounds;
        },

        SET_ANSWERS(state, answers) {
            state.answers = answers;
        }
    },
    actions: {
        async INIT_APP({dispatch}) {
            dispatch('GET_SETTINGS');
            dispatch('GET_ROUNDS');
            dispatch('GET_ANSWERS');
        },

        async GET_SETTINGS({commit}) {
            const settings = await ClientApi.getSettings();
            commit('SET_SETTINGS', settings);
        },

        async GET_ROUNDS({commit}) {
            const rounds = await ClientApi.getRounds();
            commit('SET_ROUNDS', rounds);
        },

        async GET_ANSWERS({commit}) {
            const answers = await ClientApi.getAnswers();
            commit('SET_ANSWERS', answers);
        },

        SOCKET_SETTINGS_UPDATED({commit}, settings) {
            commit('SET_SETTINGS', settings);
        },
    },
    getters: {
        isAppInit: (state) => {
            return !!(state.rounds
                && state.rounds.length
                && state.answers
                && state.answers.length
                && typeof (state.settings.generalScore) !== 'undefined'
                && typeof (state.settings.currentRound) !== 'undefined'
                && typeof (state.settings.blueTeamScore) !== 'undefined'
                && typeof (state.settings.blueTeamErrors) !== 'undefined'
                && typeof (state.settings.redTeamScore) !== 'undefined'
                && typeof (state.settings.redTeamErrors) !== 'undefined');
        },

        generalScore: (state) => {
            return state.settings.generalScore;
        },

        currentRound: (state) => {
            return state.settings.currentRound;
        },

        blueTeamScore: (state) => {
            return state.settings.blueTeamScore;
        },

        redTeamScore: (state) => {
            return state.settings.redTeamScore;
        },

        blueTeamErrors: (state) => {
            return state.settings.blueTeamErrors;
        },

        redTeamErrors: (state) => {
            return state.settings.redTeamErrors;
        },

        currentRoundData: (state, getters) => {
            return state.rounds
                .find((round) => round.name === getters.currentRound);
        },

        currentRoundAnswers: (state, getters) => {
            return state.answers
                .filter((answer) => answer.round === getters.currentRound)
                .sort((answerA, answerB) => answerA.order - answerB.order);
        },
    }
});