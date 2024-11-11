const myObj = {
    js:'javascript',
    cpp:'c plus plus',
    rb: 'ruby',
    s : 'swift'
}
// for in me key aati hai or for of me direct hii value aa jati hai
for (const key in myObj) {
    // console.log(`${key} full form is ${myObj[key]}`);
}

const myarr = [1,2,3,4,5]
for (const key in myarr) {
//    console.log(`index ${key} is for ${myarr[key]}`);
   
}

const map = new Map()
map.set('IN',"India")
map.set('UK',"united kingdom")
map.set('pa',"paris")
map.set('IN',"India")

for (const key in map) { //map is not iteratable
    console.log(key);
}