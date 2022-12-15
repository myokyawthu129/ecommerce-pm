@extends('admin.layout.master')
@section('content')

<div>
    <a href="{{ route('category.index') }}" class="btn btn-dark">All Category</a>
</div>
<hr>
<form action="{{ route('category.store') }}" method="POST" enctype="multipart/form-data">
    @csrf
    <div class="form-group">
        <label for="">Enter Category Name</label>
        <input type="text" name="name" class="form-control">
    </div>
    <div class="form-group">
        <label for="">Enter Category Name(MM)</label>
        <input type="text" name="mm_name" class="form-control">
    </div>
    <div class="form-group">
        <label for="">Choose Image</label>
        <input type="file" name="image" class="form-control">
    </div>
    <input type="submit" value="Create" class="btn btn-primary">
</form>

@endsection
