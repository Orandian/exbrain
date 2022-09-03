<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Psy\Command\WhereamiCommand;

class Student extends Model
{
    use HasFactory;

    /**
     * Get student list from DB
     */
    public function list()
    {
        return DB::table('students')
            ->orderBy("id", "desc")
            ->get();
    }

    /**
     * Insert data to DB
     */
    public function insertData($request)
    {
        DB::table('students')
            ->insert([
                "name" => $request->input('stdName'),
                "profile" => $request->input('stdProfile'),
                "email" => $request->input('stdEmail'),
                "age" => $request->input('stdAge'),
                "address" => $request->input('stdAddress'),
                "phone" => $request->input('stdPhone')
            ]);
    }

    public function searchById($id)
    {
        return DB::table('students')
            ->where("id", $id)
            ->first(); // to get the data json format
    }

    public function updateData($request, $id)
    {
        DB::table('students')
            ->where('id', $id)
            ->update([
                "name" => $request->input('stdName'),
                "profile" => $request->input('stdProfile'),
                "email" => $request->input('stdEmail'),
                "age" => $request->input('stdAge'),
                "address" => $request->input('stdAddress'),
                "phone" => $request->input('stdPhone')
            ]);
    }

    public function deleteData($id)
    {
        DB::table('students')
            ->where('id', $id)
            ->delete();
    }
};
