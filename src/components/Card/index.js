import React, { Component } from "react";

export default class Card extends Component {
    render() {
        return (
<div class="h-96 bg-gray-200 flex justify-center items-center">
    {this.props.data.map((item)=>{
        return(
            <div class="max-w-2xl bg-white border-2 border-gray-300 p-5 rounded-md tracking-wide shadow-lg">
      <div id="header" class="flex"> 
         <img alt="gambar" class="w-40 rounded-md border-2 border-gray-300" src={this.props.image1} />
         <div id="body" class="flex flex-col ml-5">
            <h4 id="judul" class="text-xl font-semibold mb-2">{item.judul}</h4>
            <p id="isi" class="text-gray-800 mt-2">{item.isi}</p>
            <div class="flex mt-5">
               <img alt="avatar" class="w-6 rounded-full border-2 border-gray-300" src={this.props.image1} />
               <p class="ml-3">{item.nama}</p>
            </div>
         </div>
      </div>
   </div>
        )
    })}
   
</div>
        );
    }
}