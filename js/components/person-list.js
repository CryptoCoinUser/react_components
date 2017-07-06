// js/components/person-list.js
import React from 'react';
import Person from './person';

//with props 1.1.4
export default function PersonList() {
    return (
        <div className="person-list">
            <Person name="CryptoCoinUser"
                    imageUrl="https:\//avatars3.githubusercontent.com/u/6550474?v=3&s=460"
                    job="user of cryptocoins" />
            <Person name="Donald Knuth"
                    imageUrl="http://www-cs-faculty.stanford.edu/~uno/don.gif"
                    job="Clever chap" />
        </div>
    );
}



// export default function PersonList() {
//     return (
//         <div className="person-list">
//             <Person />
//             <Person />
//             <Person />
//             <Person />
//             <Person />
//         </div>
//     );
// }


// export default function PersonList() {
//     const people = [];
//     for (let i=0; i<5; i++) {
//         people.push(<Person />);
//     }
//     return (
//         <div className="person-list">
//             {people}
//         </div>
//     );
// }

//STATEFUL
/*
export default class PersonList extends React.Component {
    render() {
        const people = [];
        for (let i=0; i<2; i++) {
            people.push(<Person />);
        }
        return (
            <div className="person-list">
                {people}
            </div>
        );
    }
}
*/