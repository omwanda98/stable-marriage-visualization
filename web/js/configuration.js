/*
 * This is for all the defaults of the application
 * such as the default input, default random names,
 * and more.
 */

// Refers to the minimum number of entity
// for configuration to be valid.
const defaultEntityCountMinimum = 1;

// Refers to the maximum number of entity
// for configuration to be valid.
const defaultEntityCountMaximum = 10;

// Refers to the maximum number of characters
// a name of an entity has.
const defaultEntityNameMaximum = 12;

// Default configuration, already following the defaults.
const defaultAlgorithmConfiguration = {
    male: [
        { 
            name: 'Pogba',
            preferences: ['Shensea', 'Nicole', 'Emma', 'Ruth', 'Joy']
        },
        {
            name: 'Joshua',
            preferences: ['Joy', 'Nicole', 'Shensea', 'Emma', 'Ruth']
        },
        {
            name: 'William',
            preferences: ['Shensea', 'Ruth', 'Nicole', 'Joy', 'Emma']
        },
        {
            name: 'Lucas',
            preferences: ['Nicole', 'Emma', 'Joy', 'Shensea', 'Ruth']
        },
        {
            name: 'Oliver',
            preferences: ['Ruth', 'Emma', 'Nicole', 'Joy', 'Shensea']
        }
    ],

    female: [
        {
            name: 'Joy',
            preferences: ['Pogba', 'Joshua', 'William', 'Lucas', 'Oliver']
        },
        {
            name: 'Emma',
            preferences: ['Joshua', 'William', 'Pogba', 'Lucas', 'Oliver']
        },
        {
            name: 'Nicole',
            preferences: ['Oliver', 'Pogba', 'Lucas', 'William', 'Joshua']
        },
        {
            name: 'Ruth',
            preferences: ['Oliver', 'Lucas', 'Joshua', 'William', 'Pogba']
        },
        {
            name: 'Shensea',
            preferences: ['Lucas', 'Joshua', 'Oliver', 'Pogba', 'William']
        }
    ]
};

// 50 male names sorted alphabetically. Used for random initializations.
const maleNames = [
'Aiden', 'Alexander', 'Andrew', 'Anthony', 'Asher', 'Benjamin', 'Caleb', 'Carter', 'Christopher', 'Daniel', 
'David', 'Dylan', 'Elijah', 'Ethan', 'Gabriel', 'Grayson', 'Henry', 'Issac', 'Jack', 'Jackson', 
'Jacob', 'James', 'Jaxon', 'Jayden', 'John', 'Joseph', 'Joshua', 'Julian', 'Leo', 'Levi',
'Liam', 'Lincoln', 'Logan', 'Lucas', 'Luke', 'Mason', 'Mount', 'Matthew', 'Michael', 'Nathan', 
'Noah', 'Giroud', 'Owen', 'Ryan', 'Samuel', 'Sebastian', 'Theodore', 'Thomas', 'William', 'Wyatt'
];

// 50 female names sorted alphabetically. Used for random initializations.
const femaleNames = [
'Abigail', 'Addison', 'Amelia', 'Aria', 'Aubrey', 'Audrey', 'Aurora', 'Ruth', 'Avery', 'Bella', 
'Brooklyn', 'Camila', 'Charlotte', 'Chloe', 'Claire', 'Eleanor', 'Elizabeth', 'Ella', 'Ellie', 'Emily',
'Emma', 'Evelyn', 'Grace', 'Hannah', 'Harper', 'Hazel', 'Isabella', 'Layla', 'Leah', 'Lillian', 'Lily',
'Luna', 'Madison', 'Mia', 'Mila', 'Natalie', 'Nora', 'Audrey', 'Penelope', 'Riley', 'Savannah', 'Scarlett',
'Skylar', 'Sofia', 'Sophia', 'Stella', 'Victoria', 'Violet', 'Zoe', 'Zoey'
];
