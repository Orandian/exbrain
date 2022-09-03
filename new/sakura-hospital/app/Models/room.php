<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class room extends Model
{
    use HasFactory;

    public function list()
    {
        return DB::table('rooms')
            ->get();
    }

    public function insertData($request)
    {
        DB::table('rooms')
            ->insert([
                "room_number" => $request->input('room_number'),
                "number_of_patients" => $request->input('number_of_patients'),
                "total_cost" => $request->input('total_cost'),
                "room_status" => $request->input('room_status')
            ]);
    }

    public function searchById($id)
    {
        return DB::table('rooms')
            ->where("id", $id)
            ->first(); // to get the data json format
    }

    public function updateData($request, $id)
    {
        DB::table('rooms')
            ->where('id', $id)
            ->update([
                "room_number" => $request->input('room_number'),
                "number_of_patients" => $request->input('number_of_patients'),
                "total_cost" => $request->input('total_cost'),
                "room_status" => $request->input('room_status')
            ]);
    }

    public function deleteData($id)
    {
        DB::table('rooms')
            ->where('id', $id)
            ->delete();
    }
}
