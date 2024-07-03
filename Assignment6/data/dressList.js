import { getImageUrisByNames } from "../data/appRequirements.js";

const imageNames = ['dress1.png', 'dress2.png', 'dress3.png', 'dress4.png', 'dress5.png', 'dress6.png', 'dress7.png'];
const imageUris = getImageUrisByNames(imageNames);

export default DRESSES = [
    {id: '1', title: 'Office Wear', subTitle: 'reversible angora cardigan', price: '$50.00', image: imageUris[0]},
    {id: '2', title: 'Black', subTitle: 'reversible angora cardigan', price: '$60.00', image: imageUris[1]},
    {id: '3', title: 'Church Wear', subTitle: 'reversible angora cardigan', price: '$70.00', image: imageUris[2]},
    {id: '4', title: 'Lamerei', subTitle: 'reversible angora cardigan', price: '$80.00', image: imageUris[3]},
    {id: '5', title: '21WN', subTitle: 'reversible angora cardigan', price: '$90.00', image: imageUris[4]},
    {id: '6', title: 'Lopo', subTitle: 'reversible angora cardigan', price: '$100.00', image: imageUris[5]},
    {id: '7', title: '21WN', subTitle: 'reversible angora cardigan', price: '$110.00', image: imageUris[6]},
    {id: '8', title: 'lame', subTitle: 'reversible angora cardigan', price: '$120.00', image: imageUris[2]},
]

// for (let i = 0; i < imageUris.length; i++) {
//     DRESSES[i].image = imageUris[i];
// }
