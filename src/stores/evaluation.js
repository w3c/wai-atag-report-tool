import atag from "../data/atag.js";
import { writable } from "svelte/store";

const scs = [];

for (const principle of atag) {
	for (const guideline of principle.guidelines) {
		for (const successcriterion of guideline.successcriteria) {
			scs[successcriterion.id] = {
				id: successcriterion.id,
				handle: successcriterion.handle,
        num: successcriterion.num,
				result: null,
				observations: null,
			};
		}
	}
};

export const evaluation = writable(scs);
