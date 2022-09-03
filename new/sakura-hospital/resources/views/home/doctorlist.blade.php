@extends('layout.app')

@section('title','Doctor List')

@section('body')
<div class="main">
    <div class="header">
      <span id="logo"><img src="logo.png" alt="" /></span>
      <span class="contact"
        >Care Center
        <p id="phone"><ion-icon name="call"></ion-icon> </p></span>
    </div>
    <div class="mainbody">
      <div class="nav">
        <div class="systemname">Sakura Hospital</div>
        <ul class="menu">
          <a href="/">   <li ><ion-icon name="apps"></ion-icon> Dashboard</li></a>
        <li class="active"><ion-icon name="git-network"></ion-icon> Doctor List</li></a>
        </ul>
        <hr>
        <ul class="menu">
        </ul>
      </div>
      <div class="body">
        <p class="dashboard" style="margin-left: 20px;">Doctors</p>
        <div class="list" id="doctorsContainer">
        </div>
        
        <button id="btn-add" class="btn btnmessage">Add Doctor</button>
    </div>
  </div>
@endsection