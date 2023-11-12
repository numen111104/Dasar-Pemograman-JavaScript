const greeting = (name, language) => {
    if(language === 'English') {
        console.log(`Good Morning ${name}`);
    } else if(language === 'Japan') {
        console.log(`Sumimasii PUKI ${name}`);
    }
}


const asrama = {
    'id': 12,
    'nickName' : 'Nide',
    'fullName' : 'Nu\'man Nasyar MZ',
    'school' : 'IDN Polytechnic'
}

let identifier = ({nickName, school}) => {
    console.log(`Helo ${nickName}, welcome to ${school}`)
}


// Three Consuctive dots(...) => {menggabungkan data array menjadi satu}
function sum(...numbers) {
    let result = 0;
    for(let number of numbers) {
        result += number;
    }
}
