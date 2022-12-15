@extends('admin.layout.master')

@section('content')
<h2>
    Add For
    <b class="text-danger">{{ $product->name }}</b>
</h2>
<div>
    <a href="{{ route('product.index') }}">All Product</a>
</div>
<hr>
<form action="{{ url('admin/create-product-add/'.$product->slug) }}" method="POST">
    @csrf
    <div class="form-group">
        <label for="">Choose Supplier</label>
        <select name="supplier_id" class="form-control">
            @foreach ($supplier as $s)
                <option value="{{ $s->id }}">{{ $s->name }}</option>
            @endforeach
        </select>
    </div>
    <div class="form-group">
        <label for="">Enter Total Quantity</label>
        <input type="number" class="form-control" name="total_quantity">
    </div>
    <div class="form-group">
        <label for="">Enter Description</label>
        <textarea name="description" class="form-control"></textarea>
    </div>
    <input type="submit" value="Add" class="btn btn-primary">
</form>
@endsection
