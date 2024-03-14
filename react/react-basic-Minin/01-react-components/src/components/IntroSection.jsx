import React from "react";
// export default function IntroSection(){
//     return(
//         <section>
//             <h1 className="centered">Чпоньк</h1>
//             <h3 className="centered" style={{color: '#666'}}>
//                 уххахахахахвхахахахахахахdfhd h  shshsgdh asghj sgjs gsj sgj sgja sg aga h ag
//                 a gh ah ag a ha
//                 </h3>
//         </section>
//     )
// }


export default function IntroSection(){
    return React.createElement('section', null,[
        React.createElement('h1', {className: 'centered',key:1},'Чпоньк'),
        React.createElement('h3', {className: 'centered', style: {color: '#666'}, key:2},'уххахахахахвхахахахахахахdfhd h  shsh')
        ])
}