<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;

class ProductController extends Controller
{

    public function detail($slug){
        $product = Product::where('slug', $slug)->first();
        if(!$product){
            return redirect('/')->with('error','Product Not Found');
        }
        $category = Category::withCount('product')->get();
        return view('product-detail', compact('category','slug'));
    }

}
