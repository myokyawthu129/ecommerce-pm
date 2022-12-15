<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Product;


class HomeApi extends Controller
{
    public function home()
    {
        $category = Category::without('product')->get();
        $featureProduct = Product::all()->random(2);

        $productByCategory = Category::has('product')->take(2)->get();
        foreach($productByCategory as $k => $v){
            $productByCategory[$k]->product = Product::where('category_id', $v->id)->take(6)->get();
        }
        return response()->json([
            'success'=>true,
            'data'=>[
                'category'=>$category,
                'featureProduct'=>$featureProduct,
                'productByCategory'=>$productByCategory
            ]
            ]);

    }
}
