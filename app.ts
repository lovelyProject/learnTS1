interface Parents {
	mother: {
		name: string;
		age: number;
		parents?: null;
    };
	father: {
        name: string;
        age: number;
		parents? : null;
	}
}
interface User {
	name: string;
	age: number;
	parents: Parents;
}

let user: User = {
	name: 'john',
	age: 30,
	parents: {
		mother: {
			name: 'jane',
			age: 30,
			parents: null
		},
		father: {
			name: 'eric',
			age: 30,
			parents: null
		}
	}
}