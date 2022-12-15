@extends('admin.layout.master')

@section('content')

<div>
    <a href="{{ route('category.create') }}" class="btn btn-success">Create Category</a>
</div>
<table class="table table-striped">
    <thead>
        <tr>
            <th>Name</th>
            <th>Name</th>
            <th>Name(MM)</th>
            <th>Option</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($category as $c)
            <tr>
                <td>
                    <img src="{{ asset('/images/'.$c->image) }}" width="50" alt="">
                </td>
                <td>{{ $c->name }}</td>
                <td>{{ $c->mm_name }}</td>
                <td>
                    <a href="{{ route('category.edit',$c->slug) }}" class="btn btn-primary">Edit</a>
                    <form action="{{ route('category.destroy',$c->slug) }}" class="d-inline" method="POST" onsubmit="return confirm('Sure For Delete?')">
                    @csrf
                    @method('DELETE')
                    <input type="submit" value="Delete" class="btn btn-danger">
                    </form>
                </td>
            </tr>
        @endforeach
    </tbody>
</table>
{{ $category->links() }}
@endsection
