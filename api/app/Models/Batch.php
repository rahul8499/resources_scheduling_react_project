<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Concerns\HasUuids;


class Batch extends Model
{
    use HasFactory, SoftDeletes, HasUuids ;
    
     protected $fillable=[
        'batch_code',
    ];

     function batchslot ()
    {
        return $this->hasOne('App\Models\BatchSlot');
    }
    //  function batchtype ()
    // {
    //     return $this->hasOne('App\Models\BatchType');
    // }
    //  function loction ()
    // {
    //     return $this->hasOne('App\Models\Location');
    // }
}
