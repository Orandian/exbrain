<?php

namespace App\Models;

use Dflydev\DotAccessData\Data;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class message extends Model
{
    use HasFactory;

    public function list()
    {
        return DB::table('messages')
            ->get();
    }

    public function insertData($request)
    {
        DB::table('messages')
            ->insert([
                "announcement" => $request->input('announcement'),
                "important" => $request->input('important')
            ]);
    }

    public function updateData($request, $id)
    {
        DB::table('messages')
            ->where("id", $id)
            ->insert([
                "announcement" => $request->input('announcement'),
                "important" => $request->input('important')
            ]);
    }

    public function searchById($id)
    {
        return DB::table('messages')
            ->where("id", $id)
            ->first();
    }

    public function deleteData($id)
    {
        DB::table('messages')
            ->where("id", $id)
            ->delete();
    }
}
