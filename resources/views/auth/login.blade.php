@extends('layout.master')
{{-- @section('header-text','Login') --}}
@section('content')

<div class="container mt-4">
    <div class="row">
        <div class="col-6 offset-3">
            <div class="card">
                <div class="card-header bg-warning text-center text-white">
                    Login
                </div>
                <div class="card-body">
                    <form action="{{ url('/login') }}" enctype="multipart/form-data">
                        <div class="form-group">
                            <label for="">Enter Email</label>
                            <input type="email" name="email" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="">Enter Passowrd</label>
                            <input type="password" name="password" class="form-control">
                        </div>
                        <input type="submit" class="btn btn-warning" value="Login">
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection
