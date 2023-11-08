

export const users = [
    {
        _id:'1_8745845',
        name: 'Marcel',
        email:'marcel.rodg0@gmail.com',
        telephone:'67898239',
        address:'Douala, Cite des palmiers',
        password: '1234567',
        role:'customer'
    },

    {
        _id:'1_8VVFG5845',
        name: 'Mlain Moise',
        email:'mo-alain.deido0@gmail.com',
        telephone:'6459309',
        address:'Yaounde, Cite des palmiers',
        password: '3453',
        role:'customer',
        gender:'Male'
    },
    {
        _id:'1_8VVFsR5845',
        name: 'Admin',
        email:'mo-alain.deido0@gmail.com',
        telephone:'6459309',
        address:'Yaounde, Cite des palmiers',
        password: '3453',
        role:'admin'
    }
];

export const reviews = [
    { 
        _id: '12iuisudsd',
        author: {
            name: 'mandem'
        },
        createAt:'Thu Sep 10 2023 05:03:18 GMT+0300 (East Africa Time)',
        comment: 'Ciao blanditiis nam obcaecati animi ipsa repellendus numquam labore nesciunt distinctio quidem possimus at vero',
        rating: 4.3
    },
    { 
        _id: '45iuGGHudsd',
        author: {
            name: 'Dimitri Ndem'
        },
        createAt:'Thu Jan 12 2022 15:03:18 GMT+0300 (East Africa Time)',
        comment: 'Adipisicing Esse dolore cum harum illo vitae voluptas sit obcaecati accusamus numquam, itaque aut quia velit eveniet',
        rating: 4
    },
    { 
        _id: '45FFGGHudsd',
        author: {
            name: 'carlos'
        },
        createAt:'Thu Oct 02 2023 07:23:18 GMT+0300 (East Africa Time)',
        comment: 'Adipisicing Esse dolore cum harum illo vitae voluptas sit obcaecati accusamus numquam, itaque aut quia velit eveniet',
        rating: 4.3
    },
    { 
        _id: '45FFHudsd',
        author: {
            name: 'samira'
        },
        createAt:'Thu Nov 02 2023 05:03:18 GMT+0300 (East Africa Time)',
        comment: 'Esse dolore cum harum illo vitae voluptas sit obcaecati accusamus numquam, itaque aut quia velit eveniet um harum illo vitae voluptas eveniet',
        rating: 3
    }
];

export const orders = [

    { 
        _id: 'NBT-7834hj234TUJSDHJSDSD',
        status:'en cours',
        shipping:1000,

    }
];


export const produits = [
    {
        _id:'_id12341421',
        category : 'Bobo',
        sex: 'hommes',
        brand: 'x-malrya',
        style: 'africains',
        model:'Bobo Ghanien',
        tissue:['coton','pagne'],
        ageRange:'adulte',
        stock:[
            { color:'rouge', quantity: 12, taile: 'XL', mensuration:'22 16 42'}
        ],
        details: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, blanditiis nam obcaecati animi ipsa repellendus numquam labore nesciunt distinctio quidem possimus at vero assumenda!',
        promotion:false,
        discount: 0 ,
        price: 34000,
        images: [],
        Reviews: () => [reviews[1], reviews[0]]
    },
    {
        _id:'_id12341421',
        category : 'Bobo',
        sex: 'hommes',
        brand: 'x-malrya',
        style: 'africains',
        model:'Bobo Ghanien',
        tissue:['coton','pagne'],
        ageRange:'adulte',
        stock:[
            { color:'rouge', quantity: 12, taile: 'XL', mensuration:'22 16 42'}
        ],
        details: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, blanditiis nam obcaecati animi ipsa repellendus numquam labore nesciunt distinctio quidem possimus at vero assumenda!',
        promotion:false,
        discount: 0 ,
        price: 34000,
        images: [],
        Reviews: () => [reviews[1], reviews[0]]
    }
];