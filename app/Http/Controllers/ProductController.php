<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
class ProductController extends Controller
{

    public function detail($slug){
        $product = Product::where('slug', $slug)->first();
        if(!$product){
            return redirect('/')->with('error','Product Not Found');
        }
        return view('product-detail', compact('product'));
    }

}
