@extends('layout.app')

@section('title',"Student List")

@section('body')
    <h2 class="mt-3 text-center">Student List</h2>
    <a href="/student/create" class="btn btn-success">Add Student</a>

    <div class="row justify-content-center">
        @forelse ($stdList as $student)
        <div class="card col-md-4 m-3" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{{ $student->name }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{ $student->email }}</h6>
                <p class="card-text">{{ $student->profile }}</p>
                <a href="{{ route('student.edit',$student->id) }}" class="card-link">Update</a>

                <form action="{{ route('student.destroy', $student->id) }}" method="POST">
                    @csrf
                    @method("DELETE")
                    <button class="btn btn-link text-danger">Delete</button>
                </form>
            </div>
        </div>
        @empty
        <h4 class="mt-5 text-center">No Student Found.</h4>
        @endforelse
    </div>
    
@endsection