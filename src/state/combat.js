const combat = {
	namespaced: true,
	modules: {
	},
	state: {
		targetEnemy: null,
	},
	getters: {
		targetEnemy(state) {
			return state.targetEnemy;
		}
	},
	mutations: {
		cancelActions(state) {
			if (!state.targetEnemy) return;
			state.targetEnemy = null;
			// clearInterval(state.currentProgressTimeout);
		}
	},
	actions: {
		startCombat({ state, dispatch }, enemyId) {
			dispatch("cancelAllActions", {}, { root: true });
			state.targetEnemy = enemyId;
			dispatch("playerMob/startCombat", {}, { root: true });
			dispatch("enemyMob/startCombat", {}, { root: true });
		}
	}
};

export default combat;