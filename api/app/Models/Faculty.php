<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Concerns\HasUuids;


class Faculty extends Model
{
    use HasFactory,SoftDeletes,HasUuids;

      protected $fillable=[
        'first_name',
        'last_name',
        'mail',
        'phone',
        'address',
        'age',
        'subject',
        'location_id',
        'batch_slot_id'
        
    ];

      function batchslot ()
    {
        return $this->hasOne('App\Models\BatchSlot');
    }
    //  function batchtype ()
    // {
    //     return $this->hasOne('App\Models\BatchType');
    // }
     function loction ()
    {
        return $this->hasOne('App\Models\Location');
    }
}
