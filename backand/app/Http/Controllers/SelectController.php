<?php

namespace App\Http\Controllers;

use App\Models\Select;
use Illuminate\Http\Request;

class SelectController extends Controller
{
    public function index()
    {
        $writers = Select::all();
        return response()->json($writers);
    }

    public function store(Request $request)
    {
        $record = new Select();
        $record->nev = $request->nev;
        $record->szul = $request->szul;
        $record->save();

        return Select::find($record->id);
    }

    public function destroy($id)
    {
        $writers = Select::find($id)->delete();
        return response()->json(['message' => 'Sikeresen törölve'], 201);
    }
}
