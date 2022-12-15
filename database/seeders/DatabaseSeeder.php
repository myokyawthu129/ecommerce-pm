<?php

namespace Database\Seeders;
use App\Models\Admin;
use App\Models\Category;
use App\Models\User;
use App\Models\Supplier;
use App\Models\Color;
use App\Models\Brand;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        User::create([
            'name'=> "userone",
            'email'=> 'userone@a.com',
            'password'=> Hash::make('password')
        ]);
        Admin::create([
            'name' => "Admin",
            'email' => 'admin@a.com',
            'password' => Hash::make('password')
        ]);

        //category
        $category = ['T Shirt', 'Hat', 'Electronic', 'Mobile', 'EarPhone'];
        foreach($category as $c){
            Category::create([
                'slug' => Str::slug($c),
                'name' => $c,
                'mm_name' => "မြန်မာ",
                'image' => 'category.webp'
            ]);
        }

        //brand
        $brand = ['Samsung', 'Huawei', 'Apple'];
        foreach($brand as $c){
            Brand::create([
                'slug' => Str::slug($c),
                'name' => $c
            ]);
        }

        //colorr
        $color = ['red', 'green', 'blue', 'black'];
        foreach($color as $c){
            Color::create([
                'slug' => Str::slug($c),
                'name' => $c
            ]);
        }

        //supplier
        Supplier::create([
            'name' => "Mg Mg",
            'image' => "supplier.png"
        ]);
    }
}
