<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Location extends Model
{
   use HasFactory,SoftDeletes,HasUuids ;
    protected $fillable = ['id', 'name', 'updated_at', 'created_at'];

}