@extends('layout.app')

@section('title',"Register")

@section('body')
    <h2 class="mt-4 text-center">Student Register</h2>
    <form class="mt-5" action="{{ route('student.update',$studentInfo->id) }}" method="POST">
        @csrf
        @method("PUT")
        <div class="mb-3">
            <label class="form-label">Name</label>
            <input type="text" name="stdName" value="{{ $studentInfo->name }}" class="form-control">
        </div>
        <div class="mb-3">
            <label class="form-label">Profile</label>
            <input type="text" name="stdProfile" value="{{ $studentInfo->profile }}" class="form-control">
        </div>
        <div class="mb-3">
            <label class="form-label">Email Address</label>
            <input type="text" name="stdEmail" value="{{ $studentInfo->address }}" class="form-control">
        </div>
        <div class="mb-3">
            <label class="form-label">Age</label>
            <input type="text" name="stdAge" value="{{ $studentInfo->age }}" class="form-control">
        </div>
        <div class="mb-3">
            <label class="form-label">Address</label>
            <input type="text" name="stdAddress" value="{{ $studentInfo->address }}" class="form-control">
        </div>
        <div class="mb-3">
            <label class="form-label">Phone</label>
            <input type="text" name="stdPhone" value="{{ $studentInfo->phone }}" class="form-control">
        </div>
        <button type="submit" class="btn btn-primary">Update</button>
    </form>
@endsection