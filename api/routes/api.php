<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;
use App\Http\Controllers\BatchCodeController;
use App\Http\Controllers\BatchTypeController;
use App\Http\Controllers\BatchSlotController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\BatchController;
use App\Http\Controllers\FacultyController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('batchdata',[BatchCodeController::class,'Batchdata']);
Route::get('getBatchdata',[BatchCodeController::class,'getBatchdata']);
Route::get('showByIDBatch/{id}',[BatchCodeController::class,'showByIDBatch']);
Route::patch('UpdateBatch/{id}',[BatchCodeController::class,'UpdateBatch']);
Route::delete('DeleteBatch/{id}',[BatchCodeController::class,'DeleteBatch']);

Route::post('Batchtype',[BatchTypeController::class,'Batchtype']);
Route::get('getBatchtype',[BatchTypeController::class,'getBatchtype']);
Route::get('showByIDBatchtype/{id}',[BatchTypeController::class,'showByIDBatchtype']);
Route::patch('UpdateBatchtype/{id}',[BatchTypeController::class,'UpdateBatchtype']);
Route::delete('DeleteBatchtype/{id}',[BatchTypeController::class,'DeleteBatchtype']);

Route::post('Batchslot',[BatchSlotController::class,'Batchslot']);
Route::get('getBatchslot',[BatchSlotController::class,'getBatchslot']);
Route::get('showByIDBatchslot/{id}',[BatchSlotController::class,'showByIDBatchslot']);
Route::patch('UpdateBatchslot/{id}',[BatchSlotController::class,'UpdateBatchslot']);
Route::delete('DeleteBatchslot/{id}',[BatchSlotController::class,'DeleteBatchslot']);

Route::post('location',[LocationController::class,'location']);
Route::get('getlocation',[LocationController::class,'getlocation']);
Route::get('showByIDlocation/{id}',[LocationController::class,'showByIDlocation']);
Route::patch('Updatelocation/{id}',[LocationController::class,'Updatelocation']);
Route::delete('Deletelocation/{id}',[LocationController::class,'Deletelocation']);

Route::post('createbatch',[BatchController::class,'createbatch']);
Route::get('getdata',[BatchController::class,'getdata']);
Route::get('showBatchById/{id}',[BatchController::class,'showBatchById']);
Route::patch('update/{id}',[BatchController::class,'update']);
Route::delete('delete/{id}',[BatchController::class,'delete']);
Route::get('batchesList',[BatchController::class,'batchesList']);


Route::post('createfaculty',[FacultyController::class,'createfaculty']);
Route::get('getfacultydata',[FacultyController::class,'getfacultydata']);
Route::get('showfacultyById/{id}',[FacultyController::class,'showfacultyById']);
Route::patch('updatefaculty/{id}',[FacultyController::class,'updatefaculty']);
Route::delete('deletefaculty/{id}',[FacultyController::class,'deletefaculty']);
