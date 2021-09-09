import React, { Component } from "react";

export default class HeadBar extends Component {
    render() {
        return (
<nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-gray-300 shadow sm:items-baseline w-full">
  <div class="mb-2 sm:mb-0">
    <a href="/home" class="text-2xl no-underline text-grey-darkest hover:text-blue-dark">{this.props.home}</a>
  </div>
  <div>
    <a href="/one" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">{this.props.one}</a>
    <a href="/two" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">{this.props.two}</a>
    <a href="/three" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">{this.props.three}</a>
  </div>
</nav>
        );
    }
}