@extends('layout.app')
@section('title','home')

@section('body')
    <p>UserName is {{ $user['name'] }}</p>
    <p>Age is {{ $user['age'] }}</p>
    @if ( $user['married'] )
        <p>Married</p>
    @else
        <p>Single</p>
    @endif
@endsection