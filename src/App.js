import './App.scss';
import Card from './components/Card/Card';
import background from './assets/images/bg-music.jpg';
import avatar from './assets/images/avatar.jpg'
import React, { Component } from 'react';
import StateComp from './components/StateComp/StateComp';

// Class component
class App extends Component {
  render() {
      let vietnam = [{rate:3,rateclass:"arrow-up",num:1,song:"Còn gì nữa đâu",single:"MTP", avatar:"https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"},
  {rate:5,rateclass:"arrow-down",num:2,song:"Sóng gió",single:"Jack", avatar},
  {rate:1,rateclass:"arrow-up",num:3,song:"KKKKK",single:"Jack", avatar},
  {rate:2,rateclass:"arrow-down",num:4,song:"Trốn tìm",single:"Erik", avatar},
  {rate:4,rateclass:"arrow-up",num:5,song:"Sau tất cả",single:"Erik", avatar},
  {rate:2,rateclass:"arrow-down",num:6,song:"Sau tất cả",single:"Erik", avatar},
  {rate:1,rateclass:"arrow-up",num:7,song:"Sau tất cả",single:"Erik", avatar},
  {rate:3,rateclass:"arrow-down",num:8,song:"Sau tất cả",single:"Erik", avatar}
  ];
 let  usuk = [{rate:3,rateclass:"arrow-up",num:1,song:"Havana",single:"Camilla Cabello", avatar},
  {rate:5,rateclass:"arrow-down",num:2,song:"Con đường mưa",single:"Jack", avatar},
  {rate:1,rateclass:"arrow-up",num:3,song:"KKKKK",single:"Jack", avatar},
  {rate:2,rateclass:"arrow-down",num:4,song:"Trốn tìm",single:"Erik", avatar},
  {rate:4,rateclass:"arrow-up",num:5,song:"Sau tất cả",single:"Erik", avatar},
  {rate:2,rateclass:"arrow-down",num:6,song:"Sau tất cả",single:"Erik", avatar},
  {rate:1,rateclass:"arrow-up",num:7,song:"Sau tất cả",single:"Erik", avatar},
  {rate:3,rateclass:"arrow-down",num:8,song:"Sau tất cả",single:"Erik", avatar}
  ];
  let korea = [{rate:3,rateclass:"arrow-up",num:1,song:"Cheap Thrill",single:"Sia", avatar},
  {rate:5,rateclass:"arrow-down",num:2,song:"Day by day",single:"T-ara", avatar},
  {rate:1,rateclass:"arrow-up",num:3,song:"KKKKK",single:"Jack", avatar},
  {rate:2,rateclass:"arrow-down",num:4,song:"Trốn tìm",single:"Erik", avatar},
  {rate:4,rateclass:"arrow-up",num:5,song:"Sau tất cả",single:"Erik", avatar},
  {rate:2,rateclass:"arrow-down",num:6,song:"Sau tất cả",single:"Erik", avatar},
  {rate:1,rateclass:"arrow-up",num:7,song:"Sau tất cả",single:"Erik", avatar},
  {rate:3,rateclass:"arrow-down",num:8,song:"Sau tất cả",single:"Erik", avatar}
  ];
     return (
    <div className="App">
      <div className="App__wrapper" style={{backgroundImage: `url(${background})`}}>
        <div className="App__card">
          <Card data={vietnam} />
          <Card data={usuk} />
          <Card data={korea} />
        </div>
      </div> 

      <div className="App__state">
        <StateComp />
      </div>
    </div>
  );
  }
}


// Functional component

// function App(){
 

//   let vietnam = [{rate:3,rateclass:"arrow-up",num:1,song:"Còn gì nữa đâu",single:"MTP", avatar:"https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"},
//   {rate:5,rateclass:"arrow-down",num:2,song:"Sóng gió",single:"Jack", avatar},
//   {rate:1,rateclass:"arrow-up",num:3,song:"KKKKK",single:"Jack", avatar},
//   {rate:2,rateclass:"arrow-down",num:4,song:"Trốn tìm",single:"Erik", avatar},
//   {rate:4,rateclass:"arrow-up",num:5,song:"Sau tất cả",single:"Erik", avatar},
//   {rate:2,rateclass:"arrow-down",num:6,song:"Sau tất cả",single:"Erik", avatar},
//   {rate:1,rateclass:"arrow-up",num:7,song:"Sau tất cả",single:"Erik", avatar},
//   {rate:3,rateclass:"arrow-down",num:8,song:"Sau tất cả",single:"Erik", avatar}
//   ];
//  let  usuk = [{rate:3,rateclass:"arrow-up",num:1,song:"Havana",single:"Camilla Cabello", avatar},
//   {rate:5,rateclass:"arrow-down",num:2,song:"Con đường mưa",single:"Jack", avatar},
//   {rate:1,rateclass:"arrow-up",num:3,song:"KKKKK",single:"Jack", avatar},
//   {rate:2,rateclass:"arrow-down",num:4,song:"Trốn tìm",single:"Erik", avatar},
//   {rate:4,rateclass:"arrow-up",num:5,song:"Sau tất cả",single:"Erik", avatar},
//   {rate:2,rateclass:"arrow-down",num:6,song:"Sau tất cả",single:"Erik", avatar},
//   {rate:1,rateclass:"arrow-up",num:7,song:"Sau tất cả",single:"Erik", avatar},
//   {rate:3,rateclass:"arrow-down",num:8,song:"Sau tất cả",single:"Erik", avatar}
//   ];
//   let korea = [{rate:3,rateclass:"arrow-up",num:1,song:"Cheap Thrill",single:"Sia", avatar},
//   {rate:5,rateclass:"arrow-down",num:2,song:"Day by day",single:"T-ara", avatar},
//   {rate:1,rateclass:"arrow-up",num:3,song:"KKKKK",single:"Jack", avatar},
//   {rate:2,rateclass:"arrow-down",num:4,song:"Trốn tìm",single:"Erik", avatar},
//   {rate:4,rateclass:"arrow-up",num:5,song:"Sau tất cả",single:"Erik", avatar},
//   {rate:2,rateclass:"arrow-down",num:6,song:"Sau tất cả",single:"Erik", avatar},
//   {rate:1,rateclass:"arrow-up",num:7,song:"Sau tất cả",single:"Erik", avatar},
//   {rate:3,rateclass:"arrow-down",num:8,song:"Sau tất cả",single:"Erik", avatar}
//   ];
  

//   return (
//     <div className="App">
//       {/* <div className="App__wrapper" style={{backgroundImage: `url(${background})`}}>
//         <div className="App__card">
//           <Card data={vietnam} />
//           <Card data={usuk} />
//           <Card data={korea} />
//         </div>
//       </div>  */}

//       <div className="App__state">
//         <StateComp />
//       </div>
//     </div>
//   );
// }

export default App;
