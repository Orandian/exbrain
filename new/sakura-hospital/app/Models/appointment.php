<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class appointment extends Model
{
    use HasFactory;

    public function list()
    {
        return DB::table('appointments')
            ->get();
    }

    public function insertData($request)
    {
        DB::table('appointments')
            ->insert([
                'doctor' => $request->input('doctor'),
                'room' => $request->input('room'),
                'appointment_date' => $request->input('appointment_date')
            ]);
    }

    public function deleteData($id)
    {
        DB::table('appointments')
            ->where('id', $id)
            ->delete();
    }
}
