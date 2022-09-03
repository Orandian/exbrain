<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class drug extends Model
{
    use HasFactory;

    public function list()
    {
        return DB::table('drugs')
            ->get();
    }

    public function insertData($request)
    {
        DB::table('drugs')
            ->insert([
                "drug_name" => $request->input('drug_name'),
                "amount" => $request->input('amount'),
                "cost" => $request->input('cost'),
                "quatity" => $request->input('quatity')
            ]);
    }

    public function searchById($id)
    {
        return DB::table('drugs')
            ->where("id", $id)
            ->first();
    }

    public function updateData($request, $id)
    {
        DB::table('drugs')
            ->where('id', $id)
            ->update([
                "drug_name" => $request->input('drug_name'),
                "amount" => $request->input('amount'),
                "cost" => $request->input('cost'),
                "quatity" => $request->input('quatity')
            ]);
    }

    public function deleteData($id)
    {
        DB::table('drugs')
            ->where("id", $id)
            ->delete();
    }
}
