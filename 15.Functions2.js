// function getUserRole(name,role){
//     switch(role){
//         case 'admin':
//             return `${name} is admin with all access`
//             break;
//         case 'adminSub admiin':
//             return `${name} is sub adminadmin with all access`
//             break;
//         case 'testprep':
//             return `${name} is testprep with testing access`
//             break;
//         default:
//             return `${name } is a trial user`
//             break;
//     }
// }
var getUserRole=function (name,role){
    switch(role){
        case 'admin':
            return `${name} is admin with all access`
            break;
        case 'adminSub admiin':
            return `${name} is sub adminadmin with all access`
            break;
        case 'testprep':
            return `${name} is testprep with testing access`
            break;
        default:
            return `${name } is a trial user`
            break;
    }
}
console.log(getUserRole("Jagadeesh","testprep"))
var getRole=getUserRole("Jagadeesh","admin");
console.log(getRole);