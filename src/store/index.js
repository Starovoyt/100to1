import Vuex from 'vuex';
import ClientApi from "@/api";

export default new Vuex.Store({
    state: {
        rounds: [],
        answers: [],
        questions: [],
        players: [],
        settings: {},
        isBigGameAnswersShown: true,
        isGameStarterMode: false,
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
        },

        SET_QUESTIONS(state, questions) {
            state.questions = questions;
        },

        SET_PLAYERS(state, players) {
            state.players = players;
        },

        SET_BIG_GAME_ANSWERS_SHOWN(state, isShown) {
            state.isBigGameAnswersShown = isShown;
        },

        SET_GAME_STARTER_MODE(state, isGameStarterMode) {
            state.isGameStarterMode = isGameStarterMode;
        },
    },
    actions: {
        async INIT_APP({dispatch}) {
            dispatch('GET_SETTINGS');
            dispatch('GET_ROUNDS');
            dispatch('GET_ANSWERS');
            dispatch('GET_QUESTIONS');
            dispatch('GET_PLAYERS');
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

        async GET_QUESTIONS({commit}) {
            const questions = await ClientApi.getQuestions();
            commit('SET_QUESTIONS', questions);
        },

        async GET_PLAYERS({commit}) {
            const players = await ClientApi.getPlayers();
            commit('SET_PLAYERS', players);
        },

        SOCKET_SETTINGS_UPDATED({commit}, settings) {
            commit('SET_SETTINGS', settings);
        },

        SOCKET_ANSWERS_UPDATED({commit}, answers) {
            commit('SET_ANSWERS', answers);
        },

        SOCKET_PLAYERS_UPDATED({commit}, players) {
            commit('SET_PLAYERS', players);
        },

        SOCKET_TOGGLE_BIG_GAME_ANSWERS_SHOWN({commit, state}) {
            commit('SET_BIG_GAME_ANSWERS_SHOWN', !state.isBigGameAnswersShown);
        },

        SOCKET_TOGGLE_GAME_STARTER_MODE({commit, state}) {
            commit('SET_GAME_STARTER_MODE', !state.isGameStarterMode);
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

        isAnswersViewModeOn: (state) => {
            return state.settings.isAnswersViewModeOn;
        },

        currentRoundData: (state, getters) => {
            return state.rounds
                .find((round) => round.name === getters.currentRound) || {};
        },

        currentRoundName: (state, getters) => {
            return getters.currentRoundData.description;
        },

        currentQuestionData: (state, getters) => {
            const questionsList = state.questions
                .filter((question) => question.round === getters.currentRound);

            return questionsList?.[0] || {};
        },

        currentQuestionText: (state, getters) => {
            return getters.currentQuestionData.text;
        },

        bigGameQuestions: (state) => {
            return state.questions
                .filter((question) => question.round === 5)
                .sort((questionA, questionB) => questionA.order - questionB.order);
        },

        bigGameQuestionsWithAnswers: (state, getters) => {
            const questions = getters.bigGameQuestions.slice(0);

            questions.forEach((question) => {
                question.answers = state.answers
                    .filter((answer) => answer.round === question.round && answer.order === question.order)
                    .sort((answerA, answerB) => {
                        const textA = answerA.text.toLowerCase();
                        const textB = answerB.text.toLowerCase();

                        if (textA < textB)
                            return -1;
                        if (textA > textB)
                            return 1;

                        return 0;
                    });
            });

            return questions;
        },

        currentRoundAnswers: (state, getters) => {
            return state.answers
                .filter((answer) => answer.round === getters.currentRound)
                .sort((answerA, answerB) => answerA.order - answerB.order);
        },
    }
});