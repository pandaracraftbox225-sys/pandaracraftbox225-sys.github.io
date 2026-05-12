
let sticker = {
    'catagoryName': 'Sticker',
    'medium': 'Digital Tablet',
    'itemList': [
        'assets/Lloyd_Irving_Sticker.png',
        'assets/Lloyd_Irving_Sticker.png',
        'assets/Lloyd_Irving_Sticker.png',
        'assets/Colette_Brunel_Sticker.png',
        'assets/Colette_Brunel_Sticker.png',
        'assets/Colette_Brunel_Sticker.png',
        'assets/Genis_Sage_Sticker.png',
        'assets/Genis_Sage_Sticker.png',
        'assets/Genis_Sage_Sticker.png',
        'assets/Raine_Sage_Sticker.png',
        'assets/Raine_Sage_Sticker.png',
        'assets/Raine_Sage_Sticker.png',
        'assets/Mieu_Sticker.png',
        'assets/Mieu_Sticker.png',
        'assets/Mieu_Sticker.png',
        'assets/Mieu_Sticker.png',
        'assets/Undine_Sticker.png',
        'assets/Ifreet_Sticker.png',
        'assets/Sylph_Sticker.png',
        'assets/Rem_Sticker.png',
        'assets/Gnome_Sticker.png',
        'assets/Celcius_Sticker.png',
        'assets/Volt_Sticker.png',
        'assets/Shadow_Sticker.png',
    ]
};

let colorPencil = {
    'catagoryName': 'Traditional',
    'medium': 'Colored Pencils',
    'itemList': [
        'assets/sylverant_field_trip.png',
    ]
};

let graphite = {
    'catagoryName': 'Traditional',
    'medium': 'Graphite',
    'itemList': [
        'assets/pet_graphite_1.png',
        'assets/pet_graphite_2.png',
        'assets/pet_graphite_2.png',
        'assets/pet_graphite_2.png',
    ]
};

let keychain = {
    'catagoryName': 'Fan Merchandise',
    'medium': 'Keychain',
    'itemList': [
        'assets/Inferia_Shaker_Charm.png',
        'assets/Celestia_Shaker_Charm.png',
    ]
};

const listOfCatagories = [
    sticker,
    sticker,
    sticker,
    sticker,
    sticker,
    sticker,
    sticker,
    sticker,
    colorPencil,
    colorPencil,
    graphite,
    keychain,
    keychain,
    keychain,
    keychain,
];


let getRandomCatagory = () => {
    return listOfCatagories[Math.floor(Math.random() * listOfCatagories.length)];
};

let displayRandomItemInCatagory = (itemList) => {
    document.querySelector('#artwork').src = itemList[Math.floor(Math.random() * itemList.length)];
};

let displayRandomCatagory = () => {
    let catagory = getRandomCatagory();
    console.log(catagory);
    document.querySelector('#catagory').innerHTML = catagory.catagoryName;
    document.querySelector('#medium').innerHTML = catagory.medium;
    displayRandomItemInCatagory(catagory.itemList);
};

window.setInterval(displayRandomCatagory, 3000);