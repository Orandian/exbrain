@extends('layout.app')

@section('title',"Register")

@section('body')
    <h2 class="mt-4 text-center">Student Register</h2>
    <form class="mt-5" action="{{ route('student.store') }}" method="POST">
        @csrf
        <div class="mb-3">
            <label class="form-label">Name</label>
            <input type="text" name="stdName" class="form-control">
        </div>
        <div class="mb-3">
            <label class="form-label">Profile</label>
            <input type="text" name="stdProfile" class="form-control">
        </div>
        <div class="mb-3">
            <label class="form-label">Email Address</label>
            <input type="text" name="stdEmail" class="form-control">
        </div>
        <div class="mb-3">
            <label class="form-label">Age</label>
            <input type="text" name="stdAge" class="form-control">
        </div>
        <div class="mb-3">
            <label class="form-label">Address</label>
            <input type="text" name="stdAddress" class="form-control">
        </div>
        <div class="mb-3">
            <label class="form-label">Phone</label>
            <input type="text" name="stdPhone" class="form-control">
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
    </form>
@endsection