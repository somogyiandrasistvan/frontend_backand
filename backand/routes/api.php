<?php

use App\Http\Controllers\SelectController;
use App\Http\Controllers\WriterController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/tasks', [WriterController::class, 'index']);
Route::post('/tasks', [WriterController::class, 'store']);
Route::delete('/tasks/{id}', [WriterController::class, 'destroy']);
Route::put('/tasks/{id}', [WriterController::class, 'update']);

Route::get('/selects', [SelectController::class, 'index']);
Route::post('/selects', [SelectController::class, 'store']);
Route::delete('/selects/{id}', [SelectController::class, 'destroy']);

