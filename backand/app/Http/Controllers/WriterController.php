<?php

namespace App\Http\Controllers;

use App\Models\Writer;
use Illuminate\Http\Request;

class WriterController extends Controller
{
    public function index()
    {
        $writers = Writer::all();
        return response()->json($writers);
    }

    public function store(Request $request)
    {
        $record = new Writer();
        $record->nev = $request->nev;
        $record->szul = $request->szul;
        $record->save();

        return Writer::find($record->id);
    }

    public function destroy($id)
    {
        $writers = Writer::find($id)->delete();
        return response()->json(['message' => 'Sikeresen törölve'], 201);
    }

    public function update(Request $request, $id)
    {
        $user = Writer::find($id);
        $user->nev = $request->nev;
        $user->szul = $request->szul;
        $user->save();
    }
}
