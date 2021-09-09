import React, { Component } from "react";

export default class Button extends Component {
    render() {
        return (
  <div class="container mx-auto bg-white rounded-lg shadow-lg">
    <div class="md:h-40 py-20 md:py-0 flex justify-center items-center">
      <div class="md:space-x-20 space-y-10 md:space-y-0">
        <button class="py-3 px-6 text-white rounded-lg bg-red-500 shadow-lg block md:inline-block">{this.props.subs}</button>
        <button class="py-3 px-6 text-white rounded-lg bg-yellow-400 shadow-lg block md:inline-block">{this.props.comm}</button>
        <button class="py-3 px-6 text-white rounded-lg bg-purple-600 shadow-lg block md:inline-block">{this.props.like}</button>
        <button class="py-3 px-6 text-white rounded-lg bg-green-400 shadow-lg block md:inline-block">{this.props.donate}</button>
      </div>
    </div>
  </div>
        );
    }
}