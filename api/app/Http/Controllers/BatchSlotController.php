<?php

namespace App\Http\Controllers;
use App\Models\BatchSlot;
use Illuminate\Http\Request;
class BatchSlotController extends Controller
{
     Public function Batchslot(Request $req)
    {
        $batchslot=new BatchSlot();
        $batchslot->name=$req->name;
        $result=$batchslot->save();
        if($result)
        {
            return["result"=>"data has been saved"];
        }
        else
        {
            return["result"=>"failed"];
        }
    }
     function showByIDBatchslot(Request $req, $id)
    {
        $batchslot = BatchSlot::find($id);
        return $batchslot;
    }
      
    public function getBatchslot(Request $req)
    {
        $requestParam = $req->all();
        $query=BatchSlot::select('batch_slots.*');
        if(!empty($requestParam))
        {
            $query->Where('batch_slots.name','like',"%".$requestParam['q']."%");
        }
        $query->orderBy("{$requestParam['sortBy']}","{$requestParam['sortOrder']}");
        $result=$query->paginate($requestParam['limit']);
        return $result;
    }
     public function UpdateBatchslot (Request $req, $id)
    {
       $batchslot = BatchSlot::find($id);
       $batchslot->name=$req->name;
       $batchslot->update();
        return $batchslot;
    }
      public function DeleteBatchslot ($id)
    { 
        $batchslot = BatchSlot::find($id);
        $result=$batchslot->delete();
        return["result"=>"data has been daleted"];
    }
    
    
}
